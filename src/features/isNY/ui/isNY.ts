export const isNY = () => {
  const now = new Date();
  const month = now.getMonth();
  if (month === 0 || month === 11) {
    return true;
  } else {
    return false;
  }
};
