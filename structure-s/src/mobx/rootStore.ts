import { createContext } from "react";
import { TodoStore } from "./todoStore";

export class RootStore {
  todoStore = new TodoStore();
}

export const RootStoreContext = createContext(new RootStore());
