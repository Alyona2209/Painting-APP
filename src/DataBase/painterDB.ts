
const DB_NAME = 'PAINTER';
const DB_Version = 1;


export class PainterDB {
    db: IDBDatabase;
    currentObjectStoreName: string = '';

    init (objectStoreName: string, allOSNames?: Array<string>) {
        return new Promise((resolve, reject) => {
            let openRequest: IDBOpenDBRequest = indexedDB.open(DB_NAME, DB_Version);
            openRequest.onerror = err => reject(err);
            openRequest.onsuccess = async () => {
                this.db = openRequest.result;
                this.currentObjectStoreName = objectStoreName;
                resolve(this.db);
            };
            openRequest.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                //@ts-ignore
                let db: IDBDatabase = event.target.result;
                if (allOSNames) {
                    for (let objectStoreName of allOSNames) {
                        db.createObjectStore(objectStoreName, {
                            autoIncrement: true
                        });
                    }
                } else {
                    db.createObjectStore(objectStoreName, {
                        autoIncrement: true
                    });
                }

            };
        });
    }


    getAll (): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            let transaction: IDBTransaction = this.db.transaction([this.currentObjectStoreName], 'readonly');
            let objectStore: IDBObjectStore = transaction.objectStore(this.currentObjectStoreName);
            let request: IDBRequest = objectStore.getAll();
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }

    get (key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let transaction: IDBTransaction = this.db.transaction([this.currentObjectStoreName], 'readonly');
            let objectStore: IDBObjectStore = transaction.objectStore(this.currentObjectStoreName);
            let request: IDBRequest = objectStore.get(key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }

    add (item: any, key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let transaction: IDBTransaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore: IDBObjectStore = transaction.objectStore(this.currentObjectStoreName);
            let request: IDBRequest = objectStore.add(item, key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }

    put (value: any, key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let transaction: IDBTransaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore: IDBObjectStore = transaction.objectStore(this.currentObjectStoreName);
            let request: IDBRequest = objectStore.put(value, key);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }



    delete (id) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([this.currentObjectStoreName], 'readwrite');
            let objectStore = transaction.objectStore(this.currentObjectStoreName);
            let request = objectStore.delete(id);
            request.onerror = err => reject(err);
            request.onsuccess = () => resolve(request.result);
        });
    }

}
