export interface AuthSession {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  readonly company?: string;
}
