/// <reference types="cypress" />
var faker = require('faker');


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

    });


    //Deve fazer um pedido na loja Ebac Shop de ponta a ponta

    it('Deve adicionar porduto ao carrinho - Usando comando Customizado', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover', 'M', 'Blue', 4)

    //Checkout
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type('Lauzane, 30')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#select2-billing_state-container').click().type('São Paulo' + '{Enter}')
        cy.get('#billing_postcode').type('04788888')
        cy.get('#billing_phone').type('25380000')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type('Lu12228990**')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')


    });




});

