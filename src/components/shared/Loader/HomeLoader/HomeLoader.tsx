import logo from 'assets/icons/logoLoader.svg';
import drop from 'assets/icons/logoLoaderDrop.svg';
import { Svg, WrapperLoader } from './HomeLoader.styled';

type IProps = {
  type?: string;
};

const HomeLoader: React.FC<IProps> = ({ type }) => (
  <WrapperLoader>
    <img
      src={logo}
      alt="logo"
      width={type === 'mowgli' ? '59px' : '118px'}
      height={type === 'mowgli' ? '49px' : '99px'}
    />
    <Svg
      src={drop}
      alt="drop"
      width={type === 'mowgli' ? '13px' : '27px'}
      height={type === 'mowgli' ? '14px' : '28px'}
      type={type}
    />
  </WrapperLoader>
);

export default HomeLoader;
