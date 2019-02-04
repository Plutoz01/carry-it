package com.plutoz.carryit.vehicledepot.graphql.mutation.input;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import lombok.Data;

@Data
public class CreateDepotInput {
    private String name;

    public Depot toDepot() {
        return Depot.builder()
                .name(getName())
                .build();
    }
}
