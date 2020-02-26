import { Selector } from 'testcafe'

fixture `Getting Started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example`

test('My first testcafe test', async t => {
    await t.typeText('#developer-name', 'Jeff')
    await t.click('#submit-button')
})