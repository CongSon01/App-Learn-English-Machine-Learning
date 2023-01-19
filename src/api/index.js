import apiClient from "./http-common";

export const BASE_URL = 'http://192.168.1.187:5000/';

export const createAPIEndpoint = endpoint => {
    const url = endpoint;
    return {
        fetch: () => apiClient.get(url),
        fetchById: id => apiClient.get(url + "/" + id),
        post: newRecord => apiClient.post(url, newRecord),
        put: (id, updatedRecord) => apiClient.put(url + id, updatedRecord),
        delete: id => apiClient.delete(url + id),
    }
}