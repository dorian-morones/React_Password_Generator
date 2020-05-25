export const Random = (letters: number, type: number) => {
  let Password = "";
  let getType = "";
  const pas_number = "0123456789";
  const pas_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const pas_alphanumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const pas_mix = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";

  switch (type) {
    case 1:
      getType = pas_number;
      break;
    case 2:
      getType = pas_letters;
      break;
    case 3:
      getType = pas_alphanumeric;
      break;
    case 4:
      getType = pas_mix;
      break;
    default:
      getType = pas_number;
      break;
  }

  for (var x = 0; x < letters; x++) {
    var i = Math.floor(Math.random() * getType.length);
    Password += getType.charAt(i);
  }

  // var randomstring = Math.random().toString(36).slice(letters);
  return Password;
};
