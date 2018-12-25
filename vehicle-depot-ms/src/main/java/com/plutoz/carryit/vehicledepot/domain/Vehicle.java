package com.plutoz.carryit.vehicledepot.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Vehicle {

    @Id
    private Long id;
    private Long depotId;
    private String licencePlate;
}
