package com.plutoz.carryit.common.service;

import com.plutoz.carryit.common.domain.Identifiable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.Optional;

public interface CrudService<T extends Identifiable<ID>, ID extends Serializable> {

    Page<T> findAll(Pageable pageable);

    Optional<T> findById(ID id);

    T save(T item);

    ID delete(ID item);
}
