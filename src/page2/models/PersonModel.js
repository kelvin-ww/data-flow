import { observable, action } from 'mobx';

export default class PersonModel {
  store;
  id;
  @observable name;
  @observable age;

  constructor(store, id, name, age) {
    this.store = store;
    this.id = id;
    this.age = age;
    this.name = name;
  }

  @action
  addAge() {
    this.age += 1;
  }
}
