export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin?: string;
  role: 'admin' | 'user';
}
