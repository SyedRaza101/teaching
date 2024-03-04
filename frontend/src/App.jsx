import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from "antd";
import theme from "./theme.json";
import Routes from './routes';


function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
         <Routes/>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
