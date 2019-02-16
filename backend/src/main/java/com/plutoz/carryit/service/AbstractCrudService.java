package com.plutoz.carryit.service;

import com.plutoz.carryit.domain.Identifiable;
import com.plutoz.carryit.exception.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.Optional;

@Transactional
public abstract class AbstractCrudService<T extends Identifiable<ID>, ID extends Serializable> implements CrudService<T, ID> {

    private final JpaRepository<T, ID> jpaRepository;

    public AbstractCrudService(JpaRepository<T, ID> jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    public Page<T> findAll(Pageable pageable) {
        return jpaRepository.findAll(pageable);
    }

    public Optional<T> findById(ID id) {
        return jpaRepository.findById(id);
    }

    public T save(T item) {
        if (item.getId() != null) {
            if (!jpaRepository.existsById(item.getId())) {
                throw new EntityNotFoundException(item.getId());
            }
        }
        return jpaRepository.save(item);
    }

    public ID delete(ID id) {
        if (!jpaRepository.existsById(id)) {
            throw new EntityNotFoundException(id);
        }

        jpaRepository.deleteById(id);
        return id;
    }
}
