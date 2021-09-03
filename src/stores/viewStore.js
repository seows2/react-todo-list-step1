import { action, makeObservable, observable } from "mobx";
import { FILTER } from "../constants";

class viewStore {
  @observable todoFilter = FILTER.ALL;

  constructor() {
    makeObservable(this);
  }

  @action
  changeTodoFilter = (newFilter) => {
    this.todoFilter = newFilter;
  };
}

export default viewStore;
