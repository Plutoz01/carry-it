package com.plutoz.carryit.graphql;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.plutoz.carryit.domain.Identifiable;
import com.plutoz.carryit.graphql.input.CreateEntityInput;
import com.plutoz.carryit.graphql.input.UpdateEntityInput;
import com.plutoz.carryit.graphql.pagination.PageRequest;
import com.plutoz.carryit.graphql.pagination.PagedResponse;
import com.plutoz.carryit.service.CrudService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.io.Serializable;
import java.util.Optional;

public abstract class AbstractCrudResolver<T extends Identifiable<ID>, ID extends Serializable> implements GraphQLQueryResolver, GraphQLMutationResolver {

    private final CrudService<T,ID> crudService;

    protected AbstractCrudResolver(CrudService<T, ID> crudService) {
        this.crudService = crudService;
    }

    protected Optional<T> getById(ID id) {
        return crudService.findById(id);
    }

    protected T create(CreateEntityInput<T,ID> input) {
        return crudService.save(input.toEntity());
    }

    protected T update(UpdateEntityInput<T, ID> input) {
        return crudService.save(input.toEntity());
    }

    protected ID delete(ID id) {
        return crudService.delete(id);
    }

    protected PagedResponse<T> getAll(Optional<PageRequest> page, Optional<String> queryText) {
        var pageable = page.orElse(PageRequest.defaultPage()).asPageableWithSort(getDefaultSort());
        Page<T> pagedResult;

        if (queryText.isPresent() && queryText.get().trim().length() > 0) {
            pagedResult = this.searchByQueryText(queryText.get(), pageable);
        } else {
            pagedResult = crudService.findAll(pageable);
        }
        return PagedResponse.from(pagedResult);
    }

    protected abstract Page<T> searchByQueryText(String queryText, Pageable pageable);

    protected abstract Sort getDefaultSort();
}
