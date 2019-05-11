import { Depot } from './depot.interface';
import { IIdentifiable } from 'data-handling';

export interface Vehicle extends IIdentifiable<number> {
    id?: number;
    licencePlate: string;
    depotId?: number;
    depot?: Depot;
}

export const emptyVehicle = (): Vehicle => {
    return {
        id: null,
        licencePlate: ''
    };
};
