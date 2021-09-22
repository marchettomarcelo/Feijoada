import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
//import { HeaderComponent } from "./Components";
import "./styles.css"

import { Main, Botao, Header, Calculadora, Theme, H1, H2, HR} from "./Styled-Components/Calculator";


const App = () => {
  const [Pessoas, setPessoas] = useState(3)

  const menosPessoas = (menos=true) => {
    if(menos){
      return setPessoas(Pessoas-1)
    }
    return setPessoas(Pessoas+1)
  }
 
  return (<ThemeProvider theme={Theme}>
    <Main>

      <Calculadora>
        <H1 style={{ "margin-top": "0px" }}>Feijoada Crocpot</H1>
        <HR />
        <Header>

          <Botao onClick={() => menosPessoas()}>
            -
          </Botao>

          <H2>{Pessoas} pessoas</H2>

          <Botao onClick={()=> menosPessoas(false)}>
            +
          </Botao>
        </Header>
        <HR />

        <H2>Feijão {80*Pessoas}g</H2>
        <H2>Carne {265*Pessoas}g</H2>
        <H2>Água {265*Pessoas}ml</H2>



      </Calculadora>

    </Main>
  </ThemeProvider>)


}


ReactDOM.render(<App />, document.querySelector("#root"))

