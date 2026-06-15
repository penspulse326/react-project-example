import type { ApiResponse } from '~/types/api';
import { api } from '~/utils/api';

export interface User {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  gender: string;
}

export async function getUsers(): Promise<ApiResponse<User[]>> {
  try {
    const result = await api.get('https://dummyjson.com/uers');

    return {
      success: true,
      data: result.data.users,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error as Error,
      message: error.message || '無法取得使用者資料',
    };
  }
}
