package com.plutoz.carryit.service;

import com.plutoz.carryit.domain.Vehicle;
import com.plutoz.carryit.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

@Service
@Transactional
public class VehicleServiceImpl extends AbstractCrudService<Vehicle, Long> implements VehicleService {

    private final VehicleRepository repository;

    @Autowired
    public VehicleServiceImpl(VehicleRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Override
    public CompletableFuture<List<List<Vehicle>>> findByDepotIds(List<Long> depotIds) {

        return repository.findByDepotIdIsIn(depotIds).thenApply(vehicles -> {
            var vehiclesByDepotId = vehicles.stream()
                    .collect(groupingBy(Vehicle::getDepotId));

            //preserve original order of depotIds
            return depotIds.stream()
                    .map(depotId -> vehiclesByDepotId.getOrDefault(depotId, Collections.emptyList()))
                    .collect(Collectors.toList());
        });
    }

    @Override
    public int countByDepotId(Long depotId) {
        return repository.countByDepotId(depotId);
    }

    @Override
    public Page<Vehicle> findByLicencePlate(String queryText, Pageable pageable) {
        return repository.findByLicencePlateContainingIgnoreCase(queryText, pageable);
    }
}
