import { Selector } from 'testcafe'

fixture `login test`
    .page `http://zero.webappsecurity.com/`

test("User cannot login with invalid credentials", async t =>{
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, "Invalid UserName", { paste: true })
    await t.typeText(passwordInput, "Invalid password", { paste: true })
    
    const signInSubmit = Selector('.btn-primary')
    await t.click(signInSubmit)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
})

test("User can login with valid credentials", async t =>{
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, "username", { paste: true })
    await t.typeText(passwordInput, "password", { paste: true })
    
    const signInSubmit = Selector('.btn-primary')
    await t.click(signInSubmit)

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logoutButton = Selector('#logout_link')
    await t.click(logoutButton)

    await t.expect(logoutButton.exists).notOk()
    await t.expect(signInButton.exists).ok()
})