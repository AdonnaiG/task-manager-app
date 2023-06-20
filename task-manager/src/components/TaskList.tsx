import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { deleteTask, toggleTask, updateTask } from "../store/actions";

function TaskListItems() {
  const tasks = useSelector((state: Store) => state.tasks);
  const dispatch = useDispatch();

  return (
    <>
      {tasks.map((task: { id: number; text: string }) => (
        <Flex pt={2} key={task.id}>
          <Checkbox onClick={() => dispatch(toggleTask(task.id))} />
          <Input
            mx={2}
            value={task.text}
            onChange={(e) => {
              dispatch(updateTask(task.id, e.target.value));

              if (
                e.target.value == "" &&
                window.confirm(
                  "\nWarning! Empty tasks should be deleted.\n\nPress OK to confirm deletion or Cancel to continue editing."
                )
              ) {
                dispatch(deleteTask(task.id));
              }
            }}
          />
          <Button
            onClick={() => {
              if (
                window.confirm(
                  "\nYou are about to delete this task! \n\nPress OK to confirm or Cancel."
                )
              ) {
                dispatch(deleteTask(task.id));
              }
            }}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

function TaskList() {
  return (
    <>
      <Heading>Task Manager App</Heading>
      <TaskListItems />
    </>
  );
}

export default TaskList;
