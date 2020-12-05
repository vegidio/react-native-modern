import to from 'await-to-js';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { CommonService, CommonRestService, CommonGraphqlService } from '../services';
import { DataSource, NetworkState } from '../enums';
import { User } from '../models';

export default class UserStore {
    private service: CommonService;

    @observable
    state = NetworkState.Idle;

    @observable
    errorMessage?: string;

    @observable
    user = new User();

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
