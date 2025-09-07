import Alert from '@mui/material/Alert'

const Notification = ({ message, type = "success" }) => {
  if (!message) return null

  return (
    <Alert severity={type} style={{ marginBottom: 15 }}>
      {message}
    </Alert>
  )
}

export default Notification
