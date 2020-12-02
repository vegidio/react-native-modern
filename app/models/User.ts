import { serializable } from 'serializr';

class User {
    @serializable
    id?: number;

    @serializable
    login?: string;

    @serializable
    name?: string;

    @serializable
    html_url?: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}

export default User;
