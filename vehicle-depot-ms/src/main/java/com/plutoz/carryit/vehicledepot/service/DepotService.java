package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;

import java.util.List;
import java.util.Optional;

public interface DepotService {

    List<Depot> findAll();

    Optional<Depot> findById(long id);
}
