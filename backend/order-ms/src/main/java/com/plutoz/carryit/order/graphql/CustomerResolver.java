package com.plutoz.carryit.order.graphql;

import com.plutoz.carryit.common.graphql.pagination.PageRequest;
import com.plutoz.carryit.common.graphql.pagination.PagedResponse;
import com.plutoz.carryit.common.graphql.resolver.AbstractCrudResolver;
import com.plutoz.carryit.order.domain.Customer;
import com.plutoz.carryit.order.graphql.input.CreateCustomerInput;
import com.plutoz.carryit.order.graphql.input.UpdateCustomerInput;
import com.plutoz.carryit.order.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomerResolver extends AbstractCrudResolver<Customer, Long> {

    private final CustomerService customerService;

    @Autowired
    public CustomerResolver(CustomerService customerService) {
        super(customerService);
        this.customerService = customerService;
    }

    PagedResponse<Customer> getAllCustomer(Optional<PageRequest> page, Optional<String> queryText) {
        return super.getAll(page, queryText);
    }

    Optional<Customer> getCustomerById(long id) {
        return customerService.findById(id);
    }

    Customer createCustomer(CreateCustomerInput input) {
        return super.create(input);
    }

    Customer updateCustomer(UpdateCustomerInput input) {
        return super.update(input);
    }

    Long deleteCustomer(Long id) {
        return super.delete(id);
    }

    @Override
    protected Page<Customer> searchByQueryText(String queryText, Pageable pageable) {
        return customerService.findByName(queryText, pageable);
    }

    @Override
    protected Sort getDefaultSort() {
        return CustomerService.DEFAULT_SORT;
    }
}
