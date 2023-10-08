const {test, expect } = require('@playwright/test');

test('IngTestRegistration', async ({page})=>{

    page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm');

     
    await page.locator("//a[contains(text(),'Register')]").click(); 
    await page.locator('[id="customer.firstName"]').fill('milica');
    await page.locator('[id="customer.lastName"]').fill('nejic');
    await page.locator('[id="customer.address.street"]').fill('breskvin cvet 7');
    await page.locator('[id="customer.address.city"]').fill('zemun');
    await page.locator('[id="customer.address.state"]').fill('serbia');
    await page.locator('[id="customer.address.zipCode"]').fill('11080');
    await page.locator('[id="customer.ssn"]').fill('5526');
    await page.locator('[id="customer.phoneNumber"]').fill('0692416622');
    await page.locator('[id="customer.username"]').fill('Milica11');
    await page.locator('[id="customer.password"]').fill('Inspiron15');
    await page.locator('[id="repeatedPassword"]').fill('Inspiron15');
    await page.getByRole('button', { name: 'Register' }).click();

    const logoutLink= await page.locator ("//a[contains(text(),'Log Out')]");
    await expect(logoutLink).toBeVisible();

   /*Or like this await expect (await page.locator("//a[contains(text(),'Log Out')]").isVisible()).toBeTruthy();*/
    
    await page.waitForTimeout(5000);
      
})

