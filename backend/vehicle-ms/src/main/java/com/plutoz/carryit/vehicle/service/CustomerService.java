package com.plutoz.carryit.vehicle.service;

import com.plutoz.carryit.common.service.CrudService;
import com.plutoz.carryit.vehicle.domain.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public interface CustomerService extends CrudService<Customer, Long> {

    Sort DEFAULT_SORT = new Sort(Sort.Direction.DESC, "id");

    Page<Customer> findByName(String queryText, Pageable pageable);
}
