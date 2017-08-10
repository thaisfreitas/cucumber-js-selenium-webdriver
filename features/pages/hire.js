var seleniumWebdriver = require('selenium-webdriver');

module.exports =  function (driver, username, userid, ssnNumber) {
  driver.findElement({ id: '#ICSearch'}).then(function(element) {
    return element.click();
  });
};
