describe('Entrypoint', () => {
  it('renders application into the #root element', () => {
    // tslint:disable-next-line:no-object-mutation
    const root = document.body.innerHTML = '<div id="root"></div>'
    require('../src')
    expect(document.getElementById('root').innerHTML).toContain('OK')
  })
})
