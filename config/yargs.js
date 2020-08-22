const descripcion = {
    demand: true,
    alias: 'd'
},
completado = {
    demand: true,
    alias: 'c', 
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
            descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Crear un elemento por hacer', {
            descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}

    