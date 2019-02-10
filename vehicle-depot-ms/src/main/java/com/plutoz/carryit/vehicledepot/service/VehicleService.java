package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

public interface VehicleService {

    Sort DEFAULT_SORT = new Sort(Sort.Direction.DESC, "id");

    Page<Vehicle> findAll(Pageable pageable);

    Optional<Vehicle> findById(long id);

    CompletableFuture<List<List<Vehicle>>> findByDepotIds(List<Long> depotIds);

    Page<Vehicle> findByLicencePlate(String queryText, Pageable pageable);

    int countByDepotId(long vehicleId);

    Vehicle save(Vehicle vehicle);

    long delete(long vehicleId);
}
