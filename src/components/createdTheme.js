// Импортируем метод с возможностью переопределения стилей заданных классов компонентам material по умолчанию
import { createMuiTheme } from "@material-ui/core/styles";

const createdTheme = createMuiTheme({
    // Переопределяющее свойство
    overrides: {
      MuiButton: {
        root: {
          color: "red",
          border: "1px solid grey",
          margin: 10
        }
      }
    }
  });
  
export default createdTheme;
