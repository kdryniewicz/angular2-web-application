import { browser, element, by } from 'protractor';

export class AssignmentS00160273Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
