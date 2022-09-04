export interface IUserRequest {
  name: string;
  password?: string;
  isAdm: boolean;
  email: string;
}

export interface IUserResponse extends IUserRequest {
  id: string;
}

export interface IUserSessionRequest {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  email?: string;
  name?: string;
  password?: string;
  isAdm?: boolean;
}
