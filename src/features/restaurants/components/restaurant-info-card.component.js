import React from 'react';
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { 
    RestaurantCard,
    CardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = ['https://picsum.photos/600'],
        address = '100 Random Street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.round(rating)));

    return (
        <RestaurantCard elevation={5}>
            <CardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant='label'>{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant='error'>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        {isOpenNow && !isClosedTemporarily && <SvgXml xml={open} width={20} height={20}/>}
                        <Spacer position='left' size='large'/>
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )

}