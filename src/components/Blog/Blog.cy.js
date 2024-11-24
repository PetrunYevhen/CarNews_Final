import React from 'react';

import Blog from './Blog';

describe('Blog Component', () => {
    beforeEach(() => {
        cy.mount(<Blog />);
    });

    it('renders the main container', () => {
        cy.get('[data-testid="main-container"]').should('exist');
    });

    it('renders the top container with text', () => {
        cy.get('[data-testid="top-container"]').should('exist');
        cy.get('[data-testid="text-container"]').within(() => {
            cy.contains('Твоя подорож').should('exist');
            cy.contains('CarNews - це платформа').should('exist');
        });
    });

    it('renders posts section with posts', () => {
        cy.get('[data-testid="posts"]').should('exist');
        cy.get('[data-testid="post-container"]').should('exist');

        cy.get('[data-testid="post-info"]').should('have.length.greaterThan', 0);

        cy.get('[data-testid="post-info"]').each(($post) => {
            cy.wrap($post).within(() => {
                cy.log($post.text());
            });
        });
    });
});
