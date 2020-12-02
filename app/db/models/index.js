const db = require('../index');
const path = require('path');
const fs = require('fs');

const models = {}

module.exports = (()=> {
    if(!Object.keys(models).length){
        const sequelize = db.getConnection();

        const files = fs.readdirSync(__dirname);

        const excludedFiles = ['index.js','.','..'];

        for(const fileName of files){
            if(!excludedFiles.includes(fileName) && (path.extname(fileName) == '.js')){
                const modelFile = require(path.join(__dirname, fileName));
                models[modelFile.getTableName()] = modelFile;
            }
        }
        
        //Verifica para cada modelo que é percorrido pelo forEach se existe uma funçao associate
        //Isso é verificado pela função typeof model.associate
        // ao veirifcar isso injeta na função associate os models
        Object.values(models).forEach(
            model => {
                if(typeof model.associate == 'function'){
                    model.associate(models);
                }
            }
        )
        
        models.sequelize = sequelize;
    }

    return models
})()