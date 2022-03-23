const Sequelize = require("sequelize")

const Usuarios = db.define('usuarios', {
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate:{
            isEmail:{
                msg: 'Agregar un correo valido'
            },
            notEmpty: {
                msg: 'El E-mail no puede ir vacio'
            },
            
        },
        unique: {
            args: true,
            msg: 'Usuario ya registrado'
        }
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El password no puede ir vacio'
            },
            min: {
                args: 8,
                msg: 'El password debe contener al menos 8 caracteres'
            }
        }
    },
    last_name: {
        type: Sequelize.STRING(80),
        validate: {
            notEmpty: {
                msg: "Apellidos no puede ir vacio",
            }
        }
    },
    name: {
        type: Sequelize.STRING(80),
        validate: {
            notEmpty: {
                msg: "Apellidos no puede ir vacio",
            }
        }
    },
    eliminado: {
        type: Sequelize.STRING,
        defaultValue: 0
    },
    
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
    token: Sequelize.STRING,
    expiration: Sequelize.DATE,
}, {
    hooks: {
        beforeCreate(usuario){
            usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10))
        },
        beforeCreate(usuario){
            usuario.created_at = Date.now()
        },
        afterUpdate(usuario){
            usuario.updated_at = Date.now()
        }
    }
})


module.exports = Usuarios