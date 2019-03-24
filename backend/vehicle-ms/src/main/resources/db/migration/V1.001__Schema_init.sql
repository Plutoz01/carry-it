CREATE TABLE depot
(
  id BIGSERIAL NOT NULL,
  name TEXT NOT NULL,
  CONSTRAINT depot_pkey PRIMARY KEY (id)
);
ALTER SEQUENCE depot_id_seq INCREMENT 20;


CREATE TABLE vehicle
(
   id BIGSERIAL NOT NULL,
   depot_id BIGINT NOT NULL,
   licence_plate TEXT NOT NULL,
   CONSTRAINT vehicle_pkey PRIMARY KEY (id),
   CONSTRAINT depot_id_fkey FOREIGN KEY (depot_id)
         REFERENCES depot (id) MATCH SIMPLE
         ON UPDATE RESTRICT ON DELETE RESTRICT
);
ALTER SEQUENCE vehicle_id_seq INCREMENT 20;
CREATE INDEX depot_id_idx ON vehicle USING hash (depot_id);
