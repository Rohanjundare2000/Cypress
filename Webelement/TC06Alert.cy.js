describe('verfiy the alert',function(){
    it('verify the simple alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:js',function(){
            expect(str).to.eq('I am a JS Alert')
            return ture
        })
        cy.get('button').contains('Click for JS Alert').click()
        cy.get("#result").should("have.text",'You successfully clicked an alert')
    })
    it('verify the confirm  alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:js Confirm',function(){
            expect(str).to.eq('I am a JS Confirm')
            return ture
        })
        cy.get('button').contains('Click for JS Confirm').click()
        cy.get("#result").should("have.text",'You clicked: Ok')
    })

})