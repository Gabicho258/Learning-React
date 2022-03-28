import React from "react";
import { mount } from "enzyme";
import { LoginPage } from "../../../components/09-useContext/LoginPage";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginPage/>", () => {
  const setUser = jest.fn();
  const user = {
    id: 123,
    name: "Gabo",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginPage />
    </UserContext.Provider>
  );
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith(user);
  });
});
