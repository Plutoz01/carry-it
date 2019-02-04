package com.plutoz.carryit.vehicledepot;

import com.google.common.cache.CacheBuilder;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class CacheConfiguration extends CachingConfigurerSupport {

    private static int CACHE_TTL_IN_SECONDS = 5;
    private static int CACHE_MAX_SIZE = 100;

    @Bean
    @Override
    public CacheManager cacheManager() {
        var cacheBuilder = CacheBuilder.newBuilder()
                .expireAfterWrite(CACHE_TTL_IN_SECONDS, TimeUnit.SECONDS)
                .maximumSize(CACHE_MAX_SIZE);

        return new ConcurrentMapCacheManager() {

            @Override
            protected Cache createConcurrentMapCache(String name) {
                return new ConcurrentMapCache(name, cacheBuilder.build().asMap(), false);
            }
        };
    }
}
