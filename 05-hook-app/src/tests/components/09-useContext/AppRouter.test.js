import React from "react";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { AppRouter } from "../../../components/09-useContext/AppRouter";

describe("Pruebas en <AppRouter/>", () => {
  const user = {
    id: 1,
    name: "Gabo",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
