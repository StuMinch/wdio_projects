describe(`Lamps Plus - Appium ${process.env.APPIUM_VERSION} `, () => {
  
    it('should load products page', async () => {
      await browser.url('https://www.lampsplus.com/products/77Y72');
      expect(browser).toHaveTitle('Calix 16" Wide Brushed Nickel Clear Glass Pendant Light - #77Y72 | Lamps Plus');
    });

    it('should find product and add to cart', async () => {
      await driver.pause(5000);
        const pdProdSku = await $('#pdProdSku');
        const pdAddToCart = await $('#pdAddToCart');
        pdAddToCart.click()
      });

      it('should find and tap on standard shipping', async () => {
        await driver.pause(5000);
        const productItems = await $('#productItems');
        productItems.click()
      });

      it('should find and tap on shipping options', async () => {
        await driver.pause(5000);
        const shippingOptions = await $('.jsChangeShippingOptions');
        shippingOptions.click()
      });

      it('should find and tap on and enter zip code', async () => {
        await driver.pause(5000);
        const shipZipField = await $('#shipZipField');
        shipZipField.setValue('85003');
        await driver.pause(5000);
        const applyZip = await $('.delivery-options__zipBtn');
        await driver.pause(5000);
        applyZip.click();
        await driver.pause(5000);
        const deliveryOption = await $('//*[@id="changeShippingOptionsOverlay"]/div/div/div[2]/div/div[2]/div/div/ul[2]/li/label')
        deliveryOption.click();
        await driver.pause(5000);
      });
  });