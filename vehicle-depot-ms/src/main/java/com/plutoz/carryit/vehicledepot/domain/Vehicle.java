package com.plutoz.carryit.vehicledepot.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    private static final String ID_SEQ_GENERATOR = "vehicle_id_seq_gen";


    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "vehicle_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private Long depotId;
    private String licencePlate;
}
