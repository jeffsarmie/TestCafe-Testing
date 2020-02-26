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
    })
    .after(async t => {
        //Cleaning test data
        //Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('My first testcafe test', async t => {
    await t.setTestSpeed(1)
    await t.typeText('#developer-name', 'Jeff')
    await t.click('#submit-button')
    await t.expect(Selector('#article-header').innerText).contains('Jeff')
})