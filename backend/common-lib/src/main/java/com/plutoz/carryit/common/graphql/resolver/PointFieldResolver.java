package com.plutoz.carryit.common.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import org.locationtech.jts.geom.Point;

public class PointFieldResolver implements GraphQLResolver<Point> {

    double getLon(Point point) {
        return point.getX();
    }

    double getLat(Point point) {
        return point.getY();
    }

    String getWkt(Point point) {
        return point.toText();
    }
}
