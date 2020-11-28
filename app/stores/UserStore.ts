import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { GithubService } from '../services';
import { User } from '../models';

export default class UserStore {
    private service = new GithubService();

    @observable
    user = new User();

    constructor() {
        console.log('User Store init');
        makeObservable(this);
    }

    @action
    async fetchUser(username: string) {
        console.log('fetch');
        const [error, user] = await to(this.service.getUser(username));

        if (error) {
            console.error(error);
            return;
        }

        runInAction(() => (this.user = user!));
    }
}
