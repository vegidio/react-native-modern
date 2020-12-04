import { date, serializable } from 'serializr';

class User {
    @serializable
    objectId?: string;

    @serializable(date())
    createdAt?: Date;

    @serializable
    username?: string;

    @serializable
    emailVerified?: boolean;

    @serializable
    age?: number;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}

export default User;
