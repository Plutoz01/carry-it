package com.plutoz.carryit.vehicledepot.graphql.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.Page;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.PagedResponse;
import com.plutoz.carryit.vehicledepot.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class VehicleQueryResolver implements GraphQLQueryResolver {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleQueryResolver(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    PagedResponse<Vehicle> getAllVehicle(Optional<Page> page) {
        var pagedResult = vehicleService.findAll(page.orElse(Page.defaultPage()).asPageable());
        return PagedResponse.from(pagedResult);
    }

    Optional<Vehicle> getVehicleById(long id) {
        return vehicleService.findById(id);
    }

}
