import type { EntityId } from "@reduxjs/toolkit";


export type IAllObjectHotelier = {
  code: number | undefined;
  getAllEnPages?: DataObject;
  getAllUaPages?: DataObject;
  getAllPlPages?: DataObject;
  getAllRuPages?: DataObject;
  status: string;
}

export type DataObject = {
  [key in 'getAllEnPages' | 'getAllUaPages' | 'getAllPlPages' | 'getAllRuPages']: Location;
};

export type Location = {
  city: string;
  country: string;
  createdAt: string;
  description: string;
  district: string;
  districtInternational: string;
  idLocation: string;
  language: string;
  linkOnPhoto: string;
  nameOfpage: string;
  state: string;
  updatedAt: string;
  url: string;
  _id: string;
};


export type AddLocation = {
  language: string;
  idLocation: EntityId;
  district: string;
  city: string;
  state: string;
  country: string | undefined;
  linkOnPhoto: string;
}

export type IResponseAddLocation = {
  status: string;
  isAdded: boolean;
  message: string;
  data: DataObject;
}