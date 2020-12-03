import to from 'await-to-js';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { Cache } from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hash from 'object-hash';

type RequestParams = {
    [key: string]: string | number | boolean;
};

abstract class RestFactory {
    private readonly cache?: Cache;
    private readonly client = axios.create({ timeout: 5_000 });

    constructor(cacheTtl?: number) {
        if (cacheTtl !== undefined) {
            this.cache = new Cache({
                namespace: 'react-native-common',
                policy: { maxEntries: 0, stdTTL: cacheTtl },
                backend: AsyncStorage,
            });
        }
    }

    // region - Public methods
    sendRequest = async (method: Method, url: string, params?: RequestParams): Promise<object> => {
        const [config, key] = this.createRequest(method, url, params);
        const [, cachedData] = await to(this.cache!.get(key).then((str) => JSON.parse(str!)));

        // Check if there's a cached result
        if (cachedData) {
            return cachedData;
        } else {
            // Send a new request since there's no cached response
            const response = await this.client.request(config);

            // Cache only GET requests
            if (method.toLocaleUpperCase() === 'GET') {
                await this.cache?.set(key, JSON.stringify(response.data));
            }

            return response.data;
        }
    };
    // endregion

    // region - Private methods
    private createRequest = (method: Method, url: string, params?: RequestParams): [AxiosRequestConfig, string] => {
        const config = { method: method, url: url, params: params };
        return [config, hash(config)];
    };
    // endregion
}

export default RestFactory;
