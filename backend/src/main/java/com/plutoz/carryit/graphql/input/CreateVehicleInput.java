package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Vehicle;
import lombok.Data;

@Data
public class CreateVehicleInput implements CreateEntityInput<Vehicle, Long> {
    private long depotId;
    private String licencePlate;


    @Override
    public Vehicle toEntity() {
        return Vehicle.builder()
                .depotId(getDepotId())
                .licencePlate(getLicencePlate())
                .build();
    }
}
