/// <reference types="cypress" />

var Chance = require('chance')
var Chance = new Chance()
describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.visit('register')

    cy.intercept({
      // hostname = https://api.realworld.io/api/users
      // URL COMPLETA = hostname+path
      // hostname
      // path sem query parms = api/users
      // path w/ query parms
      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')
    // input[type=value]
    // [placeholder=Username]
    cy.get('h1').contains('Sign up')
    cy.get('input[type=text]').type(Chance.first())
    cy.get('input[type=email]').type(Chance.email())
    cy.get('input[type=password]').type(Chance.last())
    cy.get('button.btn-primary').click()
    cy.contains('No articles are here... yet.').should('be.visible')
    // cy.intercept('POST', '**/api/users').as('getUrl')
    // cy.wait('@getUrl');

    // cy.intercept('GET', '**/api/users').as('getUrl2')
    // cy.wait('@getUrl2');
    // button.btn-primary
  })
  it('Cadastro com user name ja existente', () => {
    cy.visit('register')

    cy.intercept({

      method: 'POST',
      path: '/api/users'
    }, {

      statusCode: 422,
      fixture: 'cadastro-com-erro'
    }).as('postUsers')
    cy.get('h1').contains('Sign up')
    cy.get('input[type=text]').type('matheus')
    cy.get('input[type=email]').type(Chance.email())
    cy.get('input[type=password]').type(Chance.last())
    cy.get('button.btn-primary').click()
    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com email ja existente', () => {
    cy.visit('register')
    cy.intercept({

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-email-erro'
    }).as('postUsers')
    cy.get('h1').contains('Sign up')
    cy.get('input[type=text]').type(Chance.name({ nationality: 'it' }))
    cy.get('input[type=email]').type('matheus.santos.ciencia@gmail.com')
    cy.get('input[type=password]').type(Chance.last())
    cy.get('button.btn-primary').click()
    cy.contains('email has already been taken').should('be.visible')
  })
})
