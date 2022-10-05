// Design by danish kamal 
let copy = (textId) => {
  document.getElementById(textId).select();
  document.execCommand("copy");
};