import * as React from 'react'
import { render } from 'react-testing-library'
import { App } from '../src/App'

describe('<App />', () => {
  it('renders OK', () => {
    const { container } = render(<App />)
    expect(container.firstChild.textContent).toBe('OK')
  })
})
