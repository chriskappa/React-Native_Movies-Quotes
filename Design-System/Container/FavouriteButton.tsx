import React from 'react'
import Styled from '../Styled'

interface IFavouriteButtonProps { isFavourite: boolean }

const FavouriteButton = ({ isFavourite }: IFavouriteButtonProps) => {
    return (
        < Styled.View className='flex justify-center items-end' >
            {isFavourite && <Styled.Text className=' bg-red-500 p-2  font-bold rounded-sm text-white'>Favourite</Styled.Text>}
        </Styled.View >
    )
}

export default FavouriteButton