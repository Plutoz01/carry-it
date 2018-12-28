package com.plutoz.carryit.vehicledepot.repository;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepotRepository extends JpaRepository<Depot, Long> {

    Page<Depot> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
