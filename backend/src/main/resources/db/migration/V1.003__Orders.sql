CREATE TYPE order_status AS ENUM (
    'UNCONFIRMED',
    'CONFIRMED',
    'ASSIGNED',
    'IN_PROGRESS',
    'DONE',
    'REJECTED',
    'CANCELLED',
    'FAILED'
);

CREATE TABLE "order"
(
    id BIGSERIAL NOT NULL,
    customer_id bigint NOT NULL,
    deadline timestamp with time zone,
    price numeric NOT NULL,
    status "order_status" NOT NULL,
    CONSTRAINT order_pkey PRIMARY KEY (id),
    CONSTRAINT customer_id_fkey FOREIGN KEY (customer_id)
          REFERENCES customer (id) MATCH SIMPLE
          ON UPDATE RESTRICT ON DELETE RESTRICT
);
ALTER TABLE "order" OWNER TO carryit;
ALTER SEQUENCE order_id_seq INCREMENT 20;

