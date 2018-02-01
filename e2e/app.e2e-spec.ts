import { BenfordioPage } from './app.po';

describe('benfordio App', () => {
  let page: BenfordioPage;

  beforeEach(() => {
    page = new BenfordioPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
