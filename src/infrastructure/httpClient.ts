interface HttpResponse<T> extends Response {
    data?: T;
}

class HttpClient {
    async get<T>(url: string): Promise<T> {
        const response: Response = await fetch(new Request(url));
        const json: T = await response.json();

        return json;
    }

    async post<T>(url: string, data?: T): Promise<T> {
        const params: RequestInit = {
            method: "POST",
            body: JSON.stringify(data)
        };
        const response: Response = await fetch(new Request(url, params));
        const json: T = await response.json();

        return json;
    };

    async put<T>(url: string, data?: T): Promise<T> {
        const params: RequestInit = {
            method: "PUT",
            body: JSON.stringify(data)
        };
        const response: Response = await fetch(new Request(url, params));
        const json: T = await response.json();

        return json;
    };

    async xdelete(url: string): Promise<void> {
        const params: RequestInit = {
            method: "DELETE"
        };
        await fetch(new Request(url, params));
    };

    async request<T>(url: string, method: string, data: any = {}): Promise<HttpResponse<T>> {
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