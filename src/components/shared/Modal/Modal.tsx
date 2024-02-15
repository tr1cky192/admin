import type { MouseEventHandler, ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { getRefs } from 'common/utils';
import {
  BackdropStyled,
  CloseModalButtonStyled,
  CloseModalIcon,
  ModalStyled,
} from './Modal.styled';

const { modalRoot } = getRefs();

type ModalProps = {
  closeModal: () => void;
  children: ReactNode;
};

export const Modal = ({ closeModal, children }: ModalProps) => {
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const onEscCloseModal = ({ code }: KeyboardEvent) => {
      if (code !== 'Escape') return;
      closeModal();
    };

    document.addEventListener('keydown', onEscCloseModal, { passive: true });
    setIsMounted(true);

    return () => {
      document.removeEventListener('keydown', onEscCloseModal);
    };
  }, [closeModal]);

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    e => {
      if (e.currentTarget !== e.target) return;
      closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    closeModalButtonRef.current?.focus();
  }, []);

  const className = isMounted ? '' : 'isHidden';

  return createPortal(
    <BackdropStyled className={className} onClick={handleBackdropClick}>
      <ModalStyled className={className}>
        <CloseModalButtonStyled
          onClick={closeModal}
          type="button"
          ref={closeModalButtonRef}
          title="close"
        >
          <CloseModalIcon />
        </CloseModalButtonStyled>

        {children}
      </ModalStyled>
    </BackdropStyled>,
    modalRoot
  );
};
