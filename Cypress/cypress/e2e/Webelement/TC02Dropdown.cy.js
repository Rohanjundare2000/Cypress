describe('Dropdown',function(){
    it("should select a option from drop down", function(){
           cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
           cy.get("#dropdowm-menu-1").select('Python')
           cy.get('#dropdowm-menu-1').should('have.value','python')
           cy.get('#dropdowm-menu-2').select('TestNG')
           cy.get('#dropdowm-menu-2').should('have.value','testng')
    })
})