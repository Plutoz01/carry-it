package com.plutoz.carryit.graphql.query.pagination;

import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
public class PagedResponse<T> {
    private final List<T> items;
    private final PageInfo pageInfo;

    public static <T> PagedResponse<T> from(Page<T> page) {
        return new PagedResponse<>(page.getContent(), PageInfo.from(page));
    }
}
