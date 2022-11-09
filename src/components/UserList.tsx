import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector"; // наш, самодельный хук
// А нижние импорты, после создания хука useActions() нам уже не нужны
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { fetchUsers } from "../store/action-creator/user";

const UserList: FC = () => {
  // Данные из состояния UserReducer можем выцеплять с помощью хука useSelector
  // const state = useSelector((state) => state);
  // Но мы сделаем это с помощью своего, самодельного хука useTypedSelector()
  const { users, error, loading } = useTypedSelector((state) => state.user);

  // // //  Код до создания хука useActions().............
  // // const dispatch: any = useDispatch(); any - или здесь, или  dispatch(fetchUsers() as any);
  // const dispatch = useDispatch();

  // // Чтобы сделать запрос на сервер, необходимо воспользоваться экшенкреатером fetchUsers()
  // useEffect(() => {
  //   dispatch(fetchUsers() as any);

  // }, []);

  // // //   Код после создания хука useActions().............
  const { fetchUsers } = useActions(); // наводим мышку на пустые фигурные скобки, нажимаем: Ctrl + пробел
  // Видим, то что нам нужно записать в фигурные скобки, а именно fetchUsers.
  // Таким образом, при помощи деструктуризации, мы получили экшенкреатор fetchUsers
  // Теперь в useEffect() нам не нужен dispatch, и нам не нужен импорт экшенкреатора fetchUsers
  useEffect(() => {
    fetchUsers(); // fetchUsers(): (dispatch: Dispatch<UserAction>) => Promise<void>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name} </div>
      ))}
    </div>
  );
};

export default UserList;
