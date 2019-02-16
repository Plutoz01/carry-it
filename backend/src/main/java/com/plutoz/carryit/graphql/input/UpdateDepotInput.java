package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Depot;
import lombok.Data;

@Data
public class UpdateDepotInput implements UpdateEntityInput<Depot, Long> {
    private Long id;
    private String name;

    @Override
    public Depot toEntity() {
        return Depot.builder()
                .id(getId())
                .name(getName())
                .build();
    }
}
