import { AssignmentS00160273Page } from './app.po';

describe('assignment-s00160273 App', function() {
  let page: AssignmentS00160273Page;

  beforeEach(() => {
    page = new AssignmentS00160273Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
