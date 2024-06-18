### async-validator

This repo was created to test / experiment a bit with the https://www.npmjs.com/package/asyncapi-validator library.

Specifically we have noticed that in certain situations schema inconsistencies are not being reported.

As per the test in this repo, we can see that the asyncapi-validator library
does not report errors when:

- the payload has fields that are not defined in the schema (firstName, lastName)
- a field is not defined in the object schema but is marked as required (notDefinedField)

### How to run

```shell
$ mise install
$ yarn install
$ node index.js
```
