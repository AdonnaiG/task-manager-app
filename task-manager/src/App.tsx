import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";
import TaskAdd from "./components/TaskAdd";
import store from "./store/store";

export function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TaskList />
          <TaskAdd />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}
