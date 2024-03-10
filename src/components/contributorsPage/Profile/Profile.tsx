import React from 'react';
import { BodyText } from 'components/Typography';
import Avatar from 'components/Avatar';
import { Wrapper, Name, Info } from './Profile.styled';

export interface Props {
  id: string;
  image: string;
  name: string;
  bio?: string;
}

const Profile = ({ image, name, bio }: Props) => (
  <Wrapper>
    <Avatar source={image} size={300} />
    <Info>
      <Name>{name}</Name>
      <BodyText>{bio}</BodyText>
    </Info>
  </Wrapper>
);

export default Profile;
