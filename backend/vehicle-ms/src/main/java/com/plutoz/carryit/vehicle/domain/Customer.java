package com.plutoz.carryit.vehicle.domain;

import com.plutoz.carryit.common.domain.Identifiable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Customer implements Identifiable<Long> {
    private static final String ID_SEQ_GENERATOR = "customer_id_seq_gen";

    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "customer_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private String name;
}
