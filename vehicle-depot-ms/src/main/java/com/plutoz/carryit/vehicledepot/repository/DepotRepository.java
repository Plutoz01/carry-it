package com.plutoz.carryit.vehicledepot.repository;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepotRepository extends JpaRepository<Depot, Long> {
}
