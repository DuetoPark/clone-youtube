import React from 'react';

import { Link } from 'react-router-dom';
import { StyledAvatar } from './styles';

const Avatar = ({ video, size, address, className }) => {
  if (address) {
    if (video.channel) {
      return (
        <StyledAvatar
          as={Link}
          to={address}
          className={`avatar ${className}`}
          size={size}
          title={video.snippet.channelTitle}
        >
          <img
            src={video.channel.thumbnails.default.url}
            alt={video.snippet.channelTitle}
          />
        </StyledAvatar>
      );
    } else {
      return (
        <StyledAvatar
          as={Link}
          to={address}
          className={`avatar ${className}`}
          size={size}
          title={video.snippet.channelTitle}
        ></StyledAvatar>
      );
    }
  }

  if (video.channel) {
    return (
      <StyledAvatar
        className={`avatar ${className}`}
        type="button"
        size={size}
        title={video.snippet.channelTitle}
      >
        <img
          src={video.channel.thumbnails.default.url}
          alt={video.snippet.channelTitle}
        />
      </StyledAvatar>
    );
  }

  return (
    <StyledAvatar
      className={`avatar ${className}`}
      type="button"
      size={size}
      title={video.snippet.channelTitle}
    ></StyledAvatar>
  );
};

export default Avatar;
