const firstName = ['John', 'Michael', 'David', 'James', 'William', 'Samuel', 'Robert', 'Charles', 'Daniel', 'George', 'Frank', 'Anthony', 'Mark', 'Steven', 'Andrew', 'Joshua', 'Kevin', 'Brian', 'George', 'Donald', 'Patrick', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Cave', 'Jared'];
const lastName = ['Lord', 'Lovingfoss', 'Smith', 'Johnson', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Taylor', 'Thomas', 'White', 'Moore', 'Jackson', 'Martin', 'Lee', 'Gonzalez', 'Hernandez', 'Johnson', 'Morris', 'Fogle'];
const emailProvider = ['gmail.com', 'hotmail.com', 'aol.com', 'yahoo.com', 'outlook.com', 'tutanota.com']
const streetNames = ['Main St', 'First St', 'Elm St', 'Oak St', 'Maple St', 'Cedar St', 'Pine St', 'Washington St', 'Lincoln St', 'Jefferson St'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// a function that generates a fake phone number
function generateFakePhoneNumber() {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

// a function that generates a fake american name
function generateFakeAmericanName() {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    return `${randomFirstName} ${randomLastName}`;
}

function generateFakeEmail() {
    const seperater = ['', '.', '_']
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    const randomEmailProvider = emailProvider[Math.floor(Math.random() * emailProvider.length)];
    const randomSeperater = seperater[Math.floor(Math.random() * seperater.length)];
    return `anon${randomSeperater}${randomFirstName}${randomSeperater}${randomLastName}@${randomEmailProvider}`.toLocaleLowerCase();
}

// a function that generates a fake american address
function generateFakeAmericanAddress() {
    // generate a random 3 or 4 digit number
    const place = Math.floor(Math.random() * 9000) + 1000;
    const randomStreetName = streetNames[Math.floor(Math.random() * streetNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const zipCode = Math.floor(Math.random() * 90000) + 10000;
    return `${place} ${randomStreetName}, ${randomCity}, ${randomState} ${zipCode}`;
}

// check lhun validity, return true if valid, false if invalid
function checkLuhn(value) {
      if (/[^0-9-\s]+/.test(value)) return false;
      var nCheck = 0, nDigit = 0, bEven = false;
      value = value.replace(/\D/g, "");
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
          nCheck += nDigit;
          bEven = !bEven;
      }
      return (nCheck % 10) == 0;
}


// a function that generates a fake credit card number with luhn validity
function generateFakeCreditCardNumber() {
    let creditCardNumber = '';
    let luhnValid = false
    while (luhnValid == false) {
        creditCardNumber = '';
        for (let i = 0; i < 16; i++) {
            creditCardNumber += Math.floor(Math.random() * 10);
        }
        luhnValid = checkLuhn(creditCardNumber);
    }
    return creditCardNumber;
}

// a function that generates a fake credit card expiration date
function generateFakeCreditCardExpirationDate() {
    const currentYear = new Date().getFullYear();
    const randomYear = currentYear + Math.floor(Math.random() * 5);
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    return `${randomMonth}/${randomYear}`;
}

// a function that generates a fake credit card CVV
function generateFakeCreditCardCVV() {
    let cvv = '';
    for (let i = 0; i < 3; i++) {
        cvv += Math.floor(Math.random() * 10);
    }
    return cvv;
}

// a funciton that generates a fake credit card type
function generateFakeCreditCardType() {
    const cardTypes = ['Visa', 'Mastercard', 'American Express', 'Discover'];
    const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    return randomCardType;
}

// a function that generates a fake birthday date

function generateFakeBirthday() {
    const currentYear = new Date().getFullYear();
    const randomYear = currentYear + Math.floor(Math.random() * 5);
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    return `${randomMonth}/${randomDay}/${randomYear}`;
}

// a function that generates a random fake username

function generateFakeUsername() {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastInitial = lastName[Math.floor(Math.random() * lastName.length)].charAt(0);
    return `Xx${randomFirstName}${randomLastInitial}xX`;
}

// a function that combines all the functions to generate a fake identity
function generateFullFakeIdentity() {
    const fakeName = generateFakeAmericanName();
    const fakeAddress = generateFakeAmericanAddress();
    const fakeCreditCardNumber = generateFakeCreditCardNumber();
    const fakeCreditCardExpirationDate = generateFakeCreditCardExpirationDate();
    const fakeCreditCardCVV = generateFakeCreditCardCVV();
    const fakeCreditCardType = generateFakeCreditCardType();
    const fakeEmail = generateFakeEmail();
    const fakeBirthday = generateFakeBirthday();
    const fakePhoneNumber = generateFakePhoneNumber();
    const fakeUsername = generateFakeUsername();

    return {
        name: fakeName,
        address: fakeAddress,
        creditCardNumber: fakeCreditCardNumber,
        creditCardExpirationDate: fakeCreditCardExpirationDate,
        creditCardCVV: fakeCreditCardCVV,
        creditCardType: fakeCreditCardType,
        email: fakeEmail,
        birthday: fakeBirthday, 
        phoneNumber: fakePhoneNumber,
        username: fakeUsername
    };
}
