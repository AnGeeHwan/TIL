import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';

// function Header() {
//   return (
//     <header>
//       <h1>welcome</h1>
//     </header>
//   )
// }

// function Nav() {
//   return (
//     <nav>
//       <ol>
//         <li>html</li>
//         <li>css</li>
//       </ol>
//     </nav>
//   )
// }

// function Article() {
//   const [open, setOpen] = useState(false);
//   return (
//     <article>
//       <h2>welcome</h2>
//       qfqfqqqfqqfqfqfqfqqqfqqfqfqfqfqqqfqqfqfqfqf
//       qqqfqqfqfqfqfqqqfqqfqfqfqfqqqfqqfqfqfqfqqqfqqfqfqf
//       qfqqqfqqfqfq

//       <br />
//       <br />
//       <ButtonGroup>
//         <Button
//           variant='outlined'
//           onClick={() => {
//             setOpen(true)
//           }}>Create</Button>
//         <Button variant='outlined'>Update</Button>
//       </ButtonGroup>
//       <Button variant='contained'>Delete</Button>
//       <Dialog open={open}>
//         <DialogTitle>Create</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Hello Create!!
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button variant='outlined'>Create</Button>
//           <Button variant='outlined' onClick={() => {
//             setOpen(false)
//           }}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </article>
//   )
// }

function App() {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name='email'
          autoComplete='email'
          autoFocus />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name='password'
          autoComplete='current-password' />
        <FormControlLabel control={
          <Checkbox value="remember" color="primary"></Checkbox>} label="Remember me" />
        <Button
          type="submit"
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb:2 }}>
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
