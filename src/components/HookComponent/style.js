// Импортируем метод для создания функции, возвращающая объект стилей
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "grey",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px",
    color: "black",
    height: 48,
    padding: "0 30px",
    margin: 10
  }
});

export default useStyles;