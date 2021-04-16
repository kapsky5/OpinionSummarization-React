import AppBarComponent from "./AppBar";
import {makeStyles, Typography} from "@material-ui/core";
import React, {useContext} from "react";
import ResultContext from "../context/resultContext";

const useStyles = makeStyles((theme ) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    marginTop: theme.spacing(4),
    alignSelf: 'center',
  },
  resultBox: {
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(1),
    backgroundColor: '#ededed',
    padding: theme.spacing(2),
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '40%',
    height: '40%',
  }
}))

const Result = () => {

  const styles = useStyles();

  const resultContext = useContext(ResultContext);

  return (
    <>
      <AppBarComponent />
      <div className={styles.container}>
        <Typography variant="h5" color={'primary'} align={'left'}>
          RESULT:
        </Typography>
        <div className={styles.resultBox}>
          <Typography variant={'inherit'} color={'textPrimary'}>
            {resultContext.result}
          </Typography>
        </div>
        <div>
          {/*<img source={'http://localhost:5000/'} className={styles.image} />*/}
        </div>
      </div>
    </>
  )
}

export default Result;