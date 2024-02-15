  import React, { useState } from 'react';
  import {PDescription, ButtonLanguage, DivLanguageOriginal, DivButtonsLanguage} from './Components.styled';

  type DescriptionComponentProps = {
    hasCard: boolean;
  };

  type LanguageButtonProps = {
    language: string;
    active: boolean;
    onClick: () => void;
    showOriginal?: boolean;
  };

  const LanguageButton: React.FC<LanguageButtonProps> = ({ language, active, onClick, showOriginal }) => {
    const buttonStyles = {
      active: { background: '#6AFF79', color: '#fff' },
      inactive: { background: '#EFFDF1' },
    };

    return (
      <ButtonLanguage
        type="button"
        onClick={onClick}
        style={active ? buttonStyles.active : buttonStyles.inactive}
      >

        {showOriginal && <DivLanguageOriginal>original</DivLanguageOriginal> }
        <div>{language}
        </div>
      </ButtonLanguage>
    );
  };

  export const Description: React.FC<DescriptionComponentProps> = ({ hasCard }) => {
    const [language, setLanguage] = useState('RU');

    const handleLanguageChange = (newLanguage: string) => {
      setLanguage(newLanguage);
    };

    const languages = [
      { code: 'RU' },
      { code: 'EN' },
      { code: 'PL' },
      { code: 'UA', showOriginal: true },
    ];

    return (
      <div>
        <PDescription hasStyle={hasCard}>
          <p>Здесь мы пишем про объект - описание объекта.</p>
          Commons-logo.svg Медиафайлы на Викискладе Па́бло Эми́лио Эскобар Гави́рия (исп. Pablo Emilio
          Escobar Gaviria; 1 декабря 1949 — 2 декабря 1993) — колумбийский наркобарон и террорист.
          Эскобара называют «Королем кокаина», поскольку он был лидером Медельинского картеля,
          контролировавшего к концу 1980 года 80 % от мирового рынка кокаина[4].
          <DivButtonsLanguage>
            {languages.map((lang) => (
              <LanguageButton
                key={lang.code}
                language={lang.code}
                active={language === lang.code}
                showOriginal={lang.showOriginal}
                onClick={() => handleLanguageChange(lang.code)}
              />
            ))}
          </DivButtonsLanguage>
        </PDescription>
      </div>
    );
  };
