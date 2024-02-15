import {MainWrapper} from "./VerificationCabinet.styled";
import {PendingObjects} from "./PendingObjects";
import {VerificationHeader} from "./VerifierLogin/VerificationHeader";

export const VerificationCabinet = ({ backgroundBlue }) => {
  const containerClass = backgroundBlue ? 'blue-background' : 'default-background';
  return (
    <div>
      <MainWrapper containerClass={containerClass}>
        <VerificationHeader />
        <PendingObjects />
      </MainWrapper>
    </div>
  );
};
