const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(input)=>{
  try {
    var count = 0;

    const count_1 = await promiseTheaterIXX()
    for (let i=0; i<count_1.length; i++){
      if (count_1[i].hasil == input){
          count++;
      }     
    }  

    const count_2 = await promiseTheaterVGC()
    for (let i=0; i<count_2.length; i++){
      if (count_2[i].hasil == input){
          count++;
      }     
    }  
    
    return count;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  promiseOutput,
};
