const axios  = require('axios');

const urls = [ 'maps.sathishzus.workers.dev/' ]
const renderUrl = ''
const attack = async ()=>{
   try{
    for (let u of urls){
        const data = await  axios.get(`https://${u}`);
        console.log('sucess');        
    }
   callRender();
// attackRuthles()
    await attack()

   }
   catch(e){
    console.log('error ');
   callRender();

    await attack()
   }
}
const attackRuthles = async ()=>{
    try{
        for (let u of urls){
            const data =   axios.get(`https://${u}`);
            console.log('sucess');        
        }
       callRender('/api');
    
         attack()
    
       }
       catch(e){
        console.log('error ');
       callRender();
    
         attack()
       }
}
const callRender = (path)=>{
console.log('calling render' ,path);

}
// setInterval( async () => {
//       await  attack();
// }, 1000);
module.exports = {attack,attackRuthles};