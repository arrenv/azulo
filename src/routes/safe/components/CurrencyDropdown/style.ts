import { makeStyles } from '@material-ui/core/styles'
import { background, border } from 'src/theme/variables'

const buttonWidth = '140px'
export const useDropdownStyles = makeStyles({
  listItem: {
    maxWidth: (props: any) => (props.buttonWidth ? props.buttonWidth : buttonWidth),
    boxSizing: 'border-box',
  },
  listItemSearch: {
    maxWidth: (props: any) => (props.buttonWidth ? props.buttonWidth : buttonWidth),
    padding: '0',
    boxSizing: 'border-box',
  },
  localFlag: {
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '20px !important',
    width: '26px !important',
  },
  etherFlag: {
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '26px',
    height: '26px',
  },
  iconLeft: {
    marginRight: '10px',
  },
  iconRight: {
    marginLeft: '18px',
  },
  button: {
    backgroundColor: background,
    border: `1px solid ${border}`,
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: '#5d6d74',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'normal',
    height: '24px',
    lineHeight: '1.33',
    marginRight: '20px',
    minWidth: (props: any) => (props.buttonWidth ? props.buttonWidth : buttonWidth),
    outline: 'none',
    padding: '0',
    textAlign: 'left',
    '&:active': {
      opacity: '0.8',
    },
  },
  buttonInner: {
    boxSizing: 'border-box',
    display: 'block',
    height: '100%',
    lineHeight: '24px',
    padding: '0 22px 0 8px',
    position: 'relative',
    width: '100%',
    '&::after': {
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid #5d6d74',
      content: '""',
      height: '0',
      position: 'absolute',
      right: '8px',
      top: '9px',
      width: '0',
    },
  },
  openMenuButton: {
    '&::after': {
      borderBottom: '5px solid #5d6d74',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: 'none',
    },
  },
  dropdownItemsScrollWrapper: {
    maxHeight: '280px',
    overflow: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: '0',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
    marginRight: 0,
    width: '100%',
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: '12px',
    margin: '0',
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '18px',
    '& path': {
      fill: '#b2b5b2',
    },
  },
  inputRoot: {
    color: '#5d6d74',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '1.43',
    width: '100%',
  },
  inputInput: {
    boxSizing: 'border-box',
    height: '44px',
    padding: '12px 12px 12px 40px',
    width: '100%',
  },
})
