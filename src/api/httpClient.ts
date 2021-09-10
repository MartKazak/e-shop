// interface HttpResponse<T> extends Response {
//     data?: T;
// }

class HttpClient {
    async get(url: string): Promise<any> {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    async post(url: string, data = {}): Promise<any> {
        return await this.request(url, "POST", data);
    };

    async put(url: string, data = {}): Promise<any> {
        return await this.request(url, "PUT", data);
    };

    async xdelete(url: string): Promise<any> {
        return await this.request(url, "DELETE");
    };

    private async request(url: string, method: string, data = {}): Promise<any> {
        const requestParams = {
            method: method,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const request = new Request(url, requestParams);
        const response = await fetch(request);

        return response.json();
    }

    // async #requestTyped<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    //     const response: HttpResponse<T> = await fetch(request);
    //     response.data = await response.json();
    //     return response;
    // }
}

export default new HttpClient();