module.exports = function (sequelize, DataTypes) {
    let alias = 'Productos';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {            
            type: DataTypes.STRING            
        },
        category: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.DECIMAL(7,5)
        }  
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    
    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function (models) {
        Productos.hasMany(models.Carrito,{
            as: 'productos',
            through: 'cart',
            foreignKey: 'products_id'

        });
    }
      
    return Productos;
}