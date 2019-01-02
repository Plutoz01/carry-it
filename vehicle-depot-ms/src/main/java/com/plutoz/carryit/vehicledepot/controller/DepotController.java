package com.plutoz.carryit.vehicledepot.controller;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.domain.Vehicle;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import com.plutoz.carryit.vehicledepot.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Deprecated
@CrossOrigin
@RestController
@RequestMapping("/api/v1/depot")
public class DepotController {

    private final DepotService depotService;
    private final VehicleService vehicleService;

    @Autowired
    public DepotController(DepotService depotService, VehicleService vehicleService) {
        this.depotService = depotService;
        this.vehicleService = vehicleService;
    }


    @GetMapping("/{depotId}")
    public Depot getById(@PathVariable long depotId) {
        Optional<Depot> result = depotService.findById(depotId);
        // TODO: handle a much prettier way
        return result.orElse(null);
    }

    @GetMapping("/{depotId}/vehicles")
    public List<Vehicle> getVehiclesOfADepot(@PathVariable long depotId) {
        return vehicleService.findByDepotId(depotId);
    }
}
