import axios from 'axios';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { ILoginResponse, ILoginUser, IUserDetails } from '@/app/types';

const API_BASE_URL = 'https://dummyjson.com';
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const saveTokens = (accessToken: string, refreshToken: string): void => {
    setCookie(ACCESS_TOKEN_KEY, accessToken, { maxAge: 1800, secure: true });
    setCookie(REFRESH_TOKEN_KEY, refreshToken, { maxAge: 604800, secure: true });
};


const getAccessToken = (): string | undefined => {
    return getCookie(ACCESS_TOKEN_KEY) as string | undefined;
};


// const getRefreshToken = (): string | undefined => {
//     return getCookie(REFRESH_TOKEN_KEY) as string | undefined;
// };


const clearTokens = (): void => {
    deleteCookie(ACCESS_TOKEN_KEY);
    deleteCookie(REFRESH_TOKEN_KEY);
};

// returns True if authenticated, false otherwise
export const isAuthenticated = (): boolean => {
    return !!getAccessToken();
};


export const login = async (user: ILoginUser): Promise<ILoginResponse> => {
    try {
        const response = await axios.post<ILoginResponse>(`${API_BASE_URL}/user/login`, user);
        const { accessToken, refreshToken } = response.data;
        saveTokens(accessToken, refreshToken);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || 'Login failed');
        }
        throw new Error('An unknown error occurred');
    }
};


export const getCurrentAuthUser = async (): Promise<IUserDetails> => {
    try {
        const response = await axios.get<IUserDetails>(`${API_BASE_URL}/auth/me`, {
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || 'Login failed');
        }
        throw new Error('An unknown error occurred');
    }
}

export const logout = (): void => {
    clearTokens();
};


export const getAuthHeader = (): { Authorization: string } | object => {
    const token = getAccessToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};