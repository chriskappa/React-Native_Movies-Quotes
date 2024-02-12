import React from 'react'
import Styled from '../Styled'


interface IContainerProps { children: React.ReactNode }

const Container = ({ children }: IContainerProps): React.JSX.Element => {
    return (
        <Styled.View className='bg-white w-[300px] h- mb-2 rounded-lg '>
            {children}
        </Styled.View>
    )
}

export default Container