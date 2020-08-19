import { observable, action, computed } from 'mobx';

export default class PageStore {
  @observable selectedPerson = undefined;

  @action
  selectPersonId(person) {
    this.selectedPerson = person;
  }
}
