import { MecAppPage } from './app.po';

describe('mec-app App', function() {
  let page: MecAppPage;

  beforeEach(() => {
    page = new MecAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
