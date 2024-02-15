import { rgba } from 'polished';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      preTablet: string;
      tablet: string;
      preDesktop: string;
      desktop: string;
    };

    fonts: {
      roboto: string;
      segoe: string;
    };

    colors: {
      white: string;
      black: string;
      active: string;
      main: string;
      secondary: string;
      title: string;
      textAccent: string;
      textPrimary: string;
      textSecond: string;
      textThird: string;
      textFourth: string;
      countdown: string;
      editFirstTime: string;
      editSecondTime: string;
      textButton: string;
      scrollColor: string;
      scrollTrack: string;
      scrollSecondColor: string;
      scrollColorHover: string;
      bgColorChat: string;
      bgColorHotelier: string;
      bgColorInput: string;
      hoverArrowChat: string;
      hoverArrowHotelier: string;
      buttonTextColor: string;

      bg: {
        body: string;
        section: string;
        buttonEdit: string;
        buttonAddLocation: string;
        buttonSubmitAddLocation: string;
        buttonAddDirHotelier: string;
        hover: {
          buttonSelectLanguage: string;
        };
      };

      bgTransparent: {
        buttonHover: string;
        buttonActive: string;
        buttonCopyHover: string;
        buttonCopyActive: string;
        bgInput: string;
        bgFormAddCountry: string;
        buttonLoginHover: string;
        buttonLoginActive: string;
        buttonLogInHover: string;
        buttonEditHover: string;
        buttonEditActive: string;

        bgAgentSettingsHeader: string;
        buttonSaveDisabled: string;
        buttonSaveActive: string;

        buttonDeleteAccountHover: string;
        buttonCancelDelete: string;
        buttonCancelDeleteHover: string;
        buttonCancelDeleteActive: string;
        buttonGoBackHover: string;

        buttonSaveCountryDisabled: string;
        buttonSaveCountry: string;
        buttonSaveCountryHover: string;
        buttonSaveCountryActive: string;

        blackTransparentQuarter: string;
      };

      border: {
        input: string;
        bgBlockLink: string;
        buttonCopy: string;
        list: string;
        hoverBorder: string;
        btnBorder: string;
        btnBorderHover: string;
        borderList: string;
        borderActive: string;
      };

      borderTransparent: {
        bgSection: string;
        inputHover: string;
        inputFocus: string;
        bgBlock: string;
      };
    };

    shadows: {
      quarterBlack: string;
      notification: string;
      countrySelector: string;
      buttonCancel: string;
      cancelDeleteCard: string;
      buttonAddLocation: string;
      modal: string;
      buttonModal: string;
    };

    transition: {
      110: string;
      160: string;
      250: string;
    };

    zIndex: {
      countryPage: {
        countriesDropdown: number;
        languagesModal: number;
      };

      modal: number;
      toastify: number;
      appLoading: number;
    };
  }
}

export const breakpoints = {
  mobile: '320px',
  preTablet: '767px',
  tablet: '768px',
  preDesktop: '1199px',
  desktop: '1200px',
};

export const fonts = {
  roboto:
    "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  segoe:
    "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const permanent = {
  white: '#ffffff',
  black: '#000000',
};

// not assigned - it means there is no color equivalent selected for dark mode.
const currentlyNotAssigned = {
  active: '#2196f3',
  secondary: '#282c34',
  title: '#0090ff',
  textAccent: '#006bbe',
  textPrimary: '#656565',
  textSecond: '#ff6000' as const,
  textThird: '#4c4c4c',
  textFourth: '#a5a5a5',
  countdown: '#ff001f',
  editFirstTime: '#ff931e',
  editSecondTime: '#9b9b9b',
  textButton: '#626367',
  scrollColor: '#ebebeb',
  scrollTrack: '#EBEDFE',
  scrollSecondColor: '#BABABF',
  scrollColorHover: '#c4c4c4',
  bgColorChat: '#DADCEA',
  bgColorHotelier: '#0090FF',
  bgColorInput: '#D9D9D9',
  hoverArrowChat: '#0090FF',
  hoverArrowHotelier: '#ededed',
  buttonTextColor: '#006c0b',
};

export const light = {
  ...permanent,
  ...currentlyNotAssigned,
  main: '#212121',
};

