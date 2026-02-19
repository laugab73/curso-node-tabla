const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');
const { option } = require('yargs');
const colors = require('colors');


const argv = yargs(hideBin(process.argv))
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base de la tabla multiplicar'   
        })
        .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'.green
        }) 
        .option('h',{
        alias: 'hasta',
        type: 'number',      
        default: 10,
        describe: 'Limite de la tabla'.green
        }) 
        .check( (argv, option) =>{
            if (isNaN ( argv.b)){
                throw 'La base tiene que ser un número'.green
            }
            return true;
        })
        .argv;
module.exports = argv;        