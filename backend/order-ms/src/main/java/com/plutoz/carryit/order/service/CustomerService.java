package com.plutoz.carryit.order.service;

import com.plutoz.carryit.common.service.CrudService;
import com.plutoz.carryit.order.domain.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public interface CustomerService extends CrudService<Customer, Long> {

    Sort DEFAULT_SORT = Sort.by(Sort.Direction.DESC, "id");

    Page<Customer> findByName(String queryText, Pageable pageable);
}
