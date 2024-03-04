import {
    CheckCircleTwoTone,
    InfoCircleTwoTone,
    QuestionCircleTwoTone,
    WarningTwoTone
  } from '@ant-design/icons'
  import { ToastWrapper, TextWrapper } from './styles'
  import { theme } from 'antd'
  
  
  const Toast = ({ message, type, title }) => {
    const { useToken } = theme
    const { token } = useToken()
    return (
      <ToastWrapper theme={token} className={type}>
        {type === 'error' && <WarningTwoTone twoToneColor={token.colorError} rev ="true" />}
        {type === 'info' && <InfoCircleTwoTone twoToneColor={token.colorPrimary} rev ="true" />}
        {type === 'success' && <CheckCircleTwoTone twoToneColor={token.colorSuccess} rev ="true" />}
        {type === 'failed' && <QuestionCircleTwoTone twoToneColor={token.colorError} rev ="true" />}
        <TextWrapper>
          <span>{title}</span>
          <p>{message}</p>
        </TextWrapper>
      </ToastWrapper>
    )
  }
  
  export default Toast
  