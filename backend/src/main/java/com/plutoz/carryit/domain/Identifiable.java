package com.plutoz.carryit.domain;

import java.io.Serializable;

public interface Identifiable<ID extends Serializable> {
    ID getId();
}
