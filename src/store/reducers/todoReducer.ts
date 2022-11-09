import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      //   return { loading: true, error: null, todos: [], page: 1, limit: 10 }; всё это - state
      // Создаём, новый объект. В нём разворачиваем состояние, равное initialState и в нём меняем поле loading:
      return { ...state, loading: true };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.SET_TODO_PAGES:
      return { ...state, page: action.payload };

    default:
      console.log(state);
      return state;
  }
};
