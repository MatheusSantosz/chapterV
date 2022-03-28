/// <reference types="cypress" />
import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    /// hooks que sao executados antes e depois do teste.

    // Arrange
    cy.login()
    cy.visit('/')
  })
  it('Realizando o Login e publicando um novo artigo com sucesso', () => {
    // acessando o form
    articles.acessarOFormulario()

    // preenchendo o formulario

    // pegando elemento pelo NG-MODEL
    articles.preencherOFormulario()

    // Publicando o formulario
    articles.submeterOFormulario()

    // Verificar se o artigo foi criado
    articles.verificarSeOArtigoFoiCriado()
  })
})

/// AAA -> Arrange , Act, Assert
///        Preparar, Agir, Validar
