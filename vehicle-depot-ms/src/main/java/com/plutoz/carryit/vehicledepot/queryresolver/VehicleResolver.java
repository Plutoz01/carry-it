package com.plutoz.carryit.vehicledepot.queryresolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VehicleResolver implements GraphQLResolver<Vehicle> {

    private final DepotService depotService;

    @Autowired
    public VehicleResolver(DepotService depotService) {
        this.depotService = depotService;
    }

    Depot getDepot(Vehicle vehicle) {
        return depotService.findById(vehicle.getDepotId()).orElseThrow();
    }
}
