import { EarthClubPage } from './app.po';

describe('earth-club App', () => {
  let page: EarthClubPage;

  beforeEach(() => {
    page = new EarthClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
