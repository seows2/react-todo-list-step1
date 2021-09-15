class LocalStore {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  }

  setItem(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}

const localStore = new LocalStore();

export default localStore;
