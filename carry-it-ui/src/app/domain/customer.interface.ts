export interface Customer {
    id?: number;
    name: string;
}

export const emptyCustomer = (): Customer => {
    return {
        id: null,
        name: ''
    };
};
