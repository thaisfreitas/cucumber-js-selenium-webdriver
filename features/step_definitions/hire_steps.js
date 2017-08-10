var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var expect = require('chai').expect;
var hireEmployee = require('../pages/hire.js');

defineSupportCode(function({Given, When, Then}) {

  var userid;
  var ssn;

  Given('I am logged into PSHR', function () {
    const user = 'senha';
    const password = 'password';

    this.driver.get('https://[DEVHOST]/psp/hrdev851/?cmd=login');
    this.driver.findElement({ name: 'userid' }).sendKeys(user);
    this.driver.findElement({ name: 'pwd' }).sendKeys(password);
    return this.driver.findElement({name: 'Submit'}).then(function(element) {
      return element.click();
    });
  });

  Given('A new set of user credentials', function () {
    var userid = Date.now().toString().substring(0,8);
    var ssn = Date.now().toString().substring(0,10);

  });

  When('I hire a new employee', function () {
    this.driver.get('https://[DEVHOST]/psc/hrdev851/EMPLOYEE/HRMS/c/ADMINISTER_WORKFORCE_(GBL).JOB_DATA_HIRE.GBL');
    hireEmployee(this.driver, userid, userid, ssn);
  });

  Then('The user can be found in PSHR', function () {
     return '';
   });
  Then('a corresponding {string} event is detected', function (string) {
    return '';
  });

});
