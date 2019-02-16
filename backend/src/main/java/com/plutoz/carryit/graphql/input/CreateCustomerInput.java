package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Customer;
import lombok.Data;

@Data
public class CreateCustomerInput implements CreateEntityInput<Customer, Long> {
    private String name;

    @Override
    public Customer toEntity() {
        return Customer.builder()
                .name(getName())
                .build();
    }
}
