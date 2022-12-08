import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Put to the database');
  const jateDb = await openDB('jate, 1');
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ id: 1, value: content});
  const result = await request;
  console.log('Data saved onto the database', result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate, 1');
  const tx = jateDb.transaction('jate', 'readonly');
  const objStore = tx.objectStore('jate');
  const req = store.get(1);
  const res = await req;
  console.log('data saved to the jateDB', res);
  // if result cannot be accessed, it returns undefined instead of throwing an error.
  return result?.value;
};


initdb();
