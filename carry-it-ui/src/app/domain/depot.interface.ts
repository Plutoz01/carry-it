import { Vehicle } from './vehicle.interface';

export interface Depot {
    id: number;
    name: string;
    vehicles?: Vehicle[];
    vehicleCount?: number;
}

export const emptyDepot = (): Depot => {
    return {
        id: null,
        name: ''
    };
};
