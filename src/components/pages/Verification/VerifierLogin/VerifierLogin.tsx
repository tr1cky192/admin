import React from 'react';
import { InputEmail } from 'components/pages/Access/InputEmail';
import { VerificationCabinet } from '../VerificationCabinet';

export const VerifierLogin: React.FC = () => (
  // eslint-disable-next-line react/no-unstable-nested-components
  <InputEmail component={(props) => <VerificationCabinet {...props} backgroundBlue />} />
);
