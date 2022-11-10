import React, { FC, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
// А нижние импорты, после создания хука useActions() нам уже не нужны
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { fetchTodos } from "../store/action-creator/todo";

const TodoList: FC = () => {
  // Данные из состояния UserReducer можем выцеплять с помощью хука useSelector
  //   const state = useSelector((state) => state);
  //   console.log(state);
  // Но мы сделаем это с помощью своего, самодельного хука useTypedSelector()
  // И сразу делаем деструктуризацию. Наводим мышку на пустые фигурные скобки
  // const {}, нажимаем: Ctrl + пробел
  // Видим, то что нам нужно записать в фигурные скобки.

  const { error, limit, loading, page, todos } = useTypedSelector((state) => state.todo);

  // // //  Код до создания хука useActions().............
  //   const dispatch: any = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchTodos());
  //   }, []);

  // // //   Код после создания хука useActions().............
  const { fetchTodos, setTodoPages } = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Наводим мышку на пустые фигурные скобки в useEffect(() => {},[]), нажимаем: Ctrl + пробел
  // Видим, то что нам нужно записать в фигурные скобки,

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  if (loading) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Идёт загрузка</h1>;
          </Col>
        </Row>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>{error}</h1>;
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col>
          {todos.map((todo) => (
            <div key={todo.id} className="todoColumn">
              <i style={{ display: "block" }}> userId: {todo.userId}</i>
              <i style={{ display: "block" }}>id: {todo.id}</i>
              <i style={{ display: "block" }}>title: {todo.title}</i>
              <i style={{ display: "block" }}>
                completed: <b>{`${todo.completed}`}</b>
              </i>
            </div>
          ))}
          {/* <div>{todos.length} </div> */}
          <div style={{ display: "flex", marginTop: 36 }}>
            {pages.map((p) => (
              <div
                onClick={() => setTodoPages(p)}
                style={{ border: p === page ? "2px solid green" : "1px solid gray", padding: "2px 8px" }}
                key={p}
              >
                {p}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
