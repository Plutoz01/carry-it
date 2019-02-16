package com.plutoz.carryit.service;

import com.plutoz.carryit.domain.Depot;
import com.plutoz.carryit.exception.DepotHasAssignedVehiclesException;
import com.plutoz.carryit.repository.DepotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Transactional
public class DepotServiceImpl extends AbstractCrudService<Depot, Long> implements DepotService {

    private final DepotRepository repository;
    private final VehicleService vehicleService;

    @Autowired
    public DepotServiceImpl(DepotRepository repository, VehicleService vehicleService) {
        super(repository);
        this.repository = repository;
        this.vehicleService = vehicleService;
    }

    @Override
    public CompletableFuture<List<Depot>> findByIds(List<Long> ids) {
        return repository.findByIdIsIn(ids).thenApply(depots -> {
            Map<Long, Depot> depotsById = depots.stream()
                    .collect(Collectors.toMap(Depot::getId, Function.identity()));
            // preserve original order of requested ids
            return ids.stream()
                    .map(depotsById::get)
                    .collect(Collectors.toList());
        });
    }

    @Override
    public Page<Depot> findByName(String name, Pageable pageable) {
        return repository.findByNameContainingIgnoreCase(name, pageable);
    }

    @Override
    public Long delete(Long depotId) {
        long assignedVehiclesCount = vehicleService.countByDepotId(depotId);
        if (assignedVehiclesCount > 0) {
            throw new DepotHasAssignedVehiclesException(depotId, assignedVehiclesCount);
        }

        return super.delete(depotId);
    }
}
