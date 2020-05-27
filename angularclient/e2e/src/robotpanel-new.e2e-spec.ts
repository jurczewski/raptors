import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {HttpClient} from "@angular/common/http";


xdescribe('robot status', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('check robot status table contents', () => {
        page.navigateToLocation('robotpanel-new/refreshtest');

        expect(
            element.all(by.cssContainingText('h3', 'Status robota')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('button', 'refresh')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('th', 'Online')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('th', 'IP')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('th', 'Pozycja')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('th', 'Orientacja')).count()
        ).toEqual(1);

        expect(
            element.all(by.cssContainingText('th', 'Bateria')).count()
        ).toEqual(1);
    });

    it('should refresh robot status table', () => {
        page.navigateToLocation('robotpanel-new/refreshtest');

        element(by.cssContainingText('button', 'refresh')).click();
    });
});

describe('breadcrumbs', () => {
    let page: AppPage;
    const login = "dispatchTest";
    const password = "gBrZzVbCbMsr";

    beforeAll(async () => {
      page = new AppPage();
      const script = "sessionStorage.setItem('token', btoa('" + login + ":" + password + "'))";
      await page.navigateToLocation('robotpanel-new/refreshtest');
      await browser.executeScript(script);
      await page.navigateToLocation('robotpanel-new/refreshtest');
    });

    // wejdz w model >> batteryType i name field jest capacity
    it('see more should return correct model', async () => {
        // await page.navigateToLocation('login');
        //
        // await element(by.id('email')).sendKeys(login);
        // await element(by.id('password')).sendKeys(password);
        // await element(by.cssContainingText('button', 'Zaloguj')).click();
        //
        // browser.wait(() => {
        //   browser.executeScript("return sessionStorage.getItem('token')").then(res => {
        //     return res !== null;
        //   });
        // }, 20 * 1000, "chuj kurwa zesrało się");

        await page.navigateToLocation('robotpanel-new/refreshtest');

        expect(
            element.all(by.cssContainingText('th', 'robotIp')).count()
        ).toBeGreaterThanOrEqual(1);

    });

    // cofnij się do moduelu, jest field o nazwie maxVelocity
});
