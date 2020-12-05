import { deserialize } from 'serializr';
import { gql } from '@apollo/client';
import { GraphqlFactory, RestFactory } from 'rn-sak/lib/network';
import { User } from '../models';

export interface CommonService {
    getUsers(): Promise<User[]>;
    getUserById(objectId: string): Promise<User>;
}

// region - REST
export class CommonRestService extends RestFactory implements CommonService {
    private baseUrl = 'https://parse.vinicius.io/app/common';

    async getUsers(): Promise<User[]> {
        const url = `${this.baseUrl}/classes/_User`;
        return this.sendRequest('GET', url).then((json) => deserialize(User, json.results));
    }

    async getUserById(objectId: string): Promise<User> {
        const url = `${this.baseUrl}/classes/_User/${objectId}`;
        return this.sendRequest('GET', url).then((json) => deserialize(User, <object>json));
    }
}
// endregion

// region - GraphQL
export class CommonGraphqlService extends GraphqlFactory implements CommonService {
    async getUsers(): Promise<User[]> {
        const graph = gql`
            query {
                users {
                    edges {
                        node {
                            createdAt
                            username
                            email
                            emailVerified
                            age
                        }
                    }
                }
            }
        `;

        return this.sendRequest(graph).then((json) =>
            deserialize(
                User,
                json.data.users.edges.map((edge: any) => edge.node),
            ),
        );
    }

    async getUserById(objectId: string): Promise<User> {
        const graph = gql`
            query {
                user(id: "${objectId}") {
                    objectId
                    createdAt
                    username
                    email
                    emailVerified
                    age
                }
            }
        `;

        return this.sendRequest(graph).then((json) => deserialize(User, <object>json.data.user));
    }
}
// endregion
