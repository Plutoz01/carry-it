package com.plutoz.carryit.graphql.mutation;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.plutoz.carryit.graphql.mutation.input.UpdateDepotInput;
import com.plutoz.carryit.domain.Depot;
import com.plutoz.carryit.graphql.mutation.input.CreateDepotInput;
import com.plutoz.carryit.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DepotMutationResolver implements GraphQLMutationResolver {

    private final DepotService depotService;

    @Autowired
    public DepotMutationResolver(DepotService depotService) {
        this.depotService = depotService;
    }

    Depot createDepot(CreateDepotInput input) {
        return depotService.save(input.toDepot());
    }

    Depot updateDepot(UpdateDepotInput input) {
        return depotService.save(input.toDepot());
    }

    long deleteDepot(Long id) {
            return depotService.delete(id);
    }
}
