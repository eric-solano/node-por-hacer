const argv = require('yargs')
        //.command('listar','Muestra todas las tareas por hacer', opts)
        .command('crear','Cear un elemento por hacer',{
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
        })
        .command('actualizar','Actualiza el estado completado de una tarea',{
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            },
            completado: {
                alias: 'c',
                default: true,
                desc: 'Marca como completado o pendiente la tarea'
            }
        })
        .command('borrar','Borra un elemento por hacer',{
            descripcion: {
                demand: true,
                alias: 'b',
                desc: 'Descripcion de la tarea por hacer'
            }
        })
        .help()
        .argv;

module.exports = {
    argv
};