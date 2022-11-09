import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [], // массив пользователей
  loading: false, // флаг, отвечает за то: идёт загрузка или нет
  error: null, // поле, которое содержит сообщение об ошибке или null, если ошибка не произошла
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    // После написания перечисления экшенов: enum UserActionTypes, кейсы указываем через перечисление
    // case FETCH_USERS:
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };

    case UserActionTypes.FETCH_USERS_SUCCESS:
      // В случае успеха или ошибки делаем loading: false, поскольку, загрузка уже не идёт.
      // В случае успеха в поле users передаём массив пользователей, который мы будем получать с сервера.
      return { loading: false, error: null, users: action.payload };

    // Если ошибка произошла, в error мы помещаем какие-то данные из экшена из поля payload.
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
