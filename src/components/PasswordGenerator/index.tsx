import React, { useState } from "react";
import { PasswordGeneratorProps } from "./generator.types";
import { GeneratorContainer, Button, PasswordContainer } from "./styles/general";
import { Random } from "../../utils/random";

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({
  theme = 'standar',
  color = 'black',
  fill = 'grey',
  onClick,
  ButtonValue = 'new',
  letters = 6,
  type = 1
 }) => {
  const [password, setPassword] = useState<string>('asfafsfas');
  const [show, setShow] = useState<boolean>(false)

  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }

  const handleGenerate = (letters, type) => {
    let password = Random(letters, type);
    setPassword(password);
    handleShow();
  }

  return (
    <GeneratorContainer>
      <Button onClick={e => handleGenerate(letters, type)}>{ButtonValue}</Button>
      {show === true && <PasswordContainer>{password}</PasswordContainer>}
    </GeneratorContainer>
  );
};

export default PasswordGenerator;
