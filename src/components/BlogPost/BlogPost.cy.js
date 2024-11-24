import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import BlogPost from './BlogPost';

describe('BlogPost Component', () => {
    beforeEach(() => {
        cy.mount(
            <MemoryRouter>
                <BlogPost />
            </MemoryRouter>,
        );
    });

    it('should render the blog post container', () => {
        cy.get('[data-testid="blog-post-container"]').should('exist');
    });

    it('should render the post author and date correctly', () => {
        cy.get('[data-testid="post-author"]').should('exist').and('contain.text', 'InfoCar');
        cy.get('[data-testid="post-date"]').should('exist').and('contain.text', 'Жовтень 11, 2024 • 3 min Read');
    });

    it('should render the post content', () => {
        cy.get('[data-testid="post-content"]')
            .should('exist')
            .and('contain.text', 'У Німеччині презентували новий Volkswagen Tayron другого покоління');
    });

    it('should render the category section with category cards', () => {
        cy.get('[data-testid="category-container"]').should('exist');
        cy.get('[data-testid="categories-title"]').should('contain.text', 'Всі категорії');

        cy.get('[data-testid="category-card"]').should('have.length', 4);
    });
});
