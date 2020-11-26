import { Unknown } from '../types';

class User {
    login?: string;
    url?: string;
    name?: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    serialize(): object {
        return {
            login: this.login,
            url: this.url,
            name: this.name,
        };
    }

    static deserialize(json: Unknown): User {
        const user = new User();
        user.login = json.login;
        user.url = json.url;
        user.name = json.name;

        return user;
    }
}

export default User;
