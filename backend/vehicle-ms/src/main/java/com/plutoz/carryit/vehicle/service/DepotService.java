package com.plutoz.carryit.vehicle.service;

import com.plutoz.carryit.common.service.CrudService;
import com.plutoz.carryit.vehicle.domain.Depot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface DepotService extends CrudService<Depot, Long> {

    Sort DEFAULT_SORT = Sort.by(Sort.Direction.DESC, "id");

    CompletableFuture<List<Depot>> findByIds(List<Long> ids);

    Page<Depot> findByName(String queryText, Pageable pageable);
}
