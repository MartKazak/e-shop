enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

class HttpClient {
    async get<T>(url: string): Promise<T> {
        const response: Response = await fetch(new Request(url));
        const json: T = await response.json();

        return json;
    }

    async post<T>(url: string, data?: T): Promise<T> {
        return await this.request<T>(HttpMethod.Post, url, data);
    };

    async put<T>(url: string, data?: T): Promise<T> {
        return await this.request<T>(HttpMethod.Put, url, data);
    };

    async xdelete(url: string): Promise<void> {
        await this.request<void>(HttpMethod.Delete, url);
    };

    private async request<T>(method: HttpMethod, url: string, data?: T) {
        const params: RequestInit = {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        const response: Response = await fetch(new Request(url, params));
        const json: T = await response.json();

        return json;
    }
}

export default new HttpClient();