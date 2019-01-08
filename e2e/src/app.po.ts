import { browser, by, element, WebDriver } from 'protractor';
import { createWriteStream } from 'fs';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  resizeTo(w, h) {
    browser.driver.manage().window().setSize(w, h);
  }

  getBreakpointText() {
    return element(by.css('app-root .displayArea')).getText();
  }
  
  writeSS(data, filename) {
    const stream = createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  takeSS(pname = 'ng2-mmbreakpoints') {
    browser.takeScreenshot().then(png => {
      const fname = `./dist/screenshots/${pname}_${Date.now()}.png`;
      this.writeSS(png, fname)
    });
  }
}
