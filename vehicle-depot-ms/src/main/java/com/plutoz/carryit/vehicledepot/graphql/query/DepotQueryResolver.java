package com.plutoz.carryit.vehicledepot.graphql.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.vehicledepot.domain.Depot;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.PageRequest;
import com.plutoz.carryit.vehicledepot.graphql.query.pagination.PagedResponse;
import com.plutoz.carryit.vehicledepot.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DepotQueryResolver implements GraphQLQueryResolver {

    private final DepotService depotService;

    @Autowired
    public DepotQueryResolver(DepotService depotService) {
        this.depotService = depotService;
    }

    PagedResponse<Depot> getAllDepot(Optional<PageRequest> page, Optional<String> queryText) {
        var pageable = page.orElse(PageRequest.defaultPage()).asPageableWithSort(DepotService.DEFAULT_SORT);
        Page<Depot> pagedResult;

        if (queryText.isPresent() && queryText.get().trim().length() > 0) {
            pagedResult = depotService.findByName(queryText.get(), pageable);
        } else {
            pagedResult = depotService.findAll(pageable);
        }
        return PagedResponse.from(pagedResult);
    }

    Optional<Depot> getDepotById(long id) {
        return depotService.findById(id);
    }
}
