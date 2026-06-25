import { use, useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";
import TodoContext from "./components/TodoProvider/TodoContext";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { todos, addTodo } = use(TodoContext);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    toggleDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          {/* <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter((t) => !t.completed)
              .map(function (t) {
                return <ToDoItem key={t.id} item={t} />;
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter((t) => t.completed)
              .map(function (t) {
                return <ToDoItem key={t.id} item={t} />;
              })}
          </ToDoList> */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={handleFormSubmit}></ToDoForm>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
