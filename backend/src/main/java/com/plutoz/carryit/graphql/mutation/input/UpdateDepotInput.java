package com.plutoz.carryit.graphql.mutation.input;

import com.plutoz.carryit.domain.Depot;
import lombok.Data;

@Data
public class UpdateDepotInput {
    private Long id;
    private String name;

    public Depot toDepot() {
        return Depot.builder()
                .id(getId())
                .name(getName())
                .build();
    }
}
