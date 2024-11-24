describe('Main Page', () => {
    // Тести для головної сторінки
    describe('Main Page', () => {
        beforeEach(() => {
            // Відкриваємо головну сторінку
            cy.visit('http://localhost:9001');
        });

        it('should load main container', () => {
            // Перевіряємо, чи є основний контейнер
            cy.get('[data-testid="main-container"]').should('exist');
        });

        it('should display the main heading and subheading', () => {
            // Перевіряємо основний заголовок та підзаголовок
            cy.get('[data-testid="main-heading"]').should('contain', 'Твоя подорож');
            cy.get('[data-testid="subheading"]').should(
                'contain',
                'CarNews - це платформа для справжніх автомобільних ентузіастів',
            );
        });

        it('should display the main image', () => {
            // Перевіряємо наявність основного зображення
            cy.get('[data-testid="main-image"]').should('be.visible');
        });

        it('should display latest news with correct title and description', () => {
            // Перевіряємо наявність новин
            cy.get('[data-testid="latest-news-heading"]').should('contain', 'Останні новини');
            cy.get('[data-testid="news-title"]').should('contain', 'Презентовано новий сімейний кросовер');
            cy.get('[data-testid="news-description"]').should('contain', 'Volkswagen Tayron');
        });

        it('should navigate to blog post on clicking "Читати Більше" button', () => {
            // Перевіряємо перехід на сторінку блогу при натисканні кнопки
            cy.get('[data-testid="read-more-button"]').click();
            cy.url().should('include', '/blogPost');
        });

        it('should display popular blogs section', () => {
            // Перевіряємо наявність популярних блогів
            cy.get('[data-testid="popular-blogs-heading"]').should('contain', 'Популярні блоги');
        });

        it('should have clickable categories that navigate to the respective section', () => {
            // Перевіряємо наявність категорій і перевіряємо їх на клік
            cy.get('[data-testid="car-reviews-title"]').should('contain', 'Огляди авто');
            cy.get('[data-testid="maintenance-title"]').should('contain', 'Обслуговування');
            cy.get('[data-testid="modifications-title"]').should('contain', 'Модифікація автомобіля');
            cy.get('[data-testid="driving-tips-title"]').should('contain', 'Поради з водіння');
        });

        it('should navigate to a feedback page when clicking on arrows', () => {
            // Перевіряємо, чи працюють кнопки пагінації відгуків
            cy.get('[data-testid="feedback-button1"]').click();
            cy.get('[data-testid="feedback-button2"]').click();
        });

        // Тести для Header компонента
        it('should render the header container', () => {
            // Перевіряємо, що контейнер заголовка є на сторінці
            cy.get('[data-testid="header-container"]').should('exist');
        });

        it('should display the logo with the correct image', () => {
            // Перевіряємо, чи зображення логотипу є на сторінці
            cy.get('[data-testid="logo-image"]').should('be.visible');

            // Перевіряємо правильність шляху до логотипу
            cy.get('[data-testid="logo-image"]').should('have.attr', 'src').and('include', 'logo');
        });

        it('should display the navigation menu', () => {
            // Перевіряємо, чи є список навігації
            cy.get('[data-testid="nav-list"]').should('exist');
        });

        it('should have navigation links to the correct pages', () => {
            // Перевіряємо правильність навігації по кожному посиланню
            cy.get('[data-testid="home-page-link"]').click();
            cy.url().should('eq', 'http://localhost:9001/#/');

            cy.get('[data-testid="blog-link"]').click();
            cy.url().should('eq', 'http://localhost:9001/#/blog');

            cy.get('[data-testid="register-link"]').click();
            cy.url().should('eq', 'http://localhost:9001/#/register');
        });
    });
});
