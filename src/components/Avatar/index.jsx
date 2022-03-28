import { StyledAvatar } from './styles';
import { Link } from 'react-router-dom';

const Avatar = ({ video, size, address }) => {
  if (address) {
    if (video.avatarURL) {
      return (
        <StyledAvatar
          as={Link}
          to={address}
          className="avatar"
          size={size}
          title={video.snippet.channelTitle}
        >
          <img src={video.avatarURL} alt={video.snippet.channelTitle} />
        </StyledAvatar>
      );
    } else {
      return (
        <StyledAvatar
          as={Link}
          to={address}
          className="avatar"
          size={size}
          title={video.snippet.channelTitle}
        ></StyledAvatar>
      );
    }
  }

  if (video.avatarURL) {
    return (
      <StyledAvatar
        className="avatar"
        type="button"
        size={size}
        title={video.snippet.channelTitle}
      >
        <img src={video.avatarURL} alt={video.snippet.channelTitle} />
      </StyledAvatar>
    );
  }
  return (
    <StyledAvatar
      className="avatar"
      type="button"
      size={size}
      title={video.snippet.channelTitle}
    ></StyledAvatar>
  );
};

export default Avatar;
