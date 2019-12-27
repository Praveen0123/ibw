export class Clients {
  id: number;
  username: string;
  password: string;
  industry: string;
  campaign: string;
  prospects: number;  
  profile: ClientsProfile;
  work: ClientsWork;
  contacts: ClientsContacts;
  social: ClientsSocial;
  settings: ClientsSettings;
  selected: any;
}

export class ClientsProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class ClientsWork {
  company: string;
  position: string;
  salary: number;
}

export class ClientsContacts{
  email: string;
  phone: string;
  address: string;  
}

export class ClientsSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class ClientsSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}