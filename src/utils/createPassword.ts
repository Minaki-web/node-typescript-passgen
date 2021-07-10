import abstractChars from './abstractChars';

const base = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const symbol = '!@#$%^&*_-+=';

const createPasseword = (length: number = 16, hasUppercase: boolean = true, hasNumber: boolean = true, hasSymbol: boolean = true) => {
  let chars = base;
  hasUppercase ? (chars += uppercase) : '';
  hasNumber ? (chars += number) : '';
  hasSymbol ? (chars += symbol) : '';

  return abstractChars(length, chars);
};

export default createPasseword;
