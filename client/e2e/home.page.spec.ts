/// <reference path="./steps.d.ts" />

Feature('HomePage');

BeforeSuite((I) => {
  I.amOnPage('/login');
  I.fillField('input[type="email"]', 'johndoe@example.com');
  I.fillField('input[type="password"]', 'johnjohn');
  I.click('Login');
  I.dontSeeInCurrentUrl('/login');
})

Scenario('access to settings', (I) => {
  I.click('Settings');
  I.seeInCurrentUrl('settings');
});
