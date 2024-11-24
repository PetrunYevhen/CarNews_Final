import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Register from './Register';

describe('Register Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
        );
    });

    it('should render the register form container', () => {
        cy.get('[data-testid="register-container"]').should('exist');
    });

    it('should render the email input field', () => {
        cy.get('[data-testid="email-input"]').should('exist');
    });

    it('should render the password input field', () => {
        cy.get('[data-testid="password-input"]').should('exist');
    });

    it('should render the submit register button', () => {
        cy.get('[data-testid="register-button"]').should('exist');
    });

    it('should display an error message when registration fails', () => {
        cy.get('[data-testid="email-input"]').type('invalidemail@example.com');
        cy.get('[data-testid="password-input"]').type('wrongpassword');
        cy.get('[data-testid="register-button"]').click();

        // Simulate registration failure
        cy.get('[data-testid="error-message"]').should('contain', 'Не вдалося зареєструватися. Спробуйте ще раз.');
    });

    it('should render the forgot password text correctly', () => {
        cy.get('[data-testid="forgot-password-text"]').should('contain', 'Забули пароль?');
    });
});
