import { Depot } from './depot.interface';

export interface Vehicle {
    id: number;
    licencePlate: string;
    depotId?: number;
    depot?: Depot;
}
