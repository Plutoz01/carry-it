import { IIdentifiable } from 'data-handling';
import { Vehicle } from './vehicle.interface';

export interface Depot extends IIdentifiable<number> {
    id?: number;
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
