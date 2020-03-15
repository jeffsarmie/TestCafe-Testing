import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/searchresultspage'
//import xPathToCss from 'xpath-to-css'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture `Search Box Test`
    .page`http://zero.webappsecurity.com/index.html`

test("User can search information via Search box", async t =>{
    //XPATH to CSS Examples
    // const xpath = `/html/body/div[1]/div[2]/div/div/div/div/h3`
    // const css = xPathToCss(xpath)
    // console.log(css)
    navbar.search('bank')
    await t.expect(searchResultsPage.resultsTitle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t
        .expect(searchResultsPage.linkText.innerText)
        .contains('Zero - Personal Banking')
})

    