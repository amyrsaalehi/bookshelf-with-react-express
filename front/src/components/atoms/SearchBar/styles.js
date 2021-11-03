import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  btn: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '45%',
    opacity: ({ loading }) => loading ? .2 : 1
  },
  input: {
    padding: '20px 10px',
    fontSize: 20,
  }
})