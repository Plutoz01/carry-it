package com.plutoz.carryit.vehicle.domain;

import com.plutoz.carryit.common.domain.Identifiable;
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
public class Depot implements Identifiable<Long> {
    private static final String ID_SEQ_GENERATOR = "depot_id_seq_gen";

    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "depot_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private String name;
}
