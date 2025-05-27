interface BadgeYoutubeProps {
  width?: number;
  height?: number;
}

const BadgeYoutube: React.FC<BadgeYoutubeProps> = ({
  width = 33,
  height = 33,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1667 27.3441H9.83341C5.83341 27.3441 3.16675 24.6774 3.16675 20.6774V12.6774C3.16675 8.67741 5.83341 6.01074 9.83341 6.01074H23.1667C27.1667 6.01074 29.8334 8.67741 29.8334 12.6774V20.6774C29.8334 24.6774 27.1667 27.3441 23.1667 27.3441Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7 13.3442L19.0334 15.3442C20.2334 16.1442 20.2334 17.3442 19.0334 18.1442L15.7 20.1442C14.3667 20.9442 13.3 20.2775 13.3 18.8108V14.8108C13.3 13.0775 14.3667 12.5442 15.7 13.3442Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BadgeYoutube;
