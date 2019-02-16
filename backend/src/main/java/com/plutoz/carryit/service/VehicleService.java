package com.plutoz.carryit.service;

import com.plutoz.carryit.domain.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface VehicleService extends CrudService<Vehicle, Long> {

    Sort DEFAULT_SORT = new Sort(Sort.Direction.DESC, "id");

    CompletableFuture<List<List<Vehicle>>> findByDepotIds(List<Long> depotIds);

    Page<Vehicle> findByLicencePlate(String queryText, Pageable pageable);

    int countByDepotId(Long vehicleId);
}
