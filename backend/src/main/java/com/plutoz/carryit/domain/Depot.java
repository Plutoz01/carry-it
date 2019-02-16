package com.plutoz.carryit.domain;

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
public class Depot {
    private static final String ID_SEQ_GENERATOR = "depot_id_seq_gen";

    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "depot_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private String name;
}
