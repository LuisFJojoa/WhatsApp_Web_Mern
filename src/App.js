import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Let's build a MERN WhatsApp clone</h1>

      
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
