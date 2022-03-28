import React from "react";
import { HomePage } from "../../../components/09-useContext/HomePage";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <HomePage/>", () => {
  const user = {
    user: "Gabo",
    email: "test@test.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomePage />
    </UserContext.Provider>
  );
  test("debe de mostrarse el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
