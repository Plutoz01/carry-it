package com.plutoz.carryit.common.graphql.exception;

import java.io.Serializable;
import java.util.Map;

public class EntityNotFoundException extends SanitizedGraphQLException {
    private final Serializable id;

    public EntityNotFoundException(Serializable id) {
        this.id = id;
    }

    @Override
    public Map<String, Object> getExtensions() {
        return Map.of("id", id);
    }

    @Override
    public String getMessage() {
        return String.format("Requested entity with id: '%d' has not found.", id);
    }
}
