import React from 'react';
import Container from '../Container/Container';

interface IQuoteProps {
    data: { user: Record<string, string>, quote: string },
    onPress: Function, isFavourite: boolean
}

const Quote = ({ data, onPress, isFavourite }: IQuoteProps): React.JSX.Element => {
    const { user, quote } = data;
    return (
        <Container>
            <Container.FavouriteButton isFavourite={isFavourite} />
            <Container.CentralContent text={quote} user={user} />
            <Container.Bottom onPressFavourite={onPress} isFavourite={isFavourite} />
        </Container>
    )
}

export default Quote