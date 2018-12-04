package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;

import java.util.List;

public interface VehicleService {

    List<Vehicle> findAll();

    List<Vehicle> findByDepotId(long depotId);
}
