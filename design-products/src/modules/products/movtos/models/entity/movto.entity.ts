export type Operation = "E" | "S";

export interface Movto {
    id:string;
    product_id: string;
    operation: Operation;
    date: string;
    quantity: number;
    price: number;
    description: string;
    sort: string; 
}

export interface CreateMovto {
    operation: Operation;
    quantity: number;
    price: number;
    description: string;
    sort?:string 
} 

export interface UpdateMovto {
    quantity?: number;
    price?: number;
    description?: string;
} 