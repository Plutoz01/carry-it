package com.plutoz.carryit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class CarryItApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarryItApplication.class, args);
    }
}
