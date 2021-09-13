interface HttpResponse<T> extends Response {
    data?: T;
}

class HttpClient {
    async get<T>(url: string): Promise<HttpResponse<T>> {
        const response: HttpResponse<T> = await fetch(new Request(url));
        response.data = await response.json();
        return response;
    }

    async post<T>(url: string, data = {}): Promise<HttpResponse<T>> {
        return await this.request(url, "POST", data);
    };

    async put<T>(url: string, data = {}): Promise<HttpResponse<T>> {
        return await this.request(url, "PUT", data);
    };

    async xdelete<T>(url: string): Promise<HttpResponse<T>> {
        return await this.request<T>(url, "DELETE");
    };

    private async request<T>(url: string, method: string, data: any = {}): Promise<HttpResponse<T>> {
        const params: RequestInit = {
            method: method,
            body: JSON.stringify(data)
        };
        const response: HttpResponse<T> = await fetch(new Request(url, params));
        response.data = await response.json();
        return response;
    }
}

export default new HttpClient();