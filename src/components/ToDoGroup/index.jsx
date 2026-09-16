import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({ heading, items, isLoading }) {
  const RenderToDos = () => {
    if (isLoading) {
      return <p style={{ color: "gray" }}>Carregando...</p>;
    }

    if (items.length === 0) {
      return <p style={{ color: "red" }}>Nenhuma tarefa encontrada!</p>;
    }

    return (
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    );
  };

  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <RenderToDos></RenderToDos>
    </>
  );
}
