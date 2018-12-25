package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Optional;

public interface VehicleService {

    List<Vehicle> findAll();

    List<Vehicle> findByDepotId(long depotId);

    int countByDepotId(long depotId);

    Optional<Vehicle> findById(long id);
}
