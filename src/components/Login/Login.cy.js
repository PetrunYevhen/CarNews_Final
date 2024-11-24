import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Login from './Login';

describe('Login Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
        );
    });

    it('should render the login form container', () => {
        cy.get('[data-testid="login-container"]').should('exist');
    });

    it('should render the email input field', () => {
        cy.get('[data-testid="email-input"]').should('exist');
    });

    it('should render the password input field', () => {
        cy.get('[data-testid="password-input"]').should('exist');
    });

    it('should render the login button', () => {
        cy.get('[data-testid="login-button"]').should('exist');
    });

    it('should show an error message when login fails', () => {
        cy.get('[data-testid="email-input"]').type('invalidemail@example.com');
        cy.get('[data-testid="password-input"]').type('wrongpassword');
        cy.get('[data-testid="login-button"]').click();

        // Simulate the error response
        cy.get('[data-testid="error-message"]').should('contain', 'Sorry, could not find your account');
    });

    it('should show an error message for empty email and password', () => {
        cy.get('[data-testid="login-button"]').click();
        cy.get('[data-testid="error-message"]').should('contain', 'Sorry, could not find your account');
    });

    it('should render the forgot password text correctly', () => {
        cy.get('[data-testid="forgot-password-text"]').should('contain', 'Забули пароль?');
    });
});
