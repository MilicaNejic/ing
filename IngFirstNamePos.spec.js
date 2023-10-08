const {test, expect } = require('@playwright/test');

test('IngTestFirstNamePositive', async ({page})=>{

    
    page.goto('https://parabank.parasoft.com/parabank/index.htm');
     
    await page.locator("//a[contains(text(),'Register')]").click(); 

    await page.locator('[id="customer.firstName"]').fill('Milica');
   
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    
    const locator = page.getByRole('button',{name: 'Register'});
    await expect(locator).not.toBeHidden();

    await page.waitForTimeout(3000);

      
})
