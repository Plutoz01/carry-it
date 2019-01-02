package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Optional;

public interface DepotService {

    Sort DEFAULT_SORT = new Sort(Sort.Direction.DESC, "id");

    Page<Depot> findAll(Pageable pageable);

    Optional<Depot> findById(long id);

    Page<Depot> findByName(String queryText, Pageable pageable);

    Depot save(Depot depot);

    long delete(long depotId);
}
