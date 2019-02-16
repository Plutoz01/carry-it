package com.plutoz.carryit.service;

import com.plutoz.carryit.domain.Customer;
import com.plutoz.carryit.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl extends AbstractCrudService<Customer, Long> implements CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(JpaRepository<Customer, Long> jpaRepository, CustomerRepository customerRepository) {
        super(jpaRepository);
        this.customerRepository = customerRepository;
    }

    @Override
    public Page<Customer> findByName(String name, Pageable pageable) {
        return customerRepository.findByNameContainingIgnoreCase(name, pageable);
    }
}
