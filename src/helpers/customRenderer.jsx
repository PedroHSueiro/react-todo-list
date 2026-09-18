import { render } from "@testing-library/react";
import TodoContext from "../components/TodoProvider/TodoContext";

export default function customRenderer(component, values = {}) {
  return render(
    <TodoContext.Provider value={values}>{component}</TodoContext.Provider>,
  );
}
