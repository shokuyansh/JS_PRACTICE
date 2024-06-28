const accountID=1234
// accountID=2 not allowed , as it is const
var accountName="ansh"
let accountEmail="ansh@g.com"
accountCity="Chennai"

// try not to use var as it has issue in functional and block scope


let accountState    // will be displayed a undefined since no value assigned to it

console.table([accountID,accountEmail,accountName,accountCity,accountState])
