

describe("RadioButton",function(){
    it("should select a option from Radio Button",function(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[value="option-1"]').click()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[value="option-2"]').click()
        cy.get('input[value="option-2"]').should('be.checked')
    })
    it("should select a option from Radio Button",function(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[value="green"]').click()
        cy.get('input[value="blue"]').should('not.be.checked')
    })
})