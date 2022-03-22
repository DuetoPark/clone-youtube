import styled from 'styled-components';
import { positionCenter } from '../../styles/utils';

export const StyledThumbnail = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 0px;
  padding-top: 56.25%; // Ratio = 16 : 9
  overflow: hidden;

  img {
    ${positionCenter()}
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .duration {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    padding: 3px 4px;
    margin: 4px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
