const { Database } = require('beta.db');

const db = new Database('pegasus.json');

/**
 *
 *
 * @class Client
 */
class Client {
constructor() {
this.get = (key) => {
return db.get(key)
}
this.fetch = (key) => {
return db.get(key)
}
this.set = (key, value) => db.set(key, value)
this.add = (key, value) => db.add(key, value)
this.substract = (key, value) => db.substract(key, value)
this.push = (key, value) => db.push(key, value)
this.createBackup = () => db.setBackup('backup.json')
this.loadBackup = () => db.loadBackup();
this.delete = (key) => db.deleteKey(key);
this.all = () => db.all();
};
/**
   * Fetch a value
   * @param  key
   * @param value
   * @example db.get('key')
   * @returns value
   */
  async get(key) {

  this.get(key)
};
/**
   * Fetch a value
   * @param  key
   * @param value
   * @example db.fetch('key')
   * @returns value
   */
    async fetch(key) {
     this.fetch(key)
}
/**
   * Sets a value to a spefic key
   * @param  key
   * @param value
   * @example db.set('key', 'value')
   * @returns value
   */
	
  async set(key, value) {
if(!key) throw new Error('No key was given')
        if(!value) throw new Error('No value was given')
    this.set(key, value)
}
/**
   * Add a value to a spefic key
   * @param  key
   * @param value
   * @example db.add('key', 1)
   * @returns 1
   */
  async add(key, value) {
if(!key) throw new Error('No key was given')
    if(!value) throw new Error('No value was given')
     if (typeof(value) != 'Number') throw new Error('The value must be a number')
   this.add(key, value) 
  }
  /**
   * Substract a value to a spefic key
   * @param  key
   * @param value
   * @example db.substract('key', 1)
   * @returns 1
   */
  async substract(key, value) {
if(!key) throw new Error('No key was given')
        if(!value) throw new Error('No value was given')
        if (typeof(value) != 'Number')  throw new Error('The value must be a number')
    this.substract(key, value) 
  }
    /**
   * Push a value to a spefic key
   * @param  key
   * @param value
   * @example db.push('key', 'value')
   * @returns value
   */
  async push(key, value)  {
if(!key) throw new Error('No key was given')
       if(!value) throw new Error('No value was given')
        if (typeof(value) != 'String') throw new Error('The value must be a string')
   this.push(key, value)
  }
  	/**
   * Fetches all data from the database
   * @example db.all()
   */
  async all() {
  this.all();
  }
  	/**
   * Creates a backup of the data
   * @example db.createBackup()
   
   */
async createBackup() {
return true;
this.createBackup();
}
 	/**
   * Loads a backup of the data
   * @example db.loadBackup()
   
   */
  async loadBackup() {
this.loadBackup();
return true;
}
/**
 * @param key
 * @example db.deleteKey('key')
 */
async deleteKey(key) {

this.delete(key)
return true;



}
}
 module.exports = {
  version: require('./package.json').version,
  Client: Client
} 
