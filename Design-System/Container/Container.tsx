import React from 'react'
import Styled from '../Styled'
import FavouriteButton from './FavouriteButton'
import CentralContent from './CentralContent'
import Bottom from './Bottom'

interface IContainerProps { children: React.ReactNode }

const Container = ({ children }: IContainerProps): React.JSX.Element => {
    return (
        <Styled.View className='bg-white w-[300px] h- mb-2 rounded-lg '>
            {children}
        </Styled.View>
    )
}

Container.FavouriteButton = FavouriteButton;
Container.CentralContent = CentralContent;
Container.Bottom = Bottom;
export default Container