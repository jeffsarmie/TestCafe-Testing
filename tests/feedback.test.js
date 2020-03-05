import { Selector } from 'testcafe'

fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test ("User can submit feedback via form", async t => {
    // Selectors
    const linkToFeedback = Selector('#feedback')
    const feedBackFormName = Selector('#name')
    const feedBackFormEmail = Selector('#email')
    const feedBackFormSubj = Selector('#subject')
    const feedBackFormComments = Selector('#comment')
    const feedBackFormSubmit = Selector('input').withAttribute('value', 'Send Message')
    const feedBackFormClear = Selector('input').withAttribute('value', 'Clear')
    const message = Selector('div').innerText
    
    //Actions
    await t.click(linkToFeedback)
    await t.typeText(feedBackFormName, 'NAME', { paste : true })
    await t.typeText(feedBackFormEmail, 'jeff.sarm@test.email.com')
    await t.typeText(feedBackFormSubj, 'subject goes here', { paste : true })
    await t.typeText(feedBackFormComments, 'This is the comment that I want to put in', { paste : true })
    await t.click(feedBackFormSubmit)

    //Assertions
    await t.expect(message).contains("Thank you for your comments")
})