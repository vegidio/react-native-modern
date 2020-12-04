import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { GithubService, NetworkState } from '../services';
import { User } from '../models';

export default class UserListStore {
    private service = new GithubService({
        headers: { 'X-Parse-Application-Id': 'common' },
        cacheTtl: 300,
    });

    @observable
    state = NetworkState.Idle;

    @observable
    errorMessage?: string;

    @observable
    users: User[] = [];

    constructor() {
        makeObservable(this);
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
