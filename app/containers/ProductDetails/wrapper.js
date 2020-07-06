import styled from 'styled-components';

export const Wrapper = styled.div`
  .fluid {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    line-height: 1.3;
    font-size: 16px;
  }
  .MuiRating-root {
    font-size: 1rem;
  }
  .fluid__instructions {
    flex: 0 0 auto;
    margin: 0 20px;
  }

  .fixed__instructions {
    flex: 1;
    margin: 0 20px;
  }

  a {
    color: black;
  }

  a:hover {
    color: #666;
  }

  .code {
    font-family: sans-serif, monospace;
  }

  @media (min-width: 480px) {
    .fluid {
      flex-direction: row;
    }

    .fluid__image-container {
      flex: 0 0 30%;
      margin: 20px 0 20px 20px;
    }

    .fluid__instructions {
      flex: 0 0 50%;
      padding-top: 30px;
    }

    .fixed__instructions {
      padding-top: 30px;
      margin: 0 10px;
    }

    .portal {
      position: absolute;
      top: 40px;
      left: -30px;
    }
  }
`;
