describe('Seo metadata', () => {
    describe('Verify SEO Metadata', () => {
        it('should render SEO metadata on Index page', () => {
            cy.visit('/', { timeout: 10000 });

            // The Index page should have a page title
            cy.title().should('not.be.empty');

            // The Index page should also contain a meta description for SEO
            cy.get('head meta[name="description"]')
                .invoke('attr', 'content')
                .should('not.be.empty');
        });
    });
});
