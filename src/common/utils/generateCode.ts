export const generateCityCode = (cityName: string) => cityName.slice(0, 5).toUpperCase();

export const generateDistrictCode = (districtName: string) =>
  districtName.slice(0, 5).toUpperCase();

export const generateStateCode = (stateName: string) => stateName.slice(0, 5).toUpperCase();
