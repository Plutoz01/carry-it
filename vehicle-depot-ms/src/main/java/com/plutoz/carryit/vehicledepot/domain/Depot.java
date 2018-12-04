package com.plutoz.carryit.vehicledepot.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Depot {

    @Id
    private Long id;

    private String name;

    @OneToMany(mappedBy = "depot")
    private List<Vehicle> vehicles;
}
