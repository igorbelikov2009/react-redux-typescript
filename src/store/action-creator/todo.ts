import { TodoAction, TodoActionTypes } from "./../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

// создадим и экспортируем экшенкреатер
export const fetchTodos = (page = 1, limit = 10) => {
  // импортируем Dispatch из redux и указываем как тип <>
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: { _page: page, _limit: limit },
      });
      // В качестве payload мы передаём те данные, которые получили в теле ответа
      //  от сервера payload: response.data
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке" });
    }
  };
};

export function setTodoPages(page: number): TodoAction {
  // наводим мышку на пустые фигурные скобки return {}, нажимаем: Ctrl + пробел
  // Видим, то что нам нужно записать в фигурные скобки. В payload указываем аргумент
  // нашей функции
  return { type: TodoActionTypes.SET_TODO_PAGES, payload: page };
}
