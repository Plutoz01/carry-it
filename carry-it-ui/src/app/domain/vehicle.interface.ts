import { Depot } from './depot.interface';
import { IIdentifiable } from './identifiable.interface';

export interface Vehicle extends IIdentifiable<number> {
    id: number;
    licencePlate: string;
    depotId?: number;
    depot?: Depot;
}
