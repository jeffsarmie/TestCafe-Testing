import { Selector } from 'testcafe'
import { login } from '../helper'

fixture `New Payee Test`
    .page `http://zero.webappsecurity.com/index.html`
    

test
.before(async t => {
    await login("username", "password")
})
("User can add new payee to the list", async t => {
    //Selectors
    const payBillTab = Selector('#pay_bills_tab')
    const addNewPayeeTab = Selector('a').withText('Add New Payee')
    const newPayeeName = Selector('#np_new_payee_name')
    const newPayeeAdd = Selector('#np_new_payee_address')
    const newPayeeAccount = Selector('#np_new_payee_account')
    const newPayeeDetails = Selector('#np_new_payee_details')
    const addNewPayBttn = Selector('#add_new_payee')
    const message = Selector('#alert_content').innerText //The new payee a was successfully created.
    
    //Actions
    await t.click(payBillTab)
    await t.click(addNewPayeeTab)
    await t.typeText(newPayeeName, "Tester", { paste : true })
    await t.typeText(newPayeeAdd, "123 Main St", { paste : true })
    await t.typeText(newPayeeAccount, "12345678z", { paste : true })
    await t.typeText(newPayeeDetails, "details", { paste : true })
    await t.click(addNewPayBttn)

    //Assertions
    await t.expect(message).contains('The new payee Tester was successfully created.')
})