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

    beforeEach(() => {
        page = new AppPage();
    });

    // wejdz w model >> batteryType i name field jest capacity
    it('see more should return correct model', async () => {
        await page.navigateToLocation('login');

        await element(by.id('email')).sendKeys(login);
        await element(by.id('password')).sendKeys(password);
        await element(by.cssContainingText('button', 'Zaloguj')).click();

        await page.navigateToLocation('robotpanel-new/refreshtest');

        const EC = protractor.ExpectedConditions;
        const selector = by.cssContainingText('h5', ' Robot ');
        browser.wait(EC.presenceOf(element(selector)), 5 * 1000, 'Element taking too long to appear in the DOM');
        await element(selector).click();

        // element(by.cssContainingText('th', 'robotIp')).getText().then((text) => {
        //     console.log(text);
        // });

        // expect(
        //     element.all(by.cssContainingText('th', 'robotIp')).count()
        // ).toBeGreaterThanOrEqual(1);

    });

    // cofnij się do moduelu, jest field o nazwie maxVelocity
});
