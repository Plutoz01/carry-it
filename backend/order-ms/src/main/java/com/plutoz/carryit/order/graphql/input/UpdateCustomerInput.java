package com.plutoz.carryit.order.graphql.input;

import com.plutoz.carryit.common.graphql.input.UpdateEntityInput;
import com.plutoz.carryit.order.domain.Customer;
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
