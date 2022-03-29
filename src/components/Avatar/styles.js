import styled from 'styled-components';

import { flexbox } from '../../styles/utils';
import userDefaultImage from '../../assets/images/img-user-default.jpeg';

function getAvatarSize(value) {
  switch (value) {
    case 'xs':
      return 24;
    case 'sm':
      return 32;
    case 'base':
      return 34;
    case 'md':
      return 36;
    case 'lg':
      return 40;
    case 'xl':
      return 48;
    default:
      break;
  }
}

export const StyledAvatar = styled.button`
  ${flexbox()}
  display: block;
  width: ${(props) => getAvatarSize(props.size)}px;
  height: ${(props) => getAvatarSize(props.size)}px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${userDefaultImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
