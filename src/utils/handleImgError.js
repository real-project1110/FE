export const handleImgError = (e) => {
  e.target.src = e.target.src.replace(/\/statUS\//, "/original/");
};
