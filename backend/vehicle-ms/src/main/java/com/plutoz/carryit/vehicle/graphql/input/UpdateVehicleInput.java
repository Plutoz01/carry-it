package com.plutoz.carryit.vehicle.graphql.input;

import com.plutoz.carryit.common.graphql.input.UpdateEntityInput;
import com.plutoz.carryit.vehicle.domain.Vehicle;
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
