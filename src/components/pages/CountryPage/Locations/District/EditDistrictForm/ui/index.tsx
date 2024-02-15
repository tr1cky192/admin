import { useCopyToClipboard } from 'common/hooks/ui/forms';
import { UrlDirButton } from 'components/shared/Buttons';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { Location } from 'types/addLocation';
import s from './index.module.scss';

type TModalProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  name: string;
  urls: Location[];
};

const Modal: FC<TModalProps> = (props: TModalProps): JSX.Element => {
  const { setActive, name, urls } = props;
  const [value, copy] = useCopyToClipboard();
  const allUrls = urls.map(obj => obj.url).toString();

  const AllUrlsCopied = value.copiedValue === allUrls;
  let AllUrlsClassName = `${s.copy__btn}`;
  let AllUrlsButtonText = 'Copy all 12 links';

  if (!AllUrlsCopied) {
    AllUrlsClassName = `${s.copy__all_btn}`;
  } else if (AllUrlsCopied) {
    AllUrlsClassName = `${s.copy__all_btn_true} ${s.copy__all_btn}`;
    AllUrlsButtonText = value.isCopied ? 'True' : 'False';
  } else if (AllUrlsCopied === false) {
    AllUrlsClassName = `${s.copy__all_btn} ${s.copy__all_btn_false}`;
  }
  return (
    <div className={s.modal}>
      <svg
        className={s.imageClose}
        onClick={() => setActive(false)}
        width="25"
        height="25"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0898 0L17.0898 34.1797M34.1797 17.0898L0 17.0898"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </svg>
      <div className={s.modal__window}>
        <div className={s.infoButton}>
          <UrlDirButton variable="purple">
            Add Dir <br />
            Hotelier
          </UrlDirButton>
        </div>
        <span className={s.name}>{name}</span>
        {urls.map((obj: Location) => {
          const isCopied = value.copiedValue === obj.url;
          let className = `${s.copy__btn}`;
          let buttonText = 'Copy';

          if (!isCopied) {
            className = `${s.copy__btn}`;
          } else if (isCopied) {
            className = `${s.copy__btn_true} ${s.copy__btn}`;
            buttonText = value.isCopied ? 'True' : 'False';
          } else if (isCopied === false) {
            className = `${s.copy__btn} ${s.copy__btn_false}`;
          }
          return (
            <div key={obj._id} className={s.url__item}>
              <button type="button" className={className} onClick={() => copy(obj.url)}>
                {buttonText}
              </button>
              <p className={s.url}>{`${obj.url.substring(0, 38)}...`}</p>
            </div>
          );
        })}
        <button type="button" className={AllUrlsClassName} onClick={() => copy(allUrls)}>
          {AllUrlsButtonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
