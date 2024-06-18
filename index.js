const AsyncApiValidator = require('asyncapi-validator')


AsyncApiValidator
    .fromSource('./api.yaml', {msgIdentifier: 'messageId'})
    .then(validator => validator.validate('CreateUserEvent', {
        userId: '123456789',
        userEmail: 'user@mail.com',
        firstName: 'John',
        lastName: 'Doe',
        notDefinedField: 'This field in not defined in the schema but is required'
    }, 'user-events', 'publish'))
    .then(result => {
        console.log("Validation status: " + (result) ? "success" : "failure")
    })