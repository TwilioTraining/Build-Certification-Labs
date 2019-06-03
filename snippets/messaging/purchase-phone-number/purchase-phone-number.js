const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

// Find and then purchase a phone number
client
  .availablePhoneNumbers('US')
  .local.list({
    areaCode: '510',
  })
  .then(data => {
    const number = data[0];
    return client.incomingPhoneNumbers.create({
      phoneNumber: number.phoneNumber,
    });
  })
  .then(purchasedNumber => console.log(purchasedNumber.sid))
  .done();
