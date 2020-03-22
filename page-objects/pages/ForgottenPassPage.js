import { Selector, t } from 'testcafe'

class ForgottenPassPage {
    constructor () {
        this.userEmailField = Selector("#user_email")
        this.sendPassButton = Selector(".btn-primary").withAttribute('value', 'Send Password')
        this.messagePage = Selector('div')
    }

    async placeEmailReset(email){
        await t
        .typeText(this.userEmailField, email, { 
            paste : true,
            replace : true 
        })
        .click(this.sendPassButton)
    }
}


export default ForgottenPassPage