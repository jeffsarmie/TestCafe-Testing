import { Selector } from 'testcafe'

fixture `Getting Started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t => { 
        //Test goes here
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t => {
        //Runs before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    .after(async t => {
        //Cleaning test data
        //Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('My first testcafe test', async t => {
    const dev_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    await t.typeText(dev_name_input, 'Jeff')
    //await t.wait(3000)
    await t.click(submit_button)
    await t.expect(articleText).contains('Jeff')
})