import { http, safeRequest } from '~/lib/http';

export interface User {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  gender: string;
}

export async function getUsers() {
  return safeRequest<User[]>(async () => {
    const result = await http.get<{ users: User[] }>('/users');
    return result.users;
  }, '無法取得使用者資料');
}
