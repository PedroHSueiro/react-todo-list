import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  test.each([
    { input: true, output: "todo-item completed" },
    { input: false, output: "todo-item" },
  ])(
    "Deve retornar as classes $output quando o item completo for $input",
    ({ input, output }) => {
      expect(mergeClass(input)).toBe(output);
    },
  );
});
