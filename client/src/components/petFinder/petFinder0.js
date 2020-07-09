import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [size, setSize] = React.useState('');
  const [spayed, setSpayed] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
    setGender(event.target.value);
    setSize(event.target.value);
    setSpayed(event.target.value);
  }
  ;
  return (
    <div>
   
      <FormControl className={classes.margin}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"Dog"}>Dog</MenuItem>
          <MenuItem value={"Cat"}>Cat</MenuItem>
        
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label1">Gender</InputLabel>
        <Select
          labelId="demo-customized-select-label1"
          id="demo-customized-select1"
          value={gender}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label2">Size</InputLabel>
        <Select
          labelId="demo-customized-select-label2"
          id="demo-customized-select2"
          value={size}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"Small"}>Small</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Large"}>Large</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label3">Spayed/Neutered?</InputLabel>
        <Select
          labelId="demo-customized-select-label3"
          id="demo-customized-select3"
          value={spayed}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        
        </Select>
      </FormControl>
    </div>
  );
}
