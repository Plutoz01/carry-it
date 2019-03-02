package com.plutoz.carryit.vehicle.graphql.field;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.plutoz.carryit.vehicle.graphql.CustomGraphQLContextBuilder;
import com.plutoz.carryit.vehicle.domain.Depot;
import com.plutoz.carryit.vehicle.domain.Vehicle;
import graphql.schema.DataFetchingEnvironment;
import org.dataloader.DataLoader;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
public class VehicleFieldResolver implements GraphQLResolver<Vehicle> {

    CompletableFuture<Depot> getDepot(Vehicle vehicle, DataFetchingEnvironment environment) {
        final DataLoader<Long, Depot> dataLoader = environment
                .getDataLoader(CustomGraphQLContextBuilder.DEPOT_BY_ID_LOADER);

        return dataLoader.load(vehicle.getDepotId());
    }
}
