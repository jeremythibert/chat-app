import React from 'react';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/33.jpg"
        name = "Corey Castillo"
        status
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/91.jpg"
        name = "Rene Schmidt"
  
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/women/73.jpg"
        name = "Ramona Evans"
        status
      />
    </div>
  );
}
 export default App;