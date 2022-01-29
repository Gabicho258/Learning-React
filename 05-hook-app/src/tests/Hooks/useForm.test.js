import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Gabo",
    email: "gabo@gmail.com",
  };
  test("should return a default form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current[0]).toEqual(initialForm);
    expect(typeof result.current[1]).toBe("function");
    expect(typeof result.current[2]).toBe("function");
  });
  test("should change the form value", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "nameChanged" } });
    });
    expect(result.current[0].name).toBe("nameChanged");
  });
  test("should restart the form with RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "nameChanged" } });
      reset();
    });
    expect(result.current[0]).toEqual(initialForm);
  });
});
