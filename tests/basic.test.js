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

    // Click
    await t.click('selector', { options })
    // Double Click
    await t.doubleClick('selector', { options })
    // Right Click
    await t.rightClick('selector', { options })
    // Drag
    await t.drag('selector', 200, 0, { options })
    // Hover
    await t.hover('selector', { options })
    // Select text
    await t.selectText('selector')
    // Type text
    await t.typeText('selector')
    // Press key on the keyboard
    await t.pressKey('key')
    // Navigate to URL
    await t.navigateTo('url')
    // Take Screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    // Resize Window
    await t.resizeWindow(800, 600)

    // Deep equal
    await t.expect('foo').eql('foo', 'message', options)
    // Not Deep equal
    await t.expect('foo').notEql('bar')
    // OK
    await t.expect(true).ok()
    // Not OK
    await t.expect(true).notOk()
    // Contains
    await t.expect('foo').contains('oo')
    // Not Contains
    await t.expect('foo').notContains('hey')
    // Greater than or Less than
    await t.expect(10).gt(5)
    await t.expect(5).gte(5)
    await t.expect(5).lt(10)
    await t.expect(5).lte(5)
    // Within
    await t.expect(10).within(1, 100)
    // Not Within
    await t.expect(10).notWithin(11, 20)
})