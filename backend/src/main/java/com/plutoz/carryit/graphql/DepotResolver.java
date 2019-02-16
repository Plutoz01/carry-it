package com.plutoz.carryit.graphql;

import com.plutoz.carryit.domain.Depot;
import com.plutoz.carryit.graphql.input.CreateDepotInput;
import com.plutoz.carryit.graphql.input.UpdateDepotInput;
import com.plutoz.carryit.graphql.pagination.PageRequest;
import com.plutoz.carryit.graphql.pagination.PagedResponse;
import com.plutoz.carryit.service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DepotResolver extends AbstractCrudResolver<Depot, Long> {

    private final DepotService depotService;

    @Autowired
    public DepotResolver(DepotService depotService) {
        super(depotService);
        this.depotService = depotService;
    }

    PagedResponse<Depot> getAllDepot(Optional<PageRequest> page, Optional<String> queryText) {
        return super.getAll(page, queryText);
    }

    Optional<Depot> getDepotById(Long id) {
        return super.getById(id);
    }

    Depot createDepot(CreateDepotInput input) {
        return super.create(input);
    }

    Depot updateDepot(UpdateDepotInput input) {
        return super.update(input);
    }

    Long deleteDepot(Long id) {
        return super.delete(id);
    }

    @Override
    protected Page<Depot> searchByQueryText(String queryText, Pageable pageable) {
        return depotService.findByName(queryText, pageable);
    }

    @Override
    protected Sort getDefaultSort() {
        return DepotService.DEFAULT_SORT;
    }
}
