import { EmailCheckboxStyled } from './EmailCheckbox.styled';

type EmailCheckboxProps = {
  objectsChecked: boolean;
  setObjectsChecked: (checked: boolean) => void;
  languagesChecked: boolean;
  setLanguagesChecked: (checked: boolean) => void;
  statisticsChecked: boolean;
  setStatisticsChecked: (checked: boolean) => void;
  financeChecked: boolean;
  setFinanceChecked: (checked: boolean) => void;
  blogChecked: boolean;
  setBlogChecked: (checked: boolean) => void;
}

export const EmailCheckbox = ({
  objectsChecked,
  setObjectsChecked,
  languagesChecked,
  setLanguagesChecked,
  statisticsChecked,
  setStatisticsChecked,
  financeChecked,
  setFinanceChecked,
  blogChecked,
  setBlogChecked,
}: EmailCheckboxProps) => (
  <EmailCheckboxStyled>
    <div className="forma">
      <div className="labels">
        <label htmlFor="Objects">
          Objects
          <br /> Verification
        </label>
        <label htmlFor="languages">
          Adding a languages
          <br /> Adding a countrys
          <br /> Location registers: <br />
          1, 2, 3
        </label>
        <label htmlFor="Statistics">Statistics</label>
        <label htmlFor="Finance">Finance</label>
        <label htmlFor="Blog">Blog</label>
      </div>
      <div className="inputs">
        <input
          id="Objects"
          type="checkbox"
          checked={objectsChecked}
          onChange={e => setObjectsChecked(e.target.checked)}
        />
        <input
          id="languages"
          type="checkbox"
          checked={languagesChecked}
          onChange={e => setLanguagesChecked(e.target.checked)}
        />
        <input
          id="Statistics"
          type="checkbox"
          checked={statisticsChecked}
          onChange={e => setStatisticsChecked(e.target.checked)}
        />
        <input
          id="Finance"
          type="checkbox"
          checked={financeChecked}
          onChange={e => setFinanceChecked(e.target.checked)}
        />
        <input
          id="Blog"
          type="checkbox"
          checked={blogChecked}
          onChange={e => setBlogChecked(e.target.checked)}
        />
      </div>
    </div>
  </EmailCheckboxStyled>
);
