import React from "react";
import { PasswordGeneratorProps } from "./generator.types";
import { GeneratorContainer } from "./styles/general";

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ theme }) => {

  return (
    <GeneratorContainer>
      <input value="password"></input>
      <button onClick={e => console.log(e)}>new</button>
    </GeneratorContainer>
  );
};

export default PasswordGenerator;
