import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from './style';

const ButtonComponent = styled(Button)({ ...styles });

export default function StyledComponent() {
  return <ButtonComponent>StyledComponent</ButtonComponent>;
}