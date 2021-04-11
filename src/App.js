import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div class="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
