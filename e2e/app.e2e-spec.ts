import { Angularjs2CrudPage } from './app.po';

describe('angularjs2-crud App', () => {
  let page: Angularjs2CrudPage;

  beforeEach(() => {
    page = new Angularjs2CrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
