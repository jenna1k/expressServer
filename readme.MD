## JasonWebToken workshop

![](https://i.imgur.com/59rQnqs.png)

### POSTMAN

- get token from `POST (http://localhost:9000/api/v1/login)`

- put token in header `POST (http://localhost:9000/api/v1/profiles)`
    - `{ key : Authorization, Value: 'bearer token'}`
