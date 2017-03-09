import { UploadDemo2Page } from './app.po';

describe('upload-demo2 App', function() {
  let page: UploadDemo2Page;

  beforeEach(() => {
    page = new UploadDemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
