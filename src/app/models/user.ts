export interface User {
  uid: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  email_validation: boolean;
  photo: string;
  status: boolean;
  coin: number;
  level: number;
  created_at: number;
  updated_at: number;
}
