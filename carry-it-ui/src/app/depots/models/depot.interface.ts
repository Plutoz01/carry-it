import { Vehicle } from '../../vehicles/models/vehicle.interface';

export interface Depot {
    id: number;
    name: string;
    vehicles: Vehicle[];
}
