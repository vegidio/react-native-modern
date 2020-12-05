import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { CommonGraphqlService, CommonRestService, CommonService } from '../services';
import { DataSource, NetworkState } from '../enums';
import { User } from '../models';

export default class UserListStore {
    private service: CommonService;

    @observable
    state = NetworkState.Idle;

    @observable
    errorMessage?: string;

    @observable
    users: User[] = [];

    constructor(source = DataSource.Rest) {
        makeObservable(this);

        if (source === DataSource.Rest) {
            this.service = new CommonRestService({
                headers: { 'X-Parse-Application-Id': 'common' },
                cacheTtl: 300,
            });
        } else {
            this.service = new CommonGraphqlService('https://parse.vinicius.io/app/common/graphql', {
                headers: { 'X-Parse-Application-Id': 'common' },
            });
        }
    }

    @action
    fetchUsers = async () => {
        runInAction(() => (this.state = NetworkState.Loading));
        const [error, users] = await to(this.service.getUsers());

        if (error) {
            runInAction(() => {
                this.state = NetworkState.Error;
                this.errorMessage = error.message;
            });

            return;
        }

        runInAction(() => {
            this.users = users!;
            this.state = NetworkState.Idle;
        });
    };
}
