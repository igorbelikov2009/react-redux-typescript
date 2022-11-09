// После написания перечисления экшенов: enum UserActionTypes,
// объявленные ниже константы можно убирать
// const FETCH_USERS = "FETCH_USERS";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
}

// это перечисление экшенов
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// указывая тип экшенов, мы обащаемся к перечислению экшенов
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[]; // в случае успеха payload это полученный массив пользователей
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string; // в случае ошибки payload это строка, сообщение об ошибке
}

// создаём единый, глобальный тип экшенов
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
// interface UserAction {
//   type: string; // обязательный параметр: тип экшена
//   payload?: any; // вспомогательный, необязательный параметр
// }
