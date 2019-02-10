package com.plutoz.carryit.vehicledepot.graphql;

import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.service.DepotService;
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

@Component
public class CustomGraphQLContextBuilder implements GraphQLContextBuilder {

    public static final String DEPOT_BY_ID_LOADER = "DepotByIdLoader";

    private final DepotService depotService;

    @Autowired
    public CustomGraphQLContextBuilder(DepotService depotService) {
        this.depotService = depotService;
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
        registry.register(DEPOT_BY_ID_LOADER, getDepotByIdLoader());

        ctx.setDataLoaderRegistry(registry);
    }

    private DataLoader<Long, Depot> getDepotByIdLoader() {
        return new DataLoader<>(depotService::findByIds);
    }
}
