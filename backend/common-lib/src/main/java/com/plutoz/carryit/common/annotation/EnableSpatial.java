package com.plutoz.carryit.common.annotation;

import com.plutoz.carryit.common.SpatialConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Configuration
@Import(SpatialConfiguration.class)
public @interface EnableSpatial {
}
