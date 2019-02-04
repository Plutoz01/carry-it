package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.exception.EntityNotFoundException;
import com.plutoz.carryit.vehicledepot.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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
    public List<Vehicle> findByDepotId(long depotId) {
        return repository.findByDepotId(depotId);
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
