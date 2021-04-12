module.exports = function (sequelize, DataTypes) {
    let alias = 'Usuarios';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        lastName: {            
            type: DataTypes.STRING            
        },
        email: {
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }  
    }
    let config = {
        tableName: 'user',
        timestamps: false
    };
    
    let Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function (models) {
        Usuarios.belongsTo(models.Usuarios,{
            as: 'carritoCompras',            
            foreignKey: 'user_id'
        })

    return Usuarios;      
    }
}