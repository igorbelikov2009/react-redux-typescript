import Main from "./components/Main";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

export const USER_ROUTE = "/user";
export const TODO_ROUTE = "/todo";
export const MAIN_ROUTE = "/";

interface IRoute {
  path: string;
  Component: React.FC<{}>;
}

export const navbarRoutes: IRoute[] = [
  {
    path: USER_ROUTE,
    Component: UserList,
  },

  {
    path: TODO_ROUTE,
    Component: TodoList,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
