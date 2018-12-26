package com.plutoz.carryit.vehicledepot.graphql.mutation;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.CreateDepotInput;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MutationResolver implements GraphQLMutationResolver {

    private final DepotService depotService;

    @Autowired
    public MutationResolver(DepotService depotService) {
        this.depotService = depotService;
    }

    Depot createDepot(CreateDepotInput input) {
        final var depot = Depot.builder()
                .name(input.getName())
                .build();
        return depotService.save(depot);
    }
}
