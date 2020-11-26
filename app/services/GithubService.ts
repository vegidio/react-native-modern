import { deserialize } from 'serializr';
import RestFactory from './RestFactory';
import { User } from '../models';

export default class GithubService extends RestFactory {
    private baseUrl = 'https://api.github.com';

    getUser = async (user: string): Promise<User> => {
        const url = `${this.baseUrl}/users/${user}`;
        return this.sendRequest('GET', url).then((json) => deserialize(User, json));
    };
}
