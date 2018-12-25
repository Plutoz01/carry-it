package com.plutoz.carryit.vehicledepot.repository;

import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    List<Vehicle> findByDepotId(long depotId);

    int countByDepotId(long depotId);
}
