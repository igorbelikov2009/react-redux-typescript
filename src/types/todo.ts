export interface TodoState {
  todos: any[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// это перечисление экшенов
export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGES = "SET_TODO_PAGES", // для изменения текущей страницы
}

// указывая тип экшенов, мы обащаемся к перечислению экшенов
interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[]; // в случае успеха payload это полученный массив todos
  //payload: ITodo[]; // в случае успеха payload это полученный массив todos
}
interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string; // в случае ошибки payload это строка, сообщение об ошибке
}
interface SetTodoPages {
  type: TodoActionTypes.SET_TODO_PAGES;
  payload: number;
}

// создаём единый, глобальный тип экшенов
export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPages;
