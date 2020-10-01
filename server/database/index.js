const path = require ('path');
const fs = require ('fs');
const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (() => {
    let instance;

    function initConnection() {
        let models = {};

        const client = new Sequelize ('bike-finding-db', 'root', 'root1', {
            host: 'localhost',
            dialect: 'mysql'
        });

        function getModels() {
            fs.readdir (path.join (process.cwd (), 'server', 'database', 'models'), (err, files) => {
                if (err) console.log (err);
                files.forEach (file => {
                    const [ modename ] = file.split ('.');
                    models[modename] = (require (path.join (process.cwd (), 'server', 'database', 'models', modename))) (client, DataTypes);
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
                initConnection ()
            }
            return instance;
        }
    }
}) ();
