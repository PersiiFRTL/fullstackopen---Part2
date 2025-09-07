import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const PersonForm = ({ onSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField 
          label="Name" 
          variant="outlined" 
          size="small"
          value={newName} 
          onChange={handleNameChange} 
          style={{ marginBottom: 10 }}
        />
      </div>
      <div>
        <TextField 
          label="Number" 
          variant="outlined" 
          size="small"
          value={newNumber} 
          onChange={handleNumberChange} 
          style={{ marginBottom: 10 }}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </div>
    </form>
  )
}

export default PersonForm
