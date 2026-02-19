const fs = require('fs');
const colors = require('colors');

/* original
   const crearArchivo = (base = 5 ) => {


        console.log(`=============`);
        console.log(' Tabla del:',base);
        console.log(`=============`);
        
        
        let salida ='';
        for( let i=1; i<11; i++){
        salida +=`${base} x ${i}= ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`,salida);
        console.log(`tabla-${base}.txt creado`);
    
}
*/

/* Promesa
    const crearArchivo = (base = 5 ) => {

    return new Promise(( resolve, reject ) => {

        console.log(`=============`);
        console.log(' Tabla del:',base);
        console.log(`=============`);
        
        
        let salida ='';
        for( let i=1; i<11; i++){
        salida +=`${base} x ${i}= ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`,salida);        
        resolve(`tabla-${base}.txt`);
          
    });
 }    
*/

const crearArchivo =async (base = 5 , l = false , h = 10) => {
  

   try {
      let salida='', consola ='';

      for( let i=1; i<=h; i++){
        salida +=`${base}  x ${i} = ${base * i}\n`;
        consola +=`${base}  ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      }


      if(l){
        console.log(`=============`.underline.green);
        console.log(' Tabla del:'.green, colors.blue(base) );
        console.log(`=============`.underline.green);
        console.log(consola);
      }
      fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
      return `tabla-${base}.txt creado`;
        //console.log(`tabla-${base}.txt creado`);
   }catch (error) {
        throw error;
    } 
}

module.exports = {
  crearArchivo
}