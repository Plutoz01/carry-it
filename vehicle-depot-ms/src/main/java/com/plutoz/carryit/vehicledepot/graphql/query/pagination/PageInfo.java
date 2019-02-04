package com.plutoz.carryit.vehicledepot.graphql.query.pagination;

import lombok.Data;
import org.springframework.data.domain.Page;

@Data
public class PageInfo {
    private final long totalElements;
    private final int totalPages;

    public static PageInfo from(Page page) {
        return new PageInfo(page.getTotalElements(), page.getTotalPages());
    }
}
