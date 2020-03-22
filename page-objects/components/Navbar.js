import { Selector, t } from 'testcafe'

class Navbar{
    constructor(){
        this.brandLink = Selector ('.brand')
        this.searchBox = Selector ('#searchTerm')
        this.signInButton = Selector('#signin_button')
        this.userIcon = Selector('.icon-user')
        this.logOutLink = Selector('#logout_link')

    }

    async search(text){
        await t
            .typeText(this.searchBox, text, { paste : true, replace : true })
            .pressKey('enter')
    }

    async click(element){
        await t
            .click(element)
    }
}

export default Navbar