import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPassPage from '../page-objects/pages/ForgottenPassPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPass = new ForgottenPassPage()

fixture `forgotten-password link test`
    .page`http://zero.webappsecurity.com/index.html`

test("User clicks on forgotten password link", async t => {
    
    navbar.click(navbar.signInButton)
    loginPage.click(loginPage.forgotLink)
    forgottenPass.placeEmailReset('test@test.com')
    //Assertions
    await t.expect(forgottenPass.messagePage.innerText).contains("Your password will be sent to the following email")
    await t.expect(forgottenPass.userEmailField.exists).notOk()
})