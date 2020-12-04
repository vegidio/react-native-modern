import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { GithubService, NetworkState } from '../services';
import { User } from '../models';

export default class UserStore {
    private service = new GithubService({
        headers: { 'X-Parse-Application-Id': 'common' },
        cacheTtl: 300,
    });

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
    fetchUser = async (objectId: string) => {
        runInAction(() => (this.state = NetworkState.Loading));
        const [error, user] = await to(this.service.getUserById(objectId));

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
