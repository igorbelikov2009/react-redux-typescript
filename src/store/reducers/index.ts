// здесь мы проинициализируем комбайн-редюсер,
// который будет объединять все редюсеры нашего приложения
import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// с помощью тайпскриптовского ReturnType получим тип нашего редюсера и экспортируем его
// Таким образом мы получаем тип нашего редюсера и, с помощью этого типа, мы сможем
// сделать хук, который будет работать уже с типизированным useSelector-ом
export type RootState = ReturnType<typeof rootReducer>;
