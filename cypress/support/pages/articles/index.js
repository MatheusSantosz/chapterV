
const el = require('./elements').ELEMENTS

const articleName = 'Article Name ChapterV' + new Date().getTime()

class Articles {
  // acessando o form
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherOFormulario () {
  // articles pesquisando pelo atributo

    // preenchendo o formulario

    // pegando elemento pelo NG-MODEL
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Artigo de testes automatizados')
    cy.get(el.inputBody).type('Corpo do artigo que esta sendo criado')
    cy.get(el.inputTag).type('Cypress')
  }

  submeterOFormulario () {
    // Publicando o formulario
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeOArtigoFoiCriado () {
    // Verificar se o artigo foi criado
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
