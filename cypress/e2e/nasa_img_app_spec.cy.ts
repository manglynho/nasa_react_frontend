describe('Nasa Image App', function() {
    it('renders first page', function() {
      //just in case timeout due to my vpn conection to cloudDB :-(
      this.timeout(60000)
      cy.visit('http://localhost:3000')
      cy.contains('Images from NASA')
    })

    it('renders content', function(){
      cy.get('.photoMasonry').should('have.length', 6)
    })

    it('trigger load more button', function(){
      cy.get('.loadMoreBtn').click()
      cy.get('.photoMasonry').should('have.length', 6)
    })
})