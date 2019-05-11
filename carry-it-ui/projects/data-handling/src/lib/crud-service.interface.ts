import { Observable } from 'rxjs';
import { IIdentifiable } from './identifiable.interface';

export interface ICrudService<ID, T extends IIdentifiable<ID>> {
    getById$(id: ID): Observable<T | null>;

    create$(input: T): Observable<T>;

    update$(input: T): Observable<T>;

    delete$(id: ID): Observable<ID>;
}
