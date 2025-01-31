import { sm } from 'src/theme/variables'
import { createStyles } from '@material-ui/core'

export const styles = createStyles({
  iconSmall: {
    fontSize: 16,
  },
  tooltipInfo: {
    position: 'relative',
    top: '3px',
    left: '3px',
  },
  hide: {
    '&:hover': {
      backgroundColor: '#f7f5f5',
    },
    '&:hover $actions': {
      visibility: 'initial',
    },
    '&:focus $actions': {
      visibility: 'initial',
    },
  },
  actions: {
    justifyContent: 'flex-end',
    visibility: 'hidden',
  },
  leftIcon: {
    marginRight: sm,
  },
  currencyValueRow: {
    textAlign: 'right',
  },
  buttonIcon: {
    padding: '10px 30px',
    margin: '5px',
    '& svg': {
      height: '16px',
      width: '16px',
      verticalAlign: 'middle'
    }
  },
})
