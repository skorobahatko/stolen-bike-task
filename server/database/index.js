const path = require ('path');
const fs = require ('fs');
const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (() => {
    let instance;

    function initConnection() {
        let models = {};

        const client = new Sequelize ('bike-stolen-task', 'root', 'root1', {
            host: 'localhost',
            dialect: 'mysql'
        });

        function getModels() {
            fs.readdir (path.join (process.cwd (), 'database', 'models'), (err, files) => {
                // if (err) console.log (err);
                files.forEach (file => {
                    const [ modelname ] = file.split ('.');
                    models[modelname] = (require (path.join (process.cwd (), 'database', 'models', modelname))) (client, DataTypes);
                    console.log (models)
                })
            })
        }

        return {
            setModels: () => getModels (),
            getModel: (modelname) => models[modelname]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection ()
            }
            return instance;
        }
    }
}) ();
