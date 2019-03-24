CREATE TABLE customer
(
    id BIGSERIAL NOT NULL,
    name TEXT NOT NULL,
    CONSTRAINT customer_pkey PRIMARY KEY (id)
);
ALTER SEQUENCE customer_id_seq INCREMENT 20;


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
    CONSTRAINT order_customer_fkey FOREIGN KEY (customer_id)
          REFERENCES customer (id) MATCH SIMPLE
          ON UPDATE RESTRICT ON DELETE RESTRICT
);

ALTER SEQUENCE order_id_seq INCREMENT 20;

