# City

Basic api to handle city operation with gmap api.

# Routes

| name                      | params   | description                   |
|---------------------------|:---------|------------------------------:|
| `/geocode/city`           | city (string)     | Request weather from a city name, require geocode service communication to translate name into location         |

# Geocode data

Use [this](https://maps.googleapis.com/maps/api/geocode) api to request geocode.

# Env

Env var requirement :

| name                  | description                   | default       |
|-----------------------|-------------------------------|---------------|
| GMAP_API_ENDPOINT     | google map api endpoint       |
| GMAP_API_KEY          | google map api key            |
| HOST                  | MS host                       | `0.0.0.0`
| PORT                  | MS port                       | `3010`
