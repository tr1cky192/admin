import { BackButton } from 'components/pages/CountryPage/Countries/BackButton';
import { VerificationDocuments } from './VerificationDocuments';
import { HeaderWrapper } from './VerificationHeader.styled';
import { Verifier } from './Verifier';

export const VerificationHeader = () => (
  //   <>
  <HeaderWrapper>
    <BackButton />

    <Verifier />
    <VerificationDocuments />
  </HeaderWrapper>
  //   </>
);
