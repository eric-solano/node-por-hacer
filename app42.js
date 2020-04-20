const argv =  require('./config/yargs42').argv;

//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        break;
    case 'listar':
        console.log('Mostar todas la tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}