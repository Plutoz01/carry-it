package com.plutoz.carryit.vehicledepot.graphql.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.Page;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.PagedResponse;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DepotQueryResolver implements GraphQLQueryResolver {

    private final DepotService depotService;

    @Autowired
    public DepotQueryResolver(DepotService depotService) {
        this.depotService = depotService;
    }

    PagedResponse<Depot> getAllDepot(Optional<Page> page) {
        var pagedResult = depotService.findAll(page.orElse(Page.defaultPage()).asPageable());
        return PagedResponse.from(pagedResult);
    }

}
