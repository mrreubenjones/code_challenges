// Covfefe
// https://www.codewars.com/kata/covfefe/train/javascript

function covfefe(str){
  return str.match(/coverage/g) ? str.replace(/coverage/g, 'covfefe') : str = str + " covfefe";
}