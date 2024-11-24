import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

describe('Footer Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>,
        );
    });

    it('should render the footer container', () => {
        cy.get('[data-testid="footer-container"]').should('exist');
    });

    it('should render the first floor of the footer', () => {
        cy.get('[data-testid="first-floor"]').should('exist');
    });

    it('should render the footer navigation links correctly', () => {
        cy.get('[data-testid="footer-nav"]').should('exist');
        cy.get('[data-testid="nav-list"]').should('exist');

        cy.get('[data-testid="home-nav-link"]').should('exist');
        cy.get('[data-testid="blog-nav-link"]').should('exist');
        cy.get('[data-testid="about-nav-link"]').should('exist');
    });

    it('should navigate to the home page when home link is clicked', () => {
        cy.get('[data-testid="home-nav-link"]').click();
        cy.url().should('include', '/');
    });

    it('should render the second floor of the footer with subscription form', () => {
        cy.get('[data-testid="second-floor"]').should('exist');
        cy.get('[data-testid="subscription-title"]').should('contain.text', 'Підпишіться на наші новини');
        cy.get('[data-testid="email-input"]').should('exist');
        cy.get('[data-testid="subscribe-button"]').should('exist');
    });

    it('should allow subscription', () => {
        cy.get('[data-testid="email-input"]').type('test@example.com');
        cy.get('[data-testid="subscribe-button"]').click();
        cy.get('[data-testid="subscribe-icon"]').should('exist'); // Ensure the icon appears upon successful click
    });

    it('should render social media links correctly', () => {
        cy.get('[data-testid="social-links"]').should('exist');
        cy.get('[data-testid="social-links-list"]').should('exist');

        cy.get('[data-testid="facebook-link"]').should('have.attr', 'href').and('include', 'facebook');
        cy.get('[data-testid="twitter-link"]').should('have.attr', 'href').and('include', 'x.com');
        cy.get('[data-testid="instagram-link"]').should('have.attr', 'href').and('include', 'instagram');
    });
});
