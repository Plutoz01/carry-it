package com.plutoz.carryit.common.graphql.input;

import com.plutoz.carryit.common.domain.Identifiable;

import java.io.Serializable;

public interface CreateEntityInput<T extends Identifiable<ID>, ID extends Serializable> {

    T toEntity();
}
