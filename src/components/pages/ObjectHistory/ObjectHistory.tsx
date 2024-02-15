import React from 'react';

import { ObjectHistoryInfo } from './ObjectHistoryInfo';
import { DivObjectHistoryMain, HObject } from './ObjectHistory.styled';
import { VerifInfo } from './Components/VerifInfo';
import { ObjectHistoryOption } from './ObjectHistoryOption';
import { SalesHistory } from './Components/SalesHistory';

const ObjectHistory: React.FC = () => {
  const verifValues = ['Object added', '00:12 22/12/2023', 'Hotelier ID 435473'];
  const verifValuesStart = ['First verification started', '07:59 22/12/2023', 'Verifier ID 435473'];
  const verifValuesFinish = [
    'First verification finished',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];

  const verifValuesStartNext = [
    'Next verification started',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];
  const verifValuesFinishNext = [
    'Next verification finished',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];

  const verifObjectDelete = ['Object deleted', '07:59 22/12/2023', 'Verifier ID 435473'];
  const verifObjectRestore = ['Object restored', '07:59 22/12/2023', 'Verifier ID 435473'];

  const verifObjectOptionAdd = [
    'Booking option 357RT added',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];
  const verifObjectOptionDelete = [
    'Booking option 357RT deleted',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];

  const verifOptionStart = [
    'First verification Booking option 357RT started',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];
  const verifOptionFinish = [
    'First verification Booking option 357RT finished',
    '07:59 22/12/2023',
    'Verifier ID 435473',
  ];

  return (
    <div>
      <DivObjectHistoryMain>
        <SalesHistory />
        <HObject>Object’s History</HObject>

        <VerifInfo values={verifValues} />

        <ObjectHistoryInfo
          verifInfoStart={verifValuesStart}
          verifInfoFinish={verifValuesFinish}
          isFirst
        />
        <ObjectHistoryInfo
          verifInfoStart={verifValuesStartNext}
          verifInfoFinish={verifValuesFinishNext}
        />

        <VerifInfo values={verifObjectDelete} />
        <VerifInfo values={verifObjectRestore} />

        <VerifInfo values={verifObjectOptionAdd} />
        <VerifInfo values={verifObjectOptionDelete} />

        <ObjectHistoryOption
          verifInfoStart={verifOptionStart}
          verifInfoFinish={verifOptionFinish}
        />
      </DivObjectHistoryMain>
    </div>
  );
};

export default ObjectHistory;