export const border = {
  input: '#d0d0d0',
  bgBlockLink: '#c9c9c9',
  buttonCopy: '#09dd1e',
  list: '#787878',
  hoverBorder: '#0090ff',
  btnBorder: '#AEAFBC',
  btnBorderHover: '#4c4c4c',
  borderList: '#A5A5A5',
  borderActive: '#000000',
};

export const borderTransparent = {
  bgSection: rgba(0, 0, 0, 0.18),
  inputHover: rgba(light.textAccent, 0.5),
  inputFocus: rgba(light.textAccent, 0.7),
  bgBlock: rgba(border.input, 0.5),
};

const bgNotAssigned = {
  section: '#f4f4f4',
  buttonEdit: '#dedede',
  buttonAddLocation: '#ebecfe',
  buttonSubmitAddLocation: '#c5c7ee',
  buttonAddDirHotelier: '#6AFF79',
  hover: {
    buttonSelectLanguage: '#e5e5e5',
  },
};

export const bgLight = {
  body: '#C1D5E4' as const,
  ...bgNotAssigned,
};

const bgTransparentNotAssigned = {
  buttonHover: rgba(255, 96, 0, 0.9),
  buttonActive: rgba(255, 96, 0, 0.75),
  buttonCopyHover: rgba(106, 255, 121, 0.32),
  buttonCopyActive: rgba(106, 255, 121, 0.8),

  buttonLoginHover: rgba(106, 255, 121, 0.69),
  buttonLoginActive: rgba(106, 255, 121, 0.45),

  bgFormAddCountry: rgba(bgLight.body, 0.33),

  buttonEditHover: rgba(bgLight.buttonEdit, 0.6),
  buttonEditActive: rgba(bgLight.buttonEdit, 0.9),

  bgAgentSettingsHeader: rgba(light.textAccent, 0.05),
  buttonSaveDisabled: rgba(light.textAccent, 0.39),
  buttonSaveActive: rgba(light.textAccent, 0.8),

  buttonDeleteAccountHover: rgba(light.black, 0.6),
  buttonCancelDelete: rgba(light.textThird, 0.2),
  buttonCancelDeleteHover: rgba(light.textThird, 0.28),
  buttonCancelDeleteActive: rgba(light.textThird, 0.11),
  buttonGoBackHover: rgba(light.textThird, 0.1),
  buttonLogInHover: rgba(light.textThird, 0.69),

  buttonSaveCountryDisabled: rgba(light.title, 0.5),
  buttonSaveCountry: rgba(light.title, 0.7),
  buttonSaveCountryHover: rgba(light.title, 0.9),
  buttonSaveCountryActive: rgba(light.title, 0.3),

  blackTransparentQuarter: rgba(light.black, 0.25),
};

export const bgTransparentLight = {
  ...bgTransparentNotAssigned,
  bgInput: rgba(bgLight.section, 0.5),
};

export const dark = {
  ...permanent,
  ...currentlyNotAssigned,
  main: bgLight.body,
};

export const bgDark = {
  body: '#282828',
  ...bgNotAssigned,
};

export const bgTransparentDark = {
  ...bgTransparentNotAssigned,
  bgInput: rgba(bgDark.section, 0.5),
};

const quarterBlack = rgba(0, 0, 0, 0.25);

export const shadows = {
  quarterBlack,
  notification: `0 0 4px ${quarterBlack}`,
  countrySelector: `0 0 9px 2px ${quarterBlack}`,
  buttonCancel: `0 0 5px 2px ${quarterBlack}`,
  buttonModal: `0 2px 2px ${quarterBlack}`,
  cancelDeleteCard: `0 0 10px ${rgba(light.black, 0.3)}`,
  buttonAddLocation: `0 0 5px ${rgba(light.black, 0.3)}`,
  modal: `0px 2px 4px ${rgba(light.black, 0.15)}`,
};

const cubic = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const transition = {
  110: `110ms ${cubic}`, // short
  160: `160ms ${cubic}`, // fast
  250: `250ms ${cubic}`, // normal
};

export const zIndex = {
  countryPage: {
    countriesDropdown: 100,
    languagesModal: 1000, // Modal
  },

  modal: 1000, // Modal
  // closeModalButtonStyled: 1001,
  toastify: 9999,
  appLoading: 10000,
};
