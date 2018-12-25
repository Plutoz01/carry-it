package com.plutoz.carryit.vehicledepot.queryresolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import com.plutoz.carryit.vehicledepot.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class QueryResolver implements GraphQLQueryResolver {

    private final DepotService depotService;
    private final VehicleService vehicleService;

    @Autowired
    public QueryResolver(DepotService depotService, VehicleService vehicleService) {
        this.depotService = depotService;
        this.vehicleService = vehicleService;
    }

    List<Depot> getAllDepot(int count, int offset) {
        // TODO: pagination
        return depotService.findAll();
    }

    List<Vehicle> getAllVehicle() {
        return vehicleService.findAll();
    }

    Optional<Vehicle> getVehicleById(long id) {
        return vehicleService.findById(id);
    }

}
