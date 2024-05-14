describe('example', { tags: '@smoke' },() => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('google', { tags: '@smoke' }, () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
  })
})


describe('yahoo', { tags: '@regression' }, () => {
  it('passes', () => {
    cy.visit('https://www.yahoo.com')
  })
})

describe('amazon',  { tags: '@regression' },() => {
  it('passes', () => {
    cy.visit('https://www.amazon.com')
  })
})