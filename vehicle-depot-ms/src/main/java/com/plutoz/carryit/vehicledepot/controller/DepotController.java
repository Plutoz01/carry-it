package com.plutoz.carryit.vehicledepot.controller;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/depot")
public class DepotController {

    private final DepotService depotService;

    @Autowired
    public DepotController(DepotService depotService) {
        this.depotService = depotService;
    }

    @GetMapping
    public List<Depot> getAllDepots() {
        return depotService.findAll();
    }

    @GetMapping("/{depotId}")
    public Depot getById(@PathVariable long depotId) {
        Optional<Depot> result = depotService.findById(depotId);
        // TODO: handle a much prettier way
        return result.orElse(null);
    }

    @GetMapping("/{depotId}/vehicles")
    public List<Vehicle> getVehiclesOfADepot(@PathVariable long depotId) {
        Optional<Depot> result = depotService.findById(depotId);
        return result.isPresent() ? result.get().getVehicles() : Collections.emptyList();
    }
}
