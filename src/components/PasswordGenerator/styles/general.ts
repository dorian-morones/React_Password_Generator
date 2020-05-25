import styled, { keyframes } from "styled-components";

const fades = keyframes`
  0% {opacity: 0;}
  20% {opacity: 1;}
  80% {opacity: 1;}
  100% {opacity: 0;}
`;

export const GeneratorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  width: auto;
  height: 40px;
  padding: 5px 8px;
  border: 0px;
`
export const PasswordContainer = styled.p`
  display: flex;
  opacity: 0;
  align-items: center;
  margin: 0px;
  font-weight: 600;
  margin-left: 15px;
  background: #eaeaea;
  border-left: solid 4px #009688;
  padding: 0px 10px;
  width: auto;
  height: 40px;
  animation: ${fades} 5s linear 1;
`
