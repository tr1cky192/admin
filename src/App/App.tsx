import { useCustomTheme } from 'common/hooks';
import { ThemeProvider } from 'styled-components/macro';
import { ScrollContainer } from 'components/shared/Container';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'styles/GlobalStyle';
import { AppStyled } from 'App/App.styled';

import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <ScrollContainer>
        <GlobalStyle />

        <AppStyled className="App">
          <Layout />
        </AppStyled>

        <ToastContainer position="top-center" autoClose={2800} transition={Flip} />
      </ScrollContainer>
    </ThemeProvider>
  );
};
