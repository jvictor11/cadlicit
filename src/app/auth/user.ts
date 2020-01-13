export interface User {
    name: string;
    email: string;
    password: string;
    create_at: Date;
    _id?: string;
    token?: string;
}
