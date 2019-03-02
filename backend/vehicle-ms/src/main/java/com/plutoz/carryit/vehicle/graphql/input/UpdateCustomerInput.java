package com.plutoz.carryit.vehicle.graphql.input;

import com.plutoz.carryit.common.graphql.input.UpdateEntityInput;
import com.plutoz.carryit.vehicle.domain.Customer;
import lombok.Data;

@Data
public class UpdateCustomerInput implements UpdateEntityInput<Customer, Long> {
    private Long id;
    private String name;

    @Override
    public Customer toEntity() {
        return Customer.builder()
                .id(getId())
                .name(getName())
                .build();
    }
}
