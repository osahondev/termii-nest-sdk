export const reprocessPhoneNumber = (phoneNumber: string): string => {
  const numericPhone = phoneNumber.replace(/\D/g, '');
  if (numericPhone.startsWith('0')) {
    return '234' + numericPhone.slice(1);
  } else if (numericPhone.startsWith('+')) {
    return numericPhone.slice(1);
  }

  return numericPhone;
};
