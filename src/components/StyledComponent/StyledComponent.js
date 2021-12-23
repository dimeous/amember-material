import React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";

import styles from './style';

const ButtonComponent = styled(Button)({ ...styles });

export default function StyledComponent() {
  return <ButtonComponent>StyledComponent</ButtonComponent>;
}