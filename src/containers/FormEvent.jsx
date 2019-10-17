import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',    
  },
  textField: {
    padding: '10px',    
    width: '90%',
  },
  dense: {
    marginTop: 10,
    
  },
  menu: {
    width: 100,
  },
}));



function FormEvent() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Ardhika Rafi',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });
  const inputLabel = React.useRef(null);
  
  

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  

  return (
    
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Nama"
        className={classes.textField}
        placeholder="namamu"   
        margin="normal"
      />   
      <TextField
        type="password"
        label="Password"
        className={classes.textField}
        margin="normal"
      />    
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>  
    </form>
    
  );
}

export default FormEvent;
