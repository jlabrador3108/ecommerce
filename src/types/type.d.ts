export interface Category {
    id: int
    denomination: string
    icon?: string
    image?: string
}

export interface Product {
    id: int
    idcategory: int
    denomination: string
    description?: string
    price?: float
    oldPrice?: float
    image?: string
}