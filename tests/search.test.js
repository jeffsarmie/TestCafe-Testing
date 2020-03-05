import { Selector } from 'testcafe'

fixture `Search Box Test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can search information via Search box", async t =>{
    //Selectors
    const searchBox = Selector ("#searchTerm")
    const title = Selector ('h2')
    const linkText = Selector ('div').innerText
    
    //Actions
    await t.typeText(searchBox, 'bank', { paste : true })
    await t.pressKey("enter")

    //Assertions
    await t.expect(title.exists).ok()
    await t.expect(searchBox.exists).ok()
    await t.expect(linkText).contains('Zero - Personal Banking')
})

    