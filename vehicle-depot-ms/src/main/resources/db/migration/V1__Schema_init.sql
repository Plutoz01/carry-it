CREATE TABLE depot
(
  id BIGSERIAL NOT NULL,
  name TEXT NOT NULL,
  CONSTRAINT depot_pkey PRIMARY KEY (id)
);
ALTER TABLE depot
  OWNER TO carryit;

CREATE TABLE vehicle
(
   id BIGSERIAL NOT NULL,
   depot_id BIGINT NOT NULL,
   CONSTRAINT vehicle_pkey PRIMARY KEY (id),
   CONSTRAINT depot_id_fkey FOREIGN KEY (depot_id)
         REFERENCES depot (id) MATCH SIMPLE
         ON UPDATE RESTRICT ON DELETE RESTRICT
);
ALTER TABLE vehicle
  OWNER TO carryit;


-- Fill with initial data

INSERT INTO depot(id, name) VALUES
(1, 'Depot 1'),
(2, 'Depot 2'),
(3, 'Depot 3');
SELECT setval('depot_id_seq', 4, true);

INSERT INTO vehicle(id, depot_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 3),
(9, 3);
SELECT setval('vehicle_id_seq', 10, true);




