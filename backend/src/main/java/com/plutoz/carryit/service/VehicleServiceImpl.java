package com.plutoz.carryit.service;

import com.plutoz.carryit.exception.EntityNotFoundException;
import com.plutoz.carryit.repository.VehicleRepository;
import com.plutoz.carryit.domain.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository repository;

    @Autowired
    public VehicleServiceImpl(VehicleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<Vehicle> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Page<Vehicle> findAll(Pageable pageable) {
        return repository.findAll(pageable);
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
    public int countByDepotId(long depotId) {
        return repository.countByDepotId(depotId);
    }

    @Override
    public Page<Vehicle> findByLicencePlate(String queryText, Pageable pageable) {
        return repository.findByLicencePlateContainingIgnoreCase(queryText, pageable);
    }

    @Override
    public Vehicle save(Vehicle vehicle) {
        if (vehicle.getId() != null) {
            if (!repository.existsById(vehicle.getId())) {
                throw new EntityNotFoundException(vehicle.getId());
            }
        }
        return repository.save(vehicle);
    }

    @Override
    public long delete(long vehicleId) {
        if (!repository.existsById(vehicleId)) {
            throw new EntityNotFoundException(vehicleId);
        }

        repository.deleteById(vehicleId);
        return vehicleId;
    }
}
