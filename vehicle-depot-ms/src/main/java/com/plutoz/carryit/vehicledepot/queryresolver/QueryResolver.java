package com.plutoz.carryit.vehicledepot.queryresolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.queryresolver.pagination.Page;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.queryresolver.pagination.PagedResponse;
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

    PagedResponse<Depot> getAllDepot(Optional<Page> page) {
        var pagedResult = depotService.findAll(page.orElse(Page.defaultPage()).asPageable());
        return PagedResponse.from(pagedResult);
    }

    PagedResponse<Vehicle> getAllVehicle(Optional<Page> page) {
        var pagedResult = vehicleService.findAll(page.orElse(Page.defaultPage()).asPageable());
        return PagedResponse.from(pagedResult);
    }

    Optional<Vehicle> getVehicleById(long id) {
        return vehicleService.findById(id);
    }

}
