import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );
    });

    it('should render the header container', () => {
        cy.get('[data-testid="header-container"]').should('exist');
    });

    it('should render the logo correctly', () => {
        cy.get('[data-testid="car-logo"]').should('exist');
        cy.get('[data-testid="logo-image"]').should('exist');
        cy.get('[data-testid="home-link"] h1').contains('CarNews');
    });

    it('should render the navigation links correctly', () => {
        cy.get('[data-testid="nav-list"]').should('exist');

        cy.get('[data-testid="home-page-link"]').should('exist');
        cy.get('[data-testid="blog-link"]').should('exist');
        cy.get('[data-testid="about-us-link"]').should('exist');
        cy.get('[data-testid="register-link"]').should('exist');
    });

    it('should navigate to the home page when "Головна сторінка" link is clicked', () => {
        cy.get('[data-testid="home-page-link"]').click();
        cy.url().should('include', '/');
    });

    it('should navigate to the about us page when "Про нас" link is clicked', () => {
        cy.get('[data-testid="about-us-link"]').click();
        cy.url().should('include', '/');
    });
});
