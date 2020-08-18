import { observable, action } from 'mobx';
import { mockPersonList } from '../../common/mock';
import PersonModel from '../models/PersonModel';

export default class PersonStore {
  @observable personList = [];

  @action
  fetchPersonList() {
    mockPersonList().then((list) => {
      this.personList = list.map((item) => {
        return new PersonModel(this, item.id, item.name, item.age);
      });
    });
  }
}
