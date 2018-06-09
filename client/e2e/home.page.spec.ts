/// <reference path="./steps.d.ts" />

Feature('HomePage');

const login = (I) => {
  I.amOnPage('/login');
  I.fillField('input[type="email"]', 'superadmin@example.com');
  I.fillField('input[type="password"]', 'superadmin');
  I.click('Login');
  I.dontSeeInCurrentUrl('/login');
}

Scenario('access to dashboard', (I) => {
  login(I);
  I.click('Dashboard');
  I.seeInCurrentUrl('/');
});
