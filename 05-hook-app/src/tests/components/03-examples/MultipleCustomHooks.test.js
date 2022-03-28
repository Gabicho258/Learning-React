import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../Hooks/useFetch";
import { useCounter } from "../../../Hooks/useCounter";

jest.mock("../../../Hooks/useFetch");
// jest.mock("../../../Hooks/useCounter");

describe("pruebas en MultipleCustomHooks", () => {
  //   useCounter.mockReturnValue({
  //     counter: 0,
  //     increment: () => {},
  //   });
  test("debe mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Gabo", quote: "ReactBest" }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("ReactBest");
    expect(wrapper.find("footer").text().trim()).toBe("Gabo");
  });
});
