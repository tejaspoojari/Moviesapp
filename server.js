const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
//const dbName = 'moviesdb';
//const client = new MongoClient(url);
//
//app.use(express.json());
//
//client.connect((err) => {
//  if (err) throw err;
//    console.log('Connected successfully to server');
//    });
//
//    app.post('/add-movie', (req, res) => {
//      const db = client.db(dbName);
//        const collection = db.collection('movies');
//          collection.insertOne(req.body, (err, result) => {
//              if (err) throw err;
//                  console.log(`Movie ${req.body.title} added to the database`);
//                      res.send('Movie added to the database');
//                        });
//                        });
//
//                        app.get('/get-all', (req, res) => {
//                          const db = client.db(dbName);
//                            const collection = db.collection('movies');
//                              collection.find({}).toArray((err, docs) => {
//                                  if (err) throw err;
//                                      res.send(docs);
//                                        });
//                                        });
//
//                                        app.get('/get-single', (req, res) => {
//                                          const db = client.db(dbName);
//                                            const collection = db.collection('movies');
//                                              const id = parseInt(req.query.id);
//                                                collection.findOne({ id: id }, (err, doc) => {
//                                                    if (err) throw err;
//                                                        res.send(doc);
//                                                          });
//                                                          });
//
//                                                          app.get('/get-paginated', (req, res) => {
//                                                            const db = client.db(dbName);
//                                                              const collection = db.collection('movies');
//                                                                const page = parseInt(req.query.page);
//                                                                  const size = parseInt(req.query.size);
//                                                                    const skip = (page - 1) * size;
//                                                                      collection.find({}).skip(skip).limit(size).toArray((err, docs) => {
//                                                                          if (err) throw err;
//                                                                              res.send(docs);
//                                                                                });
//                                                                                });
//
//                                                                                app.listen(port, () => {
//                                                                                  console.log(`Server started on port ${port}`);
//                                                                                  });
//
