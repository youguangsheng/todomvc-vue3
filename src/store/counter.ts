import { defineStore } from 'pinia';

const counterStore = defineStore('counterStore', {
  state: () => ({ counter: 100 })
});

export default counterStore;
