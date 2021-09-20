import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
//import { HeaderComponent } from "./Components";

import { Main, Botao, Header, Calculadora, Theme, H1, H2 } from "./Styled-Components/Calculator";


const App = () => {
  const [Pessoas, setPessoas] = useState(3)

  const menosPessoas = () => {
    setPessoas(Pessoas - 1)
  }
  const maisPessoas = () => [
    setPessoas(Pessoas + 1)
  ]
  return (<ThemeProvider theme={Theme}>
    <Main>

      <Calculadora>
        <H1 style={{ "margin-top": "0px" }}>Feijoada Crocpot</H1>
        <Header>

          <Botao onClick={menosPessoas}>
            -
          </Botao>

          <H2>{Pessoas} pessoas</H2>

          <Botao onClick={maisPessoas}>
            +
          </Botao>

        </Header>
      </Calculadora>

    </Main>
  </ThemeProvider>)


}


ReactDOM.render(<App />, document.querySelector("#root"))

