export interface Department {
    
    id?: string
    name: string
    region: string
    city: string
    state: string
    boardDirector: BoardDirector
    
}

export enum BoardDirector {
    Negocio = 'BUSINESS',
    Segurança = 'SECURITY'
}