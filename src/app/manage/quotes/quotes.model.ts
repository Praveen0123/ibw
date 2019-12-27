export class Quotes {
  id: number;
  username: string;
  password: string;
  campaignName:string;
  industry: string;
  prospects: number;
  leads:number;
  profile: QuotesProfile;
  work: QuotesWork;
  contacts: QuotesContacts;
  social: QuotesSocial;
  settings: QuotesSettings;
}

export class QuotesProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class QuotesWork {
  company: string;
  position: string;
  salary: number;
}

export class QuotesContacts {
  email: string;
  phone: string;
  address: string;
}

export class QuotesSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class QuotesSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

export class Sales {
  id: number;
  username: string;
  password: string;  
  profile: SalesProfile;
  work: SalesWork;
  contacts: SalesContacts;
  social: SalesSocial;
  settings: SalesSettings;
}

export class SalesProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class SalesWork {
  company: string;
  position: string;
  salary: number;
}

export class SalesContacts{
  email: string;
  phone: string;
  address: string;  
}

export class SalesSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class SalesSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}