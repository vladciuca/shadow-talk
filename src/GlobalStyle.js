import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color:  ${({ theme }) => theme.bgPrimary};
    background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(66,39,90,0.15) 100.2% );    
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text}
}

* {
  box-sizing: border-box;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
}

::-webkit-scrollbar {
  width: 0.2rem;
}
::-webkit-scrollbar-track {
  background: transparent;
}
 
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2); 
  opacity: 0.1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
textarea:focus, input:focus{
  outline: none;
}
`;

export default GlobalStyle;
