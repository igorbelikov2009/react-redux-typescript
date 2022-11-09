// Вся суть этого хука в том, что мы связываем экшенкреатеры с этим диспатчем
// То есть, нам dispatch уже не понадобиться, нам достаточно будет вызвать
// экшенкреатер, и он сам опрокинеться в диспатч
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import * as UserActionCreaters from "../store/action-creator/user"; // импортируем сюда
// // все экшенкреаторы из папки action-creator/user
import ActionCreaters from "../store/action-creator/";
// console.log(ActionCreaters);
// В ActionCreaters мы объеденили все экшенкреатеры
// fetchTodos()
// fetchUsers ()
// setTodoPages ()

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreaters, dispatch);
};
