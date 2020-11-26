import { alias, serializable } from 'serializr';

class User {
    @serializable
    id?: number;

    @serializable
    login?: string;

    @serializable
    name?: string;

    @serializable(alias('html_url'))
    htmlUrl?: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}

export default User;
