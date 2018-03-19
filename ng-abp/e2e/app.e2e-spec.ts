import { WeChatTemplatePage } from './app.po';

describe('WeChat App', function() {
  let page: WeChatTemplatePage;

  beforeEach(() => {
    page = new WeChatTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
