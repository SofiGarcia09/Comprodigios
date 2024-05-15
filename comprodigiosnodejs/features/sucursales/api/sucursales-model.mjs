import mysql from 'mysql';
export default class SucursalesModel{
    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bd_comprodigios",
        });
    }
    connect() {
      this.connection.connect();
    }
    closeConnection() {
      this.connection.end();
    }
    
    async getAllSucursales() {
        const query = 'SELECT id, departamento, nombre FROM sucursales';
        try {
          const results = await new Promise((resolve, reject) => {
            this.connection.query(query, (error, results) => {
              if (error) {
                reject(error);
              } else {
                resolve(results);
              }
            });
          });
          return results;
        } catch (error) {
          throw error;
        }
    }

}
