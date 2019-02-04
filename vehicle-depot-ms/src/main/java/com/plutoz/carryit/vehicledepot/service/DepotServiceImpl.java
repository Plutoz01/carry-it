package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.exception.DepotHasAssignedVehiclesException;
import com.plutoz.carryit.vehicledepot.exception.EntityNotFoundException;
import com.plutoz.carryit.vehicledepot.repository.DepotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class DepotServiceImpl implements DepotService {

    private final DepotRepository repository;
    private final VehicleService vehicleService;

    @Autowired
    public DepotServiceImpl(DepotRepository repository, VehicleService vehicleService) {
        this.repository = repository;
        this.vehicleService = vehicleService;
    }

    @Override
    public Page<Depot> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Optional<Depot> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Page<Depot> findByName(String name, Pageable pageable) {
        return repository.findByNameContainingIgnoreCase(name, pageable);
    }

    @Override
    public Depot save(Depot depot) {
        if (depot.getId() != null) {
            if (!repository.existsById(depot.getId())) {
                throw new EntityNotFoundException(depot.getId());
            }
        }
        return repository.save(depot);
    }

    @Override
    public long delete(long depotId) {
        if (!repository.existsById(depotId)) {
            throw new EntityNotFoundException(depotId);
        }
        long assignedVehiclesCount = vehicleService.countByDepotId(depotId);
        if (assignedVehiclesCount > 0) {
            throw new DepotHasAssignedVehiclesException(depotId, assignedVehiclesCount);
        }
        repository.deleteById(depotId);
        return depotId;
    }
}
