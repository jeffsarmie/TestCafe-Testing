import { Selector } from 'testcafe'
//import { login } from '../helper'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()
const loginPage = new LoginPage()

fixture `login test`
    .page `http://zero.webappsecurity.com/`

test("User cannot login with invalid credentials", async t =>{
    
    navbar.click(navbar.signInButton)
    loginPage.loginToApp("invalidUsername", "invalidPassword")

    await t
        .expect(loginPage.errorMessage.innerText)
        .contains('Login and/or password are wrong.')
})

test("User can login with valid credentials", async t =>{

    navbar.click(navbar.signInButton)
    loginPage.loginToApp('username', 'password')

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginPage.loginForm.exists).notOk()
    await t.click(navbar.userIcon)
    await t.click(navbar.logOutLink)
    await t.expect(navbar.logOutLink.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()
})