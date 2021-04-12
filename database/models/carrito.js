module.exports = function (sequelize, DataTypes) {
    let alias = 'Carrito';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER          
        },
        products_id: {            
            type: DataTypes.INTEGER                      
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
        products_price:{
            type: DataTypes.DECIMAL(7,5)
        }  
    }
    let config = {
        tableName: 'cart',
        timestamps: false
    }
    
    let Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function (models) {
        Carrito.belongsTo(models.Usuarios, {
            as: 'usuario',            
            foreignKey: 'user_id'
        });

        Carrito.hasMany(models.Products, {
            as: 'productos',
            foreignKey: 'products_id'
        })
    } 
    return Carrito;
}