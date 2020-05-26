import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});

describe('robot status', function () {
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
});
