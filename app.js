const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

console.log(argv);

const comando = argv._[0];

switch (comando) {
    case 'crear':        
        let tarea = porHacer.crear(argv.descripcion);       
        
        break;
    
    case 'listar':
        let lista = porHacer.getListado();

        for (const tarea of lista) {
            console.log('=======Tareas por hacer========'.blue);
            console.log(tarea.descripcion);
            console.log('Estado:',tarea.completado);
            console.log('\n');
        }


        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no es reconocido');

        break;
}