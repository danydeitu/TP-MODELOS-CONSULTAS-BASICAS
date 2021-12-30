module.exports = (sequelize,dataTypes) => {

    let alias = 'Movie';

    let cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        title :{
            type : dataTypes.STRING(500),
            allowNull : false,
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue :'0'
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        created_at : {
            type : dataTypes.DATE,
            defaultValue : null
        }
    }

    let config = {
        tableName : "movies", // con nombre de la tabla plural no va
        timestamps : true, // con marcas de tiempo no va
        createdAt : 'created_at', //cuando no se llama como sequelize lo espera
        updatedAt : 'updated_at',
        deleteAt : false
     }


    const Movie = sequelize.define(alias,cols,config)

    return Movie;

}