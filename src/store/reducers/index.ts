// здесь мы проинициализируем комбайн-редюсер,
// который будет объединять все редюсеры нашего приложения
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({});
