import todoStore from "./todoStore";
import viewStore from "./viewStore";

class rootStore {
  constructor() {
    this.todoStore = new todoStore(this);
    this.viewStore = new viewStore(this);
  }
}

export default rootStore;
