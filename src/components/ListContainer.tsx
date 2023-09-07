import React, { ReactNode } from 'react'

type Props = {
    children: JSX.Element | JSX.Element[] | ReactNode  
}

const ListContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='list-container'>{children}</div>
    )
}

export default ListContainer