import React from 'react'

export default function Header() {
  return (
    <header> 
        <div>
            <span className='logo'>Fire Shop</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
