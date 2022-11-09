// Сюда импортируем все экшенкреаторы из файлов user.ts и todo.ts
import * as UserActionCreaters from "./user";
import * as TodoActionCreaters from "./todo";

// На выходе из этого файла, мы должны вернуть объект, который объединяет
//  все эти экшенкреаторы для User и для Todo
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...TodoActionCreaters,
  ...UserActionCreaters,
};
