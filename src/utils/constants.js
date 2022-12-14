export const LOCAL_STORAGE_USER = "appname-user";

export const REACT_APP_BACK_BASE_URL = process.env.REACT_APP_BACK_BASE_URL;

export const USER_TYPES = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  CUSTOMER: 3,
};

export const EMAIL_REGEX =
  /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;