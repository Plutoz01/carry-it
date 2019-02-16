package com.plutoz.carryit.graphql.mutation.input;

import com.plutoz.carryit.domain.Vehicle;
import lombok.Data;

@Data
public class UpdateVehicleInput {
    private long id;
    private long depotId;
    private String licencePlate;

    public Vehicle toVehicle() {
        return Vehicle.builder()
                .id(getId())
                .depotId(getDepotId())
                .licencePlate(getLicencePlate())
                .build();
    }
}
