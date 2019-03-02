package com.plutoz.carryit.order.domain;

import com.plutoz.carryit.common.domain.Identifiable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Order implements Identifiable<Long> {
    public enum Status {
        UNCONFIRMED,
        CONFIRMED,
        ASSIGNED,
        IN_PROGRESS,
        DONE,
        REJECTED,
        CANCELLED,
        FAILED
    }

    private static final String ID_SEQ_GENERATOR = "order_id_seq_gen";

    @Id
    @SequenceGenerator(name = ID_SEQ_GENERATOR, sequenceName = "order_id_seq", allocationSize = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = ID_SEQ_GENERATOR)
    private Long id;
    private Long customerId;
    private Date deadline;
    private BigDecimal price;
    @Enumerated(EnumType.STRING)
    private Status status;
}
