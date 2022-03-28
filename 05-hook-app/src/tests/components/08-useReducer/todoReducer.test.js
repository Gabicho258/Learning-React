import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("debe de agregar un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "add",
      payload: { id: 3, desc: "Aprender Express", done: true },
    });
    expect(state.length).toBe(3);
  });
  test("debe de borrar un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "delete",
      payload: 2,
    });
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });
  test("debe de hacer el toogle del todo", () => {
    const state = todoReducer(demoTodos, {
      type: "toggle",
      payload: 1,
    });
    expect(state[0].done).toBe(false);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
