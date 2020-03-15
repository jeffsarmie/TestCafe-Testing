import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
//import xPathToCss from 'xpath-to-css'

const navbar = new Navbar()

fixture `Search Box Test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can search information via Search box", async t =>{
    //Selectors
    const title = Selector ('h2')
    const linkText = Selector ('div').innerText

    //XPATH to CSS Examples
    // const xpath = `/html/body/div[1]/div[2]/div/div/div/div/h3`
    // const css = xPathToCss(xpath)
    // console.log(css)
    
    //Actions
    navbar.search('bank')

    //Assertions
    await t.expect(title.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(linkText).contains('Zero - Personal Banking')
})

    