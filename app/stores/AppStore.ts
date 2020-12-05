import { action, computed, makeObservable, observable } from 'mobx';
import { DataSource } from '../enums';

export default class AppStore {
    @observable
    source = DataSource.Rest;

    constructor() {
        makeObservable(this);
    }

    @computed
    get isRest() {
        return this.source === DataSource.Rest;
    }

    @action
    toggleDataSource = () => {
        this.source = this.source === DataSource.Rest ? DataSource.GraphQL : DataSource.Rest;
    };
}
