package com.plutoz.carryit.vehicledepot.graphql.query;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DepotResolver implements GraphQLResolver<Depot> {

    private final VehicleService vehicleService;

    @Autowired
    public DepotResolver(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    public List<Vehicle> getVehicles(Depot depot) {
        return vehicleService.findByDepotId(depot.getId());
    }

    public int getVehicleCount(Depot depot) {
        return vehicleService.countByDepotId(depot.getId());
    }
}
