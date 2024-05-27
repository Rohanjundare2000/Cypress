describe('Locator elemets',function(){

    it('find a single element',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('exist')
    })

    it('find the multiple element',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[type="text"]').should('have.length',3)
        cy.get('input[type="submit"]').should('have.length.greaterThan',0)
    })

    it('find the element by class',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('')
    })
})