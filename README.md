# ✨ Pegasus DB

[![downloadsBadge](https://img.shields.io/npm/dt/pegasus.db?style=for-the-badge)](https://npmjs.com/pegasus.db)
[![versionBadge](https://img.shields.io/npm/v/pegasus.db?style=for-the-badge)](https://npmjs.com/pegasus.db)
 
 
 # Features
- 🔋 Backup system
- 🔌 Simple And Easy To Get Started
- 🚀 Super-powerful
- 🕸️ User Friendly
# 📌 Installation
```bash
npm i pegasus.db
```
# 🔋 Examples

```js
const Database = require('pegasus.db')
const db = new Database.Client();
db.get('key') // fetch something from the db
db.fetch('key') //fetch something from the db
db.set('key', 'nothing') // set something in the db
db.add('key', 1) //add something to the db
db.substract('key', 1) //substract something from db
db.push('key', 'value to push'); // Pushing a value to the db
db.all(); // Fetches everything in the database
db.createBackup(); //create backup
db.loadBackup(); //load backup
db.deleteKey('key') //you can also use a key
```
