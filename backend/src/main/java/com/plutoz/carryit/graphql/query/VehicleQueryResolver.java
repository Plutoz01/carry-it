package com.plutoz.carryit.graphql.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.domain.Vehicle;
import com.plutoz.carryit.graphql.query.pagination.PageRequest;
import com.plutoz.carryit.graphql.query.pagination.PagedResponse;
import com.plutoz.carryit.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class VehicleQueryResolver implements GraphQLQueryResolver {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleQueryResolver(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    PagedResponse<Vehicle> getAllVehicle(Optional<PageRequest> page, Optional<String> queryText) {
        var pageable = page.orElse(PageRequest.defaultPage()).asPageableWithSort(VehicleService.DEFAULT_SORT);
        Page<Vehicle> pagedResult;

        if (queryText.isPresent() && queryText.get().trim().length() > 0) {
            pagedResult = vehicleService.findByLicencePlate(queryText.get(), pageable);
        } else {
            pagedResult = vehicleService.findAll(pageable);
        }
        return PagedResponse.from(pagedResult);
    }

    Optional<Vehicle> getVehicleById(long id) {
        return vehicleService.findById(id);
    }
}
