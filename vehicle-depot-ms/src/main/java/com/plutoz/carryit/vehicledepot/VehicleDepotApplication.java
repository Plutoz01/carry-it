package com.plutoz.carryit.vehicledepot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class VehicleDepotApplication {

    public static void main(String[] args) {
        SpringApplication.run(VehicleDepotApplication.class, args);
    }
}
