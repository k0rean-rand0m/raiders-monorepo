export class ApiClient {
    private baseURL: string;

    constructor(baseURL?: string) {
        this.baseURL = baseURL || import.meta.env.VITE_TMA_BACKEND || "";
    }

    private async request<T>(
        endpoint: string,
        method: string,
        body?: any
    ): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;

        const initData = window.Telegram?.WebApp?.initData || import.meta.env.VITE_TG_INIT_DATA;

        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "X-Telegram-Init-Data": initData || ""
            },
            body: body ? JSON.stringify(body) : undefined,
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `Error ${response.status}: ${errorData.message || response.statusText}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("API Client Error:", error);
            throw error;
        }
    }

    public get<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, "GET");
    }

    public post<T>(endpoint: string, body: any): Promise<T> {
        return this.request<T>(endpoint, "POST", body);
    }

    public put<T>(endpoint: string, body: any): Promise<T> {
        return this.request<T>(endpoint, "PUT", body);
    }

    public delete<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, "DELETE");
    }
}