import { lg, md, secondaryText, sm, border, background, mainFontFamily } from 'src/theme/variables'
import { createStyles } from '@material-ui/core'

export const styles = createStyles({
  heading: {
    padding: `${md} ${lg}`,
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    maxHeight: '75px',
  },
  annotation: {
    letterSpacing: '-1px',
    color: secondaryText,
    marginRight: 'auto',
    marginLeft: '20px',
  },
  headingText: {
    fontSize: lg,
  },
  closeIcon: {
    height: '35px',
    width: '35px',
  },
  qrCodeBtn: {
    cursor: 'pointer',
  },
  formContainer: {
    padding: `${md} ${lg}`,
    wordBreak: 'break-word',
    maxHeight: '50vh',
    overflow: 'hidden',
    overflowY: 'auto',
  },
  value: {
    marginLeft: sm,
  },
  outerData: {
    borderRadius: '5px',
    border: `1px solid ${border}`,
    padding: '11px',
    minHeight: '21px',
  },
  data: {
    wordBreak: 'break-all',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: mainFontFamily,
    maxHeight: '100px',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
  },
  buttonRow: {
    padding: '25px',
    justifyContent: 'center',
    '& > button': {
      fontFamily: mainFontFamily,
      fontSize: md,
    },
  },
  submitButton: {
    boxShadow: '1px 2px 10px 0 rgba(212, 212, 211, 0.59)',
    marginLeft: '15px',
  },
  dataInput: {
    '& TextField-root-294': {
      lineHeight: 'auto',
      border: 'green',
    },
  },
  selectAddress: {
    cursor: 'pointer',
  },
  fullWidth: {
    justifyContent: 'space-between',
  },
  gasCostsContainer: {
    backgroundColor: background,
    padding: `0 ${lg}`,
  },
})
