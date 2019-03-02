package com.plutoz.carryit.common.domain;

import java.io.Serializable;

public interface Identifiable<ID extends Serializable> {
    ID getId();
}
