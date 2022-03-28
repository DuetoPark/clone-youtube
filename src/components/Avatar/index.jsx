import { StyledAvatar } from './styles';

const Avatar = ({ video, size }) => {
  return (
    <StyledAvatar
      href="./index.html"
      className="avatar"
      size={size}
      title={video.snippet.channelTitle}
    >
      {video.channelUrl && (
        <img src={video.channelUrl} alt={video.snippet.channelTitle} />
      )}
    </StyledAvatar>
  );
};

export default Avatar;
