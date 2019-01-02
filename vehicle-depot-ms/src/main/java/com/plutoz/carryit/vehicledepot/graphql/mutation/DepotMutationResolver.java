package com.plutoz.carryit.vehicledepot.graphql.mutation;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.CreateDepotInput;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.DeleteDepotInput;
import com.plutoz.carryit.vehicledepot.graphql.mutation.input.UpdateDepotInput;
import com.plutoz.carryit.vehicledepot.service.DepotService;
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

    long deleteDepot(DeleteDepotInput input) {
            return depotService.delete(input.getId());
    }
}
