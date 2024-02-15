import type { RefObject } from 'react';
import { useEffect } from 'react';

type CloseOnOutsideClickProps = {
  isEditing: boolean;
  stopEditing: () => void;
  cb?: () => void;
  formRef: RefObject<HTMLFormElement>;
};

export const useCloseOnOutsideClick = ({
  isEditing,
  stopEditing,
  formRef,
  cb,
}: CloseOnOutsideClickProps) => {
  useEffect(() => {
    if (!isEditing) return () => undefined;

    const onOutsideFormClickReset = (e: MouseEvent) => {
      const { target } = e;
      if (!(target instanceof Node)) return;
      if (!formRef.current || formRef.current.contains(target)) return;

      formRef.current.reset();

      stopEditing();
      if (cb) {
        cb();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', onOutsideFormClickReset, {
        passive: true,
        capture: true,
      });
    }, 0);

    const clear = () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', onOutsideFormClickReset, { capture: true });
      stopEditing();
    };

    return clear;
  }, [cb, formRef, isEditing, stopEditing]);
};
