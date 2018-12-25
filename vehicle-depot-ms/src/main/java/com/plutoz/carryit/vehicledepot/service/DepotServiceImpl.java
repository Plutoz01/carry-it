package com.plutoz.carryit.vehicledepot.service;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.repository.DepotRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Depot> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Depot> findById(long id) {
        return repository.findById(id);
    }
}
