import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

// создадим и экспортируем экшенкреатер
export const fetchUsers = () => {
  // импортируем Dispatch из redux и указываем как тип <UserAction>
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      // В качестве payload мы передаём те данные, которые получили в теле ответа
      // от сервера payload: response.data

      setTimeout(() => {
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке пользователей" });
    }
  };
};
// export type AppDispatch = typeof fetchUsers;
