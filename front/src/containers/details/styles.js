import { createUseStyles } from 'react-jss'


export const useStyles = createUseStyles({
  container: {
    backgroundImage: ({ bg }) => `url(/${bg})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
})