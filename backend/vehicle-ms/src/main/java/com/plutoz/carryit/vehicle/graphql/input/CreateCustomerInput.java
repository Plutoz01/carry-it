package com.plutoz.carryit.vehicle.graphql.input;

import com.plutoz.carryit.common.graphql.input.CreateEntityInput;
import com.plutoz.carryit.vehicle.domain.Customer;
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
