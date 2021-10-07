/// <reference types="cypress" />

describe('Test Rail example', () => {
  it('works 1', () => {
    cy.wait(1000)
  })
  it('works 2', () => {
    cy.wait(1000)
  })
  it('works 3', () => {
    cy.log('in the last test!')
    cy.wait(1000)
  })
})
