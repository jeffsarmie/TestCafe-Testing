import { Selector, t } from 'testcafe'

class FeedbackPage {
    constructor() {
        this.faqLink = Selector('#faq-link')
        this.feedBackFormName = Selector('#name')
        this.feedBackFormEmail = Selector('#email')
        this.feedBackFormSubj = Selector('#subject')
        this.feedBackFormComments = Selector('#comment')
        this.feedBackFormSubmit = Selector('input').withAttribute('value', 'Send Message')
        this.feedBackFormClear = Selector('input').withAttribute('value', 'Clear')
        this.message = Selector('div')
    }

    async typeName(name){
        await t
            .typeText(this.feedBackFormName, name, { 
                paste : true,
                replace : true
        })
    }

    async typeEmail(email){
        await t
            .typeText(this.feedBackFormEmail, email, {
                paste : true,
                replace : true
        })
    }

    async typeSubject(subject){
        await t
            .typeText(this.feedBackFormSubj, subject, {
                paste : true,
                replace : true
        })
    }

    async typeComments(comments){
        await t
            .typeText(this.feedBackFormComments, comments, {
                paste : true,
                replace : true
        })
    }

    async click(element){
        await t
            .click(element)
    }
}

export default FeedbackPage