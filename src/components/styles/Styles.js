import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #000;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(350px 200px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 0 5% 0;
    grid-template-rows: 160px ;

  }
  .display {
    font-family: 'Roboto', sans-serif;
    /* grid-area: display; */
    margin: 0 !important;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
      padding: 7% 0 0;
    }
    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 2rem;
        display: none;
      }
    }
  }
  .number-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 20px;
    width: 450px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
      grid-gap: 10px;

    }
    button {
      width: 100%;
      height: 100px;
      border-radius: 50%;
      border: none;
      font-size: 2.5rem;
      color: white;
      font-family: 'Roboto', sans-serif;
      background: #5c5c5c;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 500;
      }
      @media (max-width: 500px) {
        height: 85px;
        font-size: 1.5rem;
      }
    }
    button.function-button {
      color: #fff;
      background-color: #ffaf36;
    }
    button.gray-button {
      color: #000;
      background-color: #b8b8b8;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
  .zero-button button {
    border-radius: 60px;
    text-align: left;
    padding-left: 40px;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  max-width: 480px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 2.0rem;
      padding: 0px 0px 0px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
