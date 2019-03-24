# Carry-it GraphQL API

Unified GraphQL API of individual Carry-it related microservices.

## Run

1. git checkout
2. `npm run install`
3. `npm start`
4. Open [locally hosted GraphiQL](http://localhost:4000)

## Query
Each graphQL endpoint of individual microservices registered in `server.js` are accessible with a namespace prefix.

```
{
  vehicle { # prefix of vehicle microservice
    getAllVehicle(page: {page: 0, size: 10}) {
      pageInfo {
        totalElements
        totalPages
      }
      items {
        id
        licencePlate
        depot {
          id
          name
        }
      }
    }
  }
  order { # prefix of order microservice
    getAllCustomer(page: {page: 0, size: 0}) {
      pageInfo {
        totalElements
        totalPages
      }
      items {
        id
        name
      }
    }
  }
}

```


