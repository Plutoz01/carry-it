package com.plutoz.carryit.vehicledepot.exception;

import java.util.Map;

public class DepotHasAssignedVehiclesException extends SanitizedGraphQLException  {
    private final long depotId;
    private final long vehicleCount;

    public DepotHasAssignedVehiclesException(long depotId, long vehicleCount) {
        this.depotId = depotId;
        this.vehicleCount = vehicleCount;
    }

    @Override
    public Map<String, Object> getExtensions() {
        return Map.of("depotId", depotId, "vehicleCount", vehicleCount);
    }

    @Override
    public String getMessage() {
        return String.format("Depot with id: '%d' has %d assigned vehicle(s).", depotId, vehicleCount);
    }
}
