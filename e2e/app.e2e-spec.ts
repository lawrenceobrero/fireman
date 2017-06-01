import { FARPage } from './app.po';

describe('far App', () => {
  let page: FARPage;

  beforeEach(() => {
    page = new FARPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
