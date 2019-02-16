package com.plutoz.carryit.graphql;

import com.plutoz.carryit.domain.Vehicle;
import com.plutoz.carryit.graphql.input.CreateVehicleInput;
import com.plutoz.carryit.graphql.input.UpdateVehicleInput;
import com.plutoz.carryit.graphql.pagination.PageRequest;
import com.plutoz.carryit.graphql.pagination.PagedResponse;
import com.plutoz.carryit.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class VehicleResolver extends AbstractCrudResolver<Vehicle, Long> {

    private final VehicleService vehicleService;

    @Autowired
    public VehicleResolver(VehicleService vehicleService) {
        super(vehicleService);
        this.vehicleService = vehicleService;
    }

    PagedResponse<Vehicle> getAllVehicle(Optional<PageRequest> page, Optional<String> queryText) {
        return super.getAll(page, queryText);
    }

    Optional<Vehicle> getVehicleById(Long id) {
        return super.getById(id);
    }

    Vehicle createVehicle(CreateVehicleInput input) {
        return super.create(input);
    }

    Vehicle updateVehicle(UpdateVehicleInput input) {
        return super.update(input);
    }

    Long deleteVehicle(Long id) {
        return super.delete(id);
    }

    @Override
    protected Page<Vehicle> searchByQueryText(String queryText, Pageable pageable) {
        return vehicleService.findByLicencePlate(queryText, pageable);
    }

    @Override
    protected Sort getDefaultSort() {
        return VehicleService.DEFAULT_SORT;
    }
}
