import start from 'assets/icons/startArrow.svg';
import finish from 'assets/icons/finishArrow.svg';
import {
  DivVarifStartt,
  DivVarifStartText,
  DivVerifInfo,
  ImgVerifFinish,
  ImgVerifStart,
} from './Compinents.styled';
import type { VerifInfoProps } from '../ObjectHistory.type';

export const VerifInfo: React.FC<VerifInfoProps> = ({
  values,
  verifStart = true,
  verifFinish = true,
}) => (
  <DivVarifStartt>
    <DivVerifInfo>
      <div>
        {verifStart && <ImgVerifStart src={start} alt="start" isStart={verifFinish} />}
        {verifFinish && <ImgVerifFinish src={finish} alt="finish" isFinish={verifStart} />}
      </div>
      <DivVarifStartText>{values[0]}</DivVarifStartText>
    </DivVerifInfo>
    <div>
      <DivVarifStartText>{values[1]}</DivVarifStartText>
    </div>
    <div>
      <DivVarifStartText>{values[2]}</DivVarifStartText>
    </div>
  </DivVarifStartt>
);
