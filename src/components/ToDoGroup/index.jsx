import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({ heading, items }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      {items.length > 0 && (
        <ToDoList>
          {items.map(function (t) {
            return <ToDoItem key={t.id} item={t} />;
          })}
        </ToDoList>
      )}
    </>
  );
}
