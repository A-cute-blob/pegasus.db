export const version: String;

export class Client{
    constructor() 
    public add(key: String, value: Number);
    public substract(key: String, value: Number);
    public push(key: String, value: String);
    public deleteKey(key: String);
    public fetch(key: String);
    public get(key: String);
    public createBackup(file: String);
    public loadBackup();
    public all();
}