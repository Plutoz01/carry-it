package com.plutoz.carryit.graphql.field;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.plutoz.carryit.graphql.CustomGraphQLContextBuilder;
import com.plutoz.carryit.domain.Depot;
import com.plutoz.carryit.domain.Vehicle;
import com.plutoz.carryit.service.VehicleService;
import graphql.schema.DataFetchingEnvironment;
import org.dataloader.DataLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Component
public class DepotFieldResolver implements GraphQLResolver<Depot> {

    private final VehicleService vehicleService;

    @Autowired
    public DepotFieldResolver(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    public CompletableFuture<List<Vehicle>> getVehicles(Depot depot, DataFetchingEnvironment environment) {
        final DataLoader<Long, List<Vehicle>> dataLoader = environment
                .getDataLoader(CustomGraphQLContextBuilder.VEHICLES_BY_DEPOT_ID_LOADER);
        return dataLoader.load(depot.getId());
    }

    public int getVehicleCount(Depot depot) {
        return vehicleService.countByDepotId(depot.getId());
    }
}
