export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string | null;
  picture?: string;
}

export interface IUser extends RegisterPayload {
  id: number;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  bio?: string;
}

export interface IUpdateUserPayload {
  picture: string;
  name: string;
  bio: string;
}
