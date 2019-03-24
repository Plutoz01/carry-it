package com.plutoz.carryit.vehicle.graphql.input;

import com.plutoz.carryit.common.graphql.input.CreateEntityInput;
import com.plutoz.carryit.vehicle.domain.Vehicle;
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
