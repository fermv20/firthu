import { render } from '@testing-library/react'
import { Button } from './button'
import { createRef } from 'react'

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button />)

    expect(() => wrapper.unmount()).not.toThrow()
  })

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<Button ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})
