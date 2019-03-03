INSERT INTO depot(id, name) VALUES
(1, 'Depot 1'),
(2, 'Depot 2'),
(3, 'Depot 3'),
(4, 'Depot 4'),
(5, 'Depot 5'),
(6, 'Depot 6'),
(7, 'Depot 7');
SELECT setval('depot_id_seq', 8, true);

INSERT INTO vehicle(id, depot_id, licence_plate) VALUES
(1, 1, 'D1-001'),
(2, 1, 'D1-002'),
(3, 1, 'D1-003'),
(4, 2, 'D2-001'),
(5, 2, 'D2-002'),
(6, 3, 'D3-001'),
(7, 3, 'D3-002'),
(8, 3, 'D3-003'),
(9, 3, 'D3-004'),
(10, 3, 'D3-005'),
(11, 3, 'D3-006');

SELECT setval('vehicle_id_seq', 12, true);