const { Database } = require('beta.db');

const db = new Database('inline.json');
const get = require('lodash/get');
class Client {
constructor() {
    this.version = require("../package.json").version;
    this.methods = [
     "get",
"fetch",
      "set",
      "add",
      "subtract",
"push",
"all",
"createBackup",
"loadBackup",
"deleteKey"
    ];
};
/**
   * Fetch a value
   * @param  key
   * @param value
   * @example db.get('key')
   * @returns value
   */
  async get(key) {

      const getquery = db.get(key)
return getquery;

};
/**
   * Fetch a value
   * @param  key
   * @param value
   * @example db.fetch('key')
   * @returns value
   */
    async fetch(key) {
      const getquery = db.get(key)
return getquery;
}
/**
   * Sets a value to a spefic key
   * @param  key
   * @param value
   * @example db.set('key', 'value')
   * @returns value
   */
	
  async set(key, value) {
        if(!value) throw new Error('No value was given')
    db.set(key, value)
}
/**
   * Add a value to a spefic key
   * @param  key
   * @param value
   * @example db.add('key', 1)
   * @returns 1
   */
  async add(key, value) {
    if(!value) throw new Error('No value was given')
    if(!value === Number) throw new Error('The value must be a number')
   db.add(key, value) 
  }
  /**
   * Substract a value to a spefic key
   * @param  key
   * @param value
   * @example db.substract('key', 1)
   * @returns 1
   */
  async substract(key, value) {
        if(!value) throw new Error('No value was given')
        if(!value === number) throw new Error('The value must be a number')
    db.substract(key, value) 
  }
    /**
   * Push a value to a spefic key
   * @param  key
   * @param value
   * @example db.push('key', 'value')
   * @returns value
   */
  async push(key, value)  {
       if(!value) throw new Error('No value was given')
        if(!value === string) throw new Error('The value must be a string')
    db.push(key, value) 
  }
  	/**
   * Fetches all data from the database
   * @example db.all()
   */
  async all() {
    const ok = db.all();
    return ok;
  }
  	/**
   * Creates a backup of the data
   * @example db.createBackup()
   
   */
async createBackup() {
db.setBackup('backup.json')
}
 	/**
   * Loads a backup of the data
   * @example db.loadBackup()
   
   */
  async loadBackup() {
db.loadBackup();
}
/**
 * @param key
 * @example db.deleteKey('key')
 */
async deleteKey(key) {

db.delete(key)



}
}
  

module.exports = Client;