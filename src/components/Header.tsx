import React from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <div className='header'>{children}</div>
    )
}

export default Header