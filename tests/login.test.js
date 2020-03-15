import { Selector } from 'testcafe'
import { login } from '../helper'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

fixture `login test`
    .page `http://zero.webappsecurity.com/`

test("User cannot login with invalid credentials", async t =>{
    //Selectors
    const errorMessage = Selector('.alert-error').innerText
    
    //Actions
    await login("invaliduser", "invalidpass")

    //Assertions
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
})

test("User can login with valid credentials", async t =>{
    
    const loginForm = Selector('#login_form')
    await login("username", "password")

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logoutButton = Selector('#logout_link')
    await t.click(logoutButton)

    await t.expect(logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()
})