import { deserialize } from 'serializr';
import RestFactory from './RestFactory';
import { User } from '../models';

export default class GithubService extends RestFactory {
    private baseUrl = 'https://parse.vinicius.io/app/common';

    getUsers = async (): Promise<User[]> => {
        const url = `${this.baseUrl}/classes/_User`;
        return this.sendRequest('GET', url).then((json) => deserialize(User, json.results));
    };

    getUserById = async (objectId: string): Promise<User> => {
        const url = `${this.baseUrl}/classes/_User/${objectId}`;
        return this.sendRequest('GET', url).then((json) => deserialize(User, <object>json));
    };
}
