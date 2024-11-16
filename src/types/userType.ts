export type User = {
    id?: string;
    userName: string;
    phoneNumber: number;
    email: string;
    country:String,
    state:String;
    address:String,
    pinCode:Number,
    accountType:"Saving"|"Current";
    bankAccountNumber?: string;
    initialDeposit: number;
  }
  

  export type LoginFormData= {

    email: string;
    securityPin: Number;

  }

  export type ActivateInternetBanking= {

    bankAccountNumber: string;
    securityPin: Number;

  }


export type UserDetailType = {
  userName: string;
  phoneNumber: number;
  email: string;
  address: string;
  bankAccountNumber: string;
};



