package com.plutoz.carryit.vehicledepot.graphql.mutation.input;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import lombok.Data;

@Data
public class CreateVehicleInput {
    private String licencePlate;


    public Vehicle toVehicle() {
        return Vehicle.builder()
                .licencePlate(getLicencePlate())
                .build();
    }
}
