import { AppPage } from './app.po';
import { browser } from 'protractor';

/* size reference
  xs: '(max-width: 767px)',
  sm: '(min-width: 768px) and (max-width: 991px)',
  md: '(min-width: 992px) and (max-width: 1199px)',
  lg: '(min-width: 1200px)',
*/

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should reflect XS at XS min/max', () => {
    page.navigateTo();
    page.resizeTo(400,700);
    expect(page.getBreakpointText()).toEqual('XS');
    page.resizeTo(767,700);
    expect(page.getBreakpointText()).toEqual('XS');
  });

  it('should reflect SM at SM min/max', () => {
    page.navigateTo();
    page.resizeTo(768,700);
    expect(page.getBreakpointText()).toEqual('SM');
    page.resizeTo(991,700);
    expect(page.getBreakpointText()).toEqual('SM');

  });

  it('should reflect MD at MD min/max', () => {
    page.navigateTo();
    page.resizeTo(992,700);
    expect(page.getBreakpointText()).toEqual('MD');
    page.resizeTo(1199,700);
    expect(page.getBreakpointText()).toEqual('MD');
  });

  it('should reflect LG at LG min/max', () => {
    page.navigateTo();
    page.resizeTo(1200,700);
    expect(page.getBreakpointText()).toEqual('LG');
    page.resizeTo(1600,700);
    expect(page.getBreakpointText()).toEqual('LG');
  });

  /* optional test to keep screenshot record of all breakpoints
  it('should record all breakpoints', () => {
    page.navigateTo();
    page.resizeTo(400,700);
    page.takeSS();
    page.resizeTo(767,700);
    page.takeSS();
    page.resizeTo(768,700);
    page.takeSS();
    page.resizeTo(991,700);
    page.takeSS();
    page.resizeTo(992,700);
    page.takeSS();
    page.resizeTo(1199,700);
    page.takeSS();
    page.resizeTo(1200,700);
    page.takeSS();
    page.resizeTo(1600,700);
    page.takeSS();
  });
  */
});
