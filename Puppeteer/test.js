const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page1 = await browser.newPage();
    try {
       await page1.goto('https://8081-fcebdccccd305386860eedbbebabccone.premiumproject.examly.io/'); // 
        await page1.setViewport({
            width: 1200,
            height: 1200,
          });
      await page1.waitForSelector('h1', { timeout: 2000 });
      const h1Text = await page1.$eval('h1', (h1Element) => {
        return h1Element.textContent.trim();
      });
    
      const expectedH1Text = 'IamNEO.ai'; // Expected text for <h1>
      if (h1Text === expectedH1Text) {
        console.log('TESTCASE:testcase1:success');
      } else {
        console.log('TESTCASE:testcase1:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase1:failure');
    } finally {
      await page1.close();
    }
    
    
    const page2 = await browser.newPage();
    try {
      await page2.goto('https://8081-fcebdccccd305386860eedbbebabccone.premiumproject.examly.io/');
      await page2.setViewport({
        width: 1200,
        height: 1200,
      });
      await page2.waitForSelector('p', { timeout: 2000 });
      const pText = await page2.$eval('p', (pElement) => {
        return pElement.textContent.trim();
      });
    
      const expectedPText = 'Welcome to the School of IamNEO.ai'; // Expected text for <p>
      if (pText === expectedPText) {
        console.log('TESTCASE:testcase2:success');
      } else {
        console.log('TESTCASE:testcase2:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase2:failure');
    } finally {
      await page2.close();
    }
    
    
    const page3 = await browser.newPage();
    try {
      await page3.goto('https://8081-fcebdccccd305386860eedbbebabccone.premiumproject.examly.io/');
      await page3.setViewport({
        width: 1200,
        height: 1200,
      });
      await page3.waitForSelector('h2', { timeout: 2000 });
      const h2Text = await page3.$eval('h2', (h2Element) => {
        return h2Element.textContent.trim();
      });
    
      const expectedH2Text = 'NEO Stark'; // Expected text for <h2>
      if (h2Text === expectedH2Text) {
        console.log('TESTCASE:testcase3:success');
      } else {
        console.log('TESTCASE:testcase3:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase3:failure');
    } finally {
      await page3.close();
    }
    
    
    const page4 = await browser.newPage();
    try {
      await page4.goto('https://8081-fcebdccccd305386860eedbbebabccone.premiumproject.examly.io/');
      await page4.setViewport({
        width: 1200,
        height: 1200,
      });
      await page4.waitForSelector('p', { timeout: 2000 });
      const pText = await page4.$$eval('p', (pElements) => {
        return pElements[1].textContent.trim();
      });
      const expectedPText = 'Inspired from the IronMan Character'; // Expected text for <p>
      if (pText === expectedPText) {
        console.log('TESTCASE:testcase4:success');
      } else {
        console.log('TESTCASE:testcase4:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase4:failure');
    } finally {
      await page4.close();
    }
    
})();