const argv =  require('./config/yargs45').argv;
const porHacer = require('./por-hacer/por-hacer45');
const colors = require('colors')

//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostar todas la tareas por hacer');
        let listado = porHacer.getListado();
        console.log(listado);       
        for (let tarea of listado) {
            console.log('=========Por hacer=========='.red);
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('============================'.red);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}