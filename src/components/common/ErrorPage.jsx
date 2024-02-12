import { Stack, Typography, Box, useTheme } from '@mui/material'
import ErrorIcon from '../../assets/svg/CommonErrorIcon.svg'
import BackButtonIcon from '../../assets/svg/BackButtonIcon'

const ErrorPage = () => {
  const theme = useTheme()
  return (
    <Box padding={'30px'}>
      <BackButtonIcon
        onClick={() => window.history.back()}
        className="isClickable"
      />
      <Stack justifyContent={'center'} alignItems={'center'} spacing={'18px'}>
        <img src={ErrorIcon} alt="" width={'420px'} />
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: theme.palette.primary.main,
          }}
        >
          Something went wrong
        </Typography>
        <Typography
          className="isClickable"
          onClick={() => {
            window.location.reload()
          }}
          sx={{
            color: theme.palette.info.main,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '32px',
            textAlign: 'left',
            textDecoration: 'underline',
          }}
        >
          Reload Again
        </Typography>
      </Stack>
    </Box>
  )
}
export default ErrorPage