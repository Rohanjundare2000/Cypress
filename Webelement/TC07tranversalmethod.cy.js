describe("transversal method",function(){
    it('TO get children Dom elements, use the cildern() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })
    it('TO get children Dom elements, use the previous() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#milk').prev().should('have.text','Tea')
    })
    it('TO get children Dom elements, use the next() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#milk').next().should('have.text','Espresso')
    })
    it('TO get children Dom elements, use the nextAll() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').nextAll().should('have.length',4)
        cy.get('#coffee').nextAll().should('have.length.greaterThan',2)
    })
    it('TO get children Dom elements, use the prevall() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#sugar').prevAll().should('have.length',4)
        cy.get('#sugar').prevAll().should('have.length.greaterThan',2)
    })
    it('TO get children Dom elements, use the sibling() command',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#sugar').siblings().should('have.length',4)
    })
    
})