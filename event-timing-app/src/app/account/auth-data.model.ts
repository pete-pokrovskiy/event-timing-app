import { User } from '../shared/models/user.model';

export interface AuthData{
    token?: string;
    user?: User;
}
