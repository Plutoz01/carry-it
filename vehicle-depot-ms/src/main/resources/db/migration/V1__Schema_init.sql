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
