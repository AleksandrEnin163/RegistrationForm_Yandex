import React, { useState } from 'react'
import Button from './components/UI/Button/Button'
import { Link } from 'react-router-dom'
import Modal from './components/Modal/Modal'

function App() {

  const[active, setActive] = useState(false)

  return (
    <div>
      <Link to={'/reg'}>
        <Button onClick={() => setActive(true)}title={'Регистрация / Авторизация'} color={'yellow'} />
      </Link>
      <Modal active={active} setActive={setActive} />
    </div>
  )
}

export default App