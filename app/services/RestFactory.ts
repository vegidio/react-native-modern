import axios, { AxiosRequestConfig, Method } from 'axios';

type RequestParams = {
    [key: string]: string | number | boolean;
};

abstract class RestFactory {
    constructor(init?: Partial<RestFactory>) {
        Object.assign(this, init);
    }

    // region - Public methods
    sendRequest = async (method: Method, url: string, params?: RequestParams): Promise<object> => {
        const config = this.createRequest(method, url, params);
        const response = await axios.request(config);
        return response.data;
    };
    // endregion

    // region - Private methods
    private createRequest = (method: Method, url: string, params?: RequestParams): AxiosRequestConfig => {
        return {
            method: method,
            url: url,
            params: params,
        };
    };
    // endregion
}

export default RestFactory;
