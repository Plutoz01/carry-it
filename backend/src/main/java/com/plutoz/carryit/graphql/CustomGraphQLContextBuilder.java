package com.plutoz.carryit.graphql;

import com.plutoz.carryit.domain.Depot;
import com.plutoz.carryit.domain.Vehicle;
import com.plutoz.carryit.service.DepotService;
import com.plutoz.carryit.service.VehicleService;
import graphql.servlet.GraphQLContext;
import graphql.servlet.GraphQLContextBuilder;
import org.dataloader.DataLoader;
import org.dataloader.DataLoaderRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;
import javax.websocket.server.HandshakeRequest;
import java.util.List;

@Component
public class CustomGraphQLContextBuilder implements GraphQLContextBuilder {

    public static final String DEPOT_BY_ID_LOADER = "DepotByIdLoader";
    public static final String VEHICLES_BY_DEPOT_ID_LOADER = "VehiclesByDepotIdLoader";

    private final DepotService depotService;
    private final VehicleService vehicleService;

    @Autowired
    public CustomGraphQLContextBuilder(DepotService depotService, VehicleService vehicleService) {
        this.depotService = depotService;
        this.vehicleService = vehicleService;
    }

    @Override
    public GraphQLContext build(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        GraphQLContext ctx = new GraphQLContext(httpServletRequest, httpServletResponse);

        setDataLoaderRegistry(ctx);
        return ctx;
    }

    @Override
    public GraphQLContext build(Session session, HandshakeRequest handshakeRequest) {
        GraphQLContext ctx = new GraphQLContext(session, handshakeRequest);

        setDataLoaderRegistry(ctx);
        return ctx;
    }

    @Override
    public GraphQLContext build() {
        GraphQLContext ctx = new GraphQLContext();

        setDataLoaderRegistry(ctx);
        return ctx;
    }

    private void setDataLoaderRegistry(GraphQLContext ctx) {
        DataLoaderRegistry registry = new DataLoaderRegistry();
        registry.register(DEPOT_BY_ID_LOADER, getDepotByIdLoader())
                .register(VEHICLES_BY_DEPOT_ID_LOADER, getVehiclesByDepotIdLoader());

        ctx.setDataLoaderRegistry(registry);
    }

    private DataLoader<Long, Depot> getDepotByIdLoader() {
        return new DataLoader<>(depotService::findByIds);
    }

    private DataLoader<Long, List<Vehicle>> getVehiclesByDepotIdLoader() {
        return new DataLoader<>(vehicleService::findByDepotIds);
    }
}
