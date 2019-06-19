INSERT INTO depot(id, name, location) VALUES
(1, 'Budapest depot 1', ST_SetSRID(ST_MakePoint(19.0627, 47.4265), 4326)),
(2, 'Budapest depot 2', ST_SetSRID(ST_MakePoint(19.08255, 47.57752), 4326)),
(3, 'Bratislava depot 1', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(4, 'Wien depot 1', ST_SetSRID(ST_MakePoint(16.30101, 48.13383), 4326)),
(5, 'Szeged depot 1', ST_SetSRID(ST_MakePoint(20.12071, 46.25666), 4326)),
(6, 'Zalaegerszeg depot 1', ST_SetSRID(ST_MakePoint(16.84640, 46.82194), 4326)),
(7, 'Maribor depot 1', ST_SetSRID(ST_MakePoint(15.66375, 46.52537), 4326));
SELECT setval('depot_id_seq', 8, true);

INSERT INTO vehicle(id, depot_id, licence_plate, location) VALUES
(1, 1, 'BUD1-001', ST_SetSRID(ST_MakePoint(19.0627, 47.4265), 4326)),
(2, 1, 'BUD1-002', ST_SetSRID(ST_MakePoint(19.0627, 47.4265), 4326)),
(3, 1, 'BUD1-003', ST_SetSRID(ST_MakePoint(19.0627, 47.4265), 4326)),
(4, 2, 'BUD2-001', ST_SetSRID(ST_MakePoint(19.08255, 47.57752), 4326)),
(5, 2, 'BUD2-002', ST_SetSRID(ST_MakePoint(19.08255, 47.57752), 4326)),
(6, 3, 'BRA1-001', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(7, 3, 'BRA1-002', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(8, 3, 'BRA1-003', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(9, 3, 'BRA1-004', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(10, 3, 'BRA1-005', ST_SetSRID(ST_MakePoint(17.15229, 48.17193), 4326)),
(11, 4, 'WIE1-001', ST_SetSRID(ST_MakePoint(16.30101, 48.13383), 4326));

SELECT setval('vehicle_id_seq', 12, true);