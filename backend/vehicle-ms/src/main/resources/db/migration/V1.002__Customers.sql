CREATE TABLE customer
(
    id BIGSERIAL NOT NULL,
    name TEXT NOT NULL,
    CONSTRAINT customer_pkey PRIMARY KEY (id)
);
ALTER SEQUENCE customer_id_seq INCREMENT 20;


INSERT INTO customer(id, name) VALUES
(1, 'Customer 1'),
(2, 'Customer 2'),
(3, 'Customer 3'),
(4, 'Customer 4'),
(5, 'Customer 5'),
(6, 'Customer 6'),
(7, 'Customer 7');

SELECT setval('customer_id_seq', 8, true);

