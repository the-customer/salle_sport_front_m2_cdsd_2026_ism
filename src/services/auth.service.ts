import { API_ENDPOINTS } from "../config/api";
import apiService from "./api.service";

export interface LoginDto {
    email: string;
    password: string;
}
export type UserRole = "ADMIN" | "CASHIER" | "CONTROLLER"
export interface LoginResponse {
    success: boolean,
    data: {
        token: string;
        user: {
            id: string,
            fullName: string,
            email: string,
            role: UserRole,
            firstConnection: boolean
        }
    }
}

class AuthService {
    async login(data: LoginDto): Promise<LoginResponse> {
        const response = await apiService.post<LoginResponse>(API_ENDPOINTS.auth.login, data);
        if (response.data.token) {
            apiService.setAuthToken(response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response;
    }
}

const authService = new AuthService();
export default authService;