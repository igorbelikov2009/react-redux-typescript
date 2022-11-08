import { rootReducer } from "./reducers/index";
// Импортируем функцию createStore() из редакса
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Создаём store, вызывая функцую createStore().
// Первым параметром она принимает редюсер, вторым - миддлвэер.
//  В данном случае у нас всего один мидллвэер thunk, для асихронных функций
export const store = createStore(rootReducer, applyMiddleware(thunk));
