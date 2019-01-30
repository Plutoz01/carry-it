package com.plutoz.carryit.vehicledepot.graphql.mutation;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.CreateVehicleInput;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.UpdateVehicleInput;
import com.plutoz.carryit.vehicledepot.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VehicleMutationResolver implements GraphQLMutationResolver {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleMutationResolver(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    Vehicle createVehicle(CreateVehicleInput input) {
        return vehicleService.save(input.toVehicle());
    }

    Vehicle updateVehicle(UpdateVehicleInput input) {
        return vehicleService.save(input.toVehicle());
    }

    long deleteVehicle(Long id) {
        return vehicleService.delete(id);
    }
}
