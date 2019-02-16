package com.plutoz.carryit.repository;

import com.plutoz.carryit.domain.Depot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Repository
public interface DepotRepository extends JpaRepository<Depot, Long> {

    Page<Depot> findByNameContainingIgnoreCase(String name, Pageable pageable);

    @Async
    CompletableFuture<List<Depot>> findByIdIsIn(List<Long> ids);
}
