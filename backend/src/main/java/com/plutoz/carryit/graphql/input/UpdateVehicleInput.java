package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Vehicle;
import lombok.Data;

@Data
public class UpdateVehicleInput implements UpdateEntityInput<Vehicle, Long> {
    private long id;
    private long depotId;
    private String licencePlate;

    @Override
    public Vehicle toEntity() {
        return Vehicle.builder()
                .id(getId())
                .depotId(getDepotId())
                .licencePlate(getLicencePlate())
                .build();
    }
}
