const axios  = require('axios');

const urls = [ 'maps.sathishzus.workers.dev/' ]
const renderUrl = 'https://hackrender-nh2s.onrender.com'
const attack = async ()=>{
   try{
    for (let u of urls){
        const data = await  axios.get(`https://${u}`);
        console.log('sucess');        
    }
   await callRender();
// attackRuthles()
    await attack()

   }
   catch(e){
    console.log('error ');
//    callRender();

    await attack()
   }
}
const attackRuthles = async ()=>{
    try{
        for (let u of urls){
            const data =   axios.get(`https://${u}`);
            console.log('sucess');        
        }
    //   await callRender('/api');
    
         attack()
    
       }
       catch(e){
        console.log('error ');
    //    callRender();
    
       await  attack()
       }
}
const callRender = async (path=undefined)=>{
console.log('calling render' ,path);
try{
    d = await axios.get(`${renderUrl}/${path ? path :'/'}`)
console.log('calling render ',d);
}
catch(e){
    
}

}
setInterval( async () => {
      await  attack();
}, 0);
module.exports = {attack,attackRuthles};