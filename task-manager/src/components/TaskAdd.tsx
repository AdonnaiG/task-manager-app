import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { addTask, setNewTask } from "../store/actions";

function TaskAdd() {
  const newTask = useSelector((state: Store) => state.newTask);
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="Create a new task..."
        value={newTask}
        onChange={(e) => {
          dispatch(setNewTask(e.target.value));
        }}
      />
      <Button
        value={newTask}
        onClick={() => {
          if (newTask != "") {
            dispatch(addTask());
          }
        }}
      >
        Add Task
      </Button>
    </Grid>
  );
}

export default TaskAdd;
