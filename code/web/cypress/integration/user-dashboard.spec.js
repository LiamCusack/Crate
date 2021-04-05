describe('the user dashboard', () => {
  it('can verify an existing element', () => {
    cy
      .visit('http://localhost:3000/user/login')
      .get('form div')
      .children('input:first')
      .type('user@crate.com')
      .get('form div')
      .children('div:nth-child(2)')
      .type('123456')

      .get('form')
      .children('div:nth-child(2)')
      .children('button')
      .click()

      .get('header div div:nth-child(2) div a:nth-child(3)')
      .click()

      .get('section div div:nth-child(2) div h4')
      .contains('The User')

      .get('section div div:nth-child(2) div p')
      .contains('user@crate.com')
  })
});
