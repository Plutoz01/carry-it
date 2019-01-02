package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.repository.DepotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DepotServiceImpl implements DepotService {

    private final DepotRepository repository;

    @Autowired
    public DepotServiceImpl(DepotRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Depot> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Optional<Depot> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Page<Depot> findByName(String name, Pageable pageable) {
        return repository.findByNameContainingIgnoreCase(name, pageable);
    }

    @Override
    public Depot save(Depot depot) {
        if(depot.getId() != null) {
            if(!repository.existsById(depot.getId())) {
                throw new IllegalArgumentException("Non-existing depot to update");
            }
        }
        return repository.save(depot);
    }
}
