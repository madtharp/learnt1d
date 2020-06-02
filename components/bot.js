import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    floating: true,
    floatingStyle: 'right',
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
);

export default Bot;