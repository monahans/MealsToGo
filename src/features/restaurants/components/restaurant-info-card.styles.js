import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
    flexDirection: row;
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
    marginBottom: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
    padding-top: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Address = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body};
`;

export const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px
`
