package com.plutoz.carryit.vehicledepot.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Vehicle {
    private static final String ID_SEQ_GENERATOR = "vehicle_id_seq_gen";


    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "vehicle_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private Long depotId;
    private String licencePlate;
}
