import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';

describe('Main Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>,
        );
    });

    it('should render the main container', () => {
        cy.get('[data-testid="main-container"]').should('exist');
    });

    it('should render the main heading with the correct text', () => {
        cy.get('[data-testid="main-heading"]').should('contain', 'Твоя подорож');
        cy.get('[data-testid="main-heading"]').should('contain', 'Твій автомобіль');
        cy.get('[data-testid="main-heading"]').should('contain', 'Твій шлях');
    });

    it('should render the subheading with the correct text', () => {
        cy.get('[data-testid="subheading"]').should('contain', 'CarNews - це платформа для справжніх автомобільних');
    });

    it('should display the main image correctly', () => {
        cy.get('[data-testid="main-image"]').should('be.visible').and('have.attr', 'src');
    });

    it('should render the latest news section with the correct title and content', () => {
        cy.get('[data-testid="latest-news-heading"]').should('contain', 'Останні новини');
        cy.get('[data-testid="news-title"]').should('contain', 'Презентовано новий сімейний кросовер');
        cy.get('[data-testid="news-description"]').should(
            'contain',
            'У Німеччині презентували новий Volkswagen Tayron',
        );
    });

    it('should render the popular blogs section with correct content', () => {
        cy.get('[data-testid="popular-blogs-heading"]').should('contain', 'Популярні блоги');
        cy.get('[data-testid="blog1-title"]').should('contain', 'MINI в США представила кабріолте Cooper');
    });

    it('should render the categories section with correct titles', () => {
        cy.get('[data-testid="categories-heading"]').should('contain', 'Всі категорії');
        cy.get('[data-testid="car-reviews-title"]').should('contain', 'Огляди авто');
        cy.get('[data-testid="maintenance-title"]').should('contain', 'Обслуговування');
        cy.get('[data-testid="modifications-title"]').should('contain', 'Модифікація автомобіля');
    });

    it('should render the feedback section with the correct text', () => {
        cy.get('[data-testid="feedback-section"]').should('exist');
        cy.get('[data-testid="feedback-heading"]').should('contain', 'ВІДГУКИ ПРО САЙТ');
    });

    it('should allow navigating through feedback with arrow buttons', () => {
        cy.get('[data-testid="feedback-button1"]').click(); // Left arrow
        cy.get('[data-testid="feedback-button2"]').click(); // Right arrow
    });
});
