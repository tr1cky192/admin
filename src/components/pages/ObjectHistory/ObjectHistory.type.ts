export type ObjectInfoInfo = {
  verifInfoStart: string[];
  verifInfoFinish: string[];
  isFirst?: boolean;
};

export type ObjectInfoOption = {
  verifInfoStart: string[];
  verifInfoFinish: string[];
};

export type VerifInfoProps = {
  values: string[];
  verifStart?: boolean;
  verifFinish?: boolean;
};

export type AddAdressUrlProps = {
  isSubmitted: boolean;
}
