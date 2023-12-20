
describe('working with elements',function(){
    it('visit the webpage',function(){
        // Arrengement 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Action
        cy.get('input[name="first_name"]').type("Rohan")
        cy.get('input[name="last_name"]').type("Jundare")
        cy.get('input[name="email"]').type("rohanjundare123@gmail.com")
        cy.get('textarea[name="message"]').type("I am Rohan")
        cy.get('input[type="submit"]').click()
       // cy.get('#contact_form').submit()
       
       //cy.get('input[name="first_name"]').clear()
      
     //  assertion
     // <h1>Thank You for your Message!</h1>
     cy.get('h1').should('be.visible')
     // should: used to have that text or not
    })
})