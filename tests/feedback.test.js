import { Selector } from 'testcafe'
import FeedBackPage from '../page-objects/pages/FeedbackPage'

const feedback = new FeedBackPage()

fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test ("User can submit feedback via form", async t => {
    // Selectors
    const linkToFeedback = Selector('#feedback')
    //Actions
    await t.click(linkToFeedback)
    feedback.typeName('NAME')
    feedback.typeEmail('email@test.com')
    feedback.typeSubject('This is my subject')
    feedback.typeComments('This is my comment')
    feedback.click(feedback.feedBackFormSubmit)
    //Assertions
    await t.expect(feedback.message.innerText).contains("Thank you for your comments")
})