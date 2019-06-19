package com.plutoz.carryit.common;

import com.plutoz.carryit.common.graphql.resolver.PointFieldResolver;
import org.springframework.context.annotation.Bean;

public class SpatialConfiguration {

    @Bean
    public PointFieldResolver getPointFieldResolver() {
        return new PointFieldResolver();
    }
}
