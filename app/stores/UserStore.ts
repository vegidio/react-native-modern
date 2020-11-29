import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { GithubService, NetworkState } from '../services';
import { User } from '../models';

export default class UserStore {
    private service = new GithubService();

    @observable
    state = NetworkState.Idle;

    @observable
    errorMessage?: string;

    @observable
    user = new User();

    constructor() {
        makeObservable(this);
    }

    @action
    fetchUser = async (username: string) => {
        runInAction(() => (this.state = NetworkState.Loading));
        const [error, user] = await to(this.service.getUser(username));

        if (error) {
            runInAction(() => {
                this.state = NetworkState.Error;
                this.errorMessage = error.message;
            });

            return;
        }

        runInAction(() => {
            this.user = user!;
            this.state = NetworkState.Idle;
        });
    };
}
