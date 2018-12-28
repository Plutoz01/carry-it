package com.plutoz.carryit.vehicledepot.graphql.query.pagination;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Pageable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageRequest {
    public static final int DEFAULT_PAGE = 0;
    public static final int DEFAULT_SIZE = 10;

    private int page;
    private int size;

    public static PageRequest defaultPage() {
        return new PageRequest(DEFAULT_PAGE, DEFAULT_SIZE);
    }

    public Pageable asPageable(){
        return org.springframework.data.domain.PageRequest.of(page, size);
    }
}
