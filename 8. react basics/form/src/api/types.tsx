// types.ts
export interface User {
    id?: number; // Optional for creating new users
    name: string;
    surname: string;
    email: string;
    password: string;
    city: string;
    state?: string; // Optional if not always required
  }
  