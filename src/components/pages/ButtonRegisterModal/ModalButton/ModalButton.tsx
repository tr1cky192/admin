import { ModalWrapper, Text } from './ModalButton.styled';

type Props = {
    title: string;
    onClick: (el: string) => void
};

const LocationRegister1 = [
  'Київ',
  'Харків',
  'Одеса',
  'Дніпро',
  'Львів',
  'Запоріжжя',
  'Переяслав-Хмельницький Центр',
  'Новоград-Волинський Вокзал',
  'Чернівці',
  'Хмельницький',
];

const LocationRegister2 = [
  'Житомир',
  'Вінниця',
  'Кропивницький (Кіровоград)',
  'Луцьк',
  'Рівне',
  'Ужгород',
  'Черкаси',
  'Новоград-Волинський Вокзал',
  "Кам'янець-Подільський",
  'Суми',
  'Полтава',
];

const LocationRegister3 = [
  'Кременчук',
  'Миколаїв',
  'Херсон',
  'Чернігів',
  'Біла Церква',
  'Мукачево',
  'Ізмаїл',
  'Рівне',
  'Львів',
];

export const ModalButton: React.FC<Props> = ({ title, onClick }) => {
  type LocationRegisters = Record<string, string[]>;

  const locationRegisters: LocationRegisters = {
    'Location Register 1': LocationRegister1,
    'Location Register 2': LocationRegister2,
    'Location Register 3': LocationRegister3,
  };

  const locationRegister = locationRegisters[title];

  return (
    <div>
      {locationRegister.length > 0 && (
        <ModalWrapper>
          {locationRegister.map(el => (
            <Text key={el} onClick={() => onClick(el)}>
              {el}
            </Text>
          ))}
        </ModalWrapper>
      )}
    </div>
  );
};

