import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  test("Deve retornar a classe base do todo-item quando o item não estiver completo", () => {
    // Arrange
    const isItemCompleted = false;

    //Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item");
  });

  test("Deve retornar a classe todo-item completed, quando o item não estiver completo", () => {
    // Arrange
    const isItemCompleted = true;

    //Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item completed");
  });
});
