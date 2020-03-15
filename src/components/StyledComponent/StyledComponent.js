import React from "react";
// Импортируем метод для стилизации любового типа компонентов
import { styled } from "@material-ui/core/styles";
// Предоставляем компонент для стилизации
import Button from "@material-ui/core/Button";

import styles from './style';

// Стилизованный компнент на все времена
const ButtonComponent = styled(Button)({ ...styles });

export default function StyledComponent() {
  return <ButtonComponent>StyledComponent</ButtonComponent>;
}