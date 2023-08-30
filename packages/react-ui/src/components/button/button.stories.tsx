import { Button } from './button'

export default { title: 'Components/Button' }

export const WithVariants = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Button variant="contained" color="primary">
        Button
      </Button>

      <Button variant="outlined" color="primary">
        Button
      </Button>

      <Button variant="text" color="primary">
        Button
      </Button>
    </div>
  )
}

export const WithColors = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant="contained" color="primary">
          Button
        </Button>

        <Button variant="contained" color="secondary">
          Button
        </Button>

        <Button variant="contained" color="success">
          Button
        </Button>

        <Button variant="contained" color="info">
          Button
        </Button>

        <Button variant="contained" color="warning">
          Button
        </Button>

        <Button variant="contained" color="danger">
          Button
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant="outlined" color="primary">
          Button
        </Button>

        <Button variant="outlined" color="secondary">
          Button
        </Button>

        <Button variant="outlined" color="success">
          Button
        </Button>

        <Button variant="outlined" color="info">
          Button
        </Button>

        <Button variant="outlined" color="warning">
          Button
        </Button>

        <Button variant="outlined" color="danger">
          Button
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant="text" color="primary">
          Button
        </Button>

        <Button variant="text" color="secondary">
          Button
        </Button>

        <Button variant="text" color="success">
          Button
        </Button>

        <Button variant="text" color="info">
          Button
        </Button>

        <Button variant="text" color="warning">
          Button
        </Button>

        <Button variant="text" color="danger">
          Button
        </Button>
      </div>
    </div>
  )
}

export const WithSizes = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Button variant="contained" color="primary" size="sm">
        Button
      </Button>

      <Button variant="contained" color="primary" size="md">
        Button
      </Button>

      <Button variant="contained" color="primary" size="lg">
        Button
      </Button>
    </div>
  )
}
