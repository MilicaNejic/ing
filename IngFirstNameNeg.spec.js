const {test, expect } = require('@playwright/test');

test('IngTestFirstNameNegative', async ({page})=>{

    page.goto('https://parabank.parasoft.com/parabank/index.htm');
     
    await page.locator("//a[contains(text(),'Register')]").click(); 

    await page.locator('[id="customer.firstName"]').fill('北京位於華北平原的西北边缘，背靠燕山，有永定河流经老城西南，毗邻天津市、河北省，是一座有三千余年建城历史、八百六十余年建都史的历史文化名城，历史上有金、元、明、清、中华民国（北洋政府时期）等五个朝代在此定都，以及数个政权建政于此，荟萃了自元明清以来的中华文化，拥有众多历史名胜古迹和人文景观。《不列颠百科全书》将北京形容为全球最伟大的城市之一，而且断言，“这座城市是中国历史上最重要的组成部分。在中国过去的八个世纪里，不论历史是否悠久，几乎北京所有主要建筑都拥有着不可磨灭的民族和历史意义”。北京古迹众多，著名的有故宫、天坛、颐和园、圆明园、北海公园等。');
   
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');

    const error = await page.locator('//h1[contains(text(),"413")]').textContent()
    await expect (await page.getByText(error)).toBeVisible();


    await page.waitForTimeout(3000);

      
})

