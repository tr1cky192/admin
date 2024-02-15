 
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

export const Scroll = styled(ScrollToBottom)`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  word-wrap: break-word;

  > div {
    display: flex;
    flex-direction: column;
    gap: 13px;

    padding-bottom: 4px;
    padding-right: 15px;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 5.92593px;

    /* scrollbar */

    scrollbar-color: ${({ theme }) => theme.colors.scrollSecondColor}
      ${({ theme }) => theme.colors.white};

    ::-webkit-scrollbar {
      width: 15px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.scrollTrack};
      border: 6px solid ${({ theme }) => theme.colors.white};
    }

    ::-moz-scrollbar {
      scrollbar-width: thin;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.scrollSecondColor};
      border: 6px solid ${({ theme }) => theme.colors.white};
    }

    &:first-child {
      padding-top: 193px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 254px;

  padding: 8px 7px 4px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5.92593px;

`;

export const Inner = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 4px;

`;


export const MessageAuthorTime = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 11px;
  line-height: 15px/11px;
`;

export const MessageText = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 400;
  font-size: 11.1111px;
  line-height: 15px/11.1111px;
`;


export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.segoe};
  font-weight: 600;
  font-size: 25px;
  line-height: 33px/25px;

  margin: auto;

  color: rgba(101, 101, 101, 0.5);
`;
