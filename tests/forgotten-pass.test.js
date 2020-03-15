import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

fixture `forgotten-password link test`
    .page`http://zero.webappsecurity.com/index.html`

test("User clicks on forgotten password link", async t => {
    //Selectors
    const forgotLink = Selector("a").withText("Forgot your password ?")
    const userEmailField = Selector("#user_email")
    const sendPassButton = Selector(".btn-primary").withAttribute('value', 'Send Password')
    const messagePage = Selector('div')
    //Actions
    await t.click(navbar.signInButton)
    await t.click(forgotLink)
    await t.typeText(userEmailField, "test@test.com", { paste : true })
    await t.click(sendPassButton)
    //Assertions
    await t.expect(messagePage.innerText).contains("Your password will be sent to the following email")
    await t.expect(userEmailField.exists).notOk()
})