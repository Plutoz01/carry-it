package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Depot;
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
