import { use, useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoForm } from "./components/ToDoForm";
import TodoContext from "./components/TodoProvider/TodoContext";
import { ToDoGroup } from "./components/ToDoGroup";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    todos,
    upsertTodo,
    showDialog,
    openFormDialog,
    closeFormDialog,
  } = use(TodoContext);

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter((t) => !t.completed)}
          ></ToDoGroup>
          {todos.length == 0 && <EmptyState></EmptyState>}
          <ToDoGroup
            heading="Concluído"
            items={todos.filter((t) => t.completed)}
          ></ToDoGroup>

          <Footer>
            <FabButton onClick={() => openFormDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>

      <Dialog isOpen={showDialog} onClose={closeFormDialog}>
        <ToDoForm
          onSubmit={upsertTodo}
        ></ToDoForm>
      </Dialog>
    </main>
  );
}

export default App;
