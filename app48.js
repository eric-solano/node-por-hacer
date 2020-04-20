const argv =  require('./config/yargs48').argv;
const porHacer = require('./por-hacer/por-hacer48');
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
        for (let tarea of listado) {
            console.log('=========Por hacer=========='.red);
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('============================'.red);
        }
        break;
    case 'actualizar': 
        console.log('Actualiza una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borra una tarea por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Comando no es reconocido');
        break;
}