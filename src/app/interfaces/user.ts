import { Categoria } from './categoria';

export interface User {
    password?: string;
    nome?: string;
    email?: string;
    categoria?: Categoria;
    
}
