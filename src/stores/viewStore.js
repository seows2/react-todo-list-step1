import { makeObservable, observable } from "mobx";
import { FILTER } from "../constants";

class viewStore {
  @observable todoFilter = FILTER.ALL;

  constructor() {
    makeObservable(this);
  }
}

export default viewStore;
