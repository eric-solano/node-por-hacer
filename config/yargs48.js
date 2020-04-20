const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
        //.command('listar','Muestra todas las tareas por hacer', opts)
        .command('crear','Cear un elemento por hacer',descripcion)
        .command('actualizar','Actualiza el estado completado de una tarea',{
            descripcion,
            completado
        })
        .command('borrar','Borra un elemento por hacer',descripcion)
        .help()
        .argv;

module.exports = {
    argv
};