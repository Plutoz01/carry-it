package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

public interface DepotService {

    Sort DEFAULT_SORT = new Sort(Sort.Direction.DESC, "id");

    Page<Depot> findAll(Pageable pageable);

    Optional<Depot> findById(long id);

    CompletableFuture<List<Depot>> findByIds(List<Long> ids);

    Page<Depot> findByName(String queryText, Pageable pageable);

    Depot save(Depot depot);

    long delete(long depotId);
}
