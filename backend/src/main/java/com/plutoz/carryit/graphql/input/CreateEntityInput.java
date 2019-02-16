package com.plutoz.carryit.graphql.input;

import com.plutoz.carryit.domain.Identifiable;

import java.io.Serializable;

public interface CreateEntityInput<T extends Identifiable<ID>, ID extends Serializable> {

    T toEntity();
}
