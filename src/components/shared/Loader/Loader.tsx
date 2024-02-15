import ContentLoader from 'react-content-loader';

const Circle = ({ cy }: { cy: string }) => <circle cx="261" cy={cy} r="8" />;
const Rect = ({ y }: { y: string }) => <rect x="25" y={y} rx="5" ry="5" width="220" height="10" />;

export const ListLoader = ({ width = 285, height = 150, bg = '#eee', fg = '#21212121' }) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor={bg}
    foregroundColor={fg}
  >
    <Circle cy="20" />
    <Rect y="15" />
    <Circle cy="50" />
    <Rect y="45" />
    <Circle cy="80" />
    <Rect y="75" />
    <Circle cy="110" />
    <Rect y="105" />
  </ContentLoader>
);
