package com.plutoz.carryit.vehicle.graphql.input;

import com.plutoz.carryit.common.graphql.input.CreateEntityInput;
import com.plutoz.carryit.vehicle.domain.Depot;
import lombok.Data;

@Data
public class CreateDepotInput implements CreateEntityInput<Depot, Long> {
    private String name;

    @Override
    public Depot toEntity() {
        return Depot.builder()
                .name(getName())
                .build();
    }
}
