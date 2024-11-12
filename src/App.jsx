import { useState } from 'react'

import initialEmails from './data/emails'
// import Header from './Header.jsx'
import EmailsList from './components/EmailsList.jsx'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'

import './styles/App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)

  let filteredEmails = emails
  return (
    <div className="app">
      <Header />
      <Nav emails={emails}/>
      <EmailsList emailFiltering={filteredEmails} setEmailsState={setEmails}/>
      <Main setEmails={setEmails} filteredEmails={filteredEmails}/>
    </div>
  )
}

export default App
