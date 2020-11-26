import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import Layout from '../components/hoc/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    background-color: rgba(245, 247, 250, 0.9);
    color: #0c284f;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('./images/body-background.jpg');
    background-position: center center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    font-weight: 900;
    font-size: 3em;
    letter-spacing: -0.5px;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: -1.5px;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h3 {
    font-weight: 300;
    font-size: 1.5em;
  }

  h4 {
    letter-spacing: -1.5px;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 25px;
  }

  p {
    font-weight: 300;
  }

  @media (max-width: 599px) {
    h1 {
      font-size: 2.5em;
    } 
    h2 {
      font-size: 1.8em;
    }
    h3 {
      font-size: 1.2em;
    }
    h4 {
      font-size: 20px;
    }
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <> 
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" content="kon-tiki, kontiki, kontiki-gp, kontiki greenport, kon-tiki grenport, kon, tiki, greenport, restaurant, bar, gallery hotel, gallery, hotel" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>           
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
};

export default App;