import React from 'react'
import { useState } from 'react'
import MainTable from './MainTable'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
      backgroundColor: '#FB0067',
      color: 'white',
      '&:hover': {
        backgroundColor: '#D3005E',
      }
    },
  });

const Standings = () => {
  const [id,setId] = useState(39)

  const classes = useStyles()

    return (
        <div className='cont'>
            <a name='standings'><h1>Standings</h1></a>
            <ButtonGroup variant="contained" aria-label="outlined button group"> 
              <Button className={classes.button} onClick={() => setId(39)}>PL</Button>
              <Button className={classes.button} onClick={() => setId(140)}>La Liga</Button>
              <Button className={classes.button} onClick={() => setId(78)}>Bundesliga</Button>
              <Button className={classes.button} onClick={() => setId(135)}>Serie A</Button>
              <Button className={classes.button} onClick={() => setId(61)}>Ligue 1</Button>
            </ButtonGroup>
            <MainTable id={id} />
        </div>  
    )
}

export default Standings