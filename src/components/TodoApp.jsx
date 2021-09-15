import TodoTypingView from "./TodoTypingView";
import TodoListView from "./TodoListView";
import TodoFilterView from "./TodoFilterView";
import RootStore from "../stores/RootStore";
import { createContext } from "react";

export const TodoListContext = createContext();

const TodoApp = () => {
  return (
    <TodoListContext.Provider value={RootStore()}>
      <div className="todoapp">
        <TodoTypingView />
        <main>
          <TodoListView />
          <TodoFilterView />
        </main>
      </div>
    </TodoListContext.Provider>
  );
};

export default TodoApp;
