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
        <meta charSet="utf-8" />
        <title>The Gallery Hotel</title>  
        <meta name="description" content="The Gallery Hotel - A boutique hotel in Greenport, New York"/>
        <meta name="keywords" content="Gallery Hotel, Gallery, Hotel, The Gallery Hotel, Greenport, Greenport Hotel, greenport hotel, hotel, gallery, long island, greenport new york hotel" />  
        <meta name="google-site-verification" content="nQQ1bMDAGxvzr9kUL6gMdW9WAmwYZz2NRTOCZK5Zx7k" />
        <link rel="icon" type="image/png" href="./favicon.ico" sizes="16x16" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
};

export default App;