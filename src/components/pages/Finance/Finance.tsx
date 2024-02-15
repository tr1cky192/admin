import { FinanceMain } from './FinanceMain/FinanceMain';
import { InputEmail } from '../Access/InputEmail';

export const Finance: React.FC = () => (
  <div>
    <InputEmail component={FinanceMain} />
  </div>
);
