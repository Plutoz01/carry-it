package com.plutoz.carryit.repository;

import com.plutoz.carryit.domain.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    @Async
    CompletableFuture<List<Vehicle>> findByDepotIdIsIn(List<Long> depotIds);

    Page<Vehicle> findByLicencePlateContainingIgnoreCase(String licencePlate, Pageable pageable);

    int countByDepotId(long depotId);
}
