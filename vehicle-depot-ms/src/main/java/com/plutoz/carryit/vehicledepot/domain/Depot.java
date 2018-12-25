package com.plutoz.carryit.vehicledepot.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Depot {

    @Id
    private Long id;
    private String name;
}
