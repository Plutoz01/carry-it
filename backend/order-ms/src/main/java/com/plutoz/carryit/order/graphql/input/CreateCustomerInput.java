package com.plutoz.carryit.order.graphql.input;

import com.plutoz.carryit.common.graphql.input.CreateEntityInput;
import com.plutoz.carryit.order.domain.Customer;
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
