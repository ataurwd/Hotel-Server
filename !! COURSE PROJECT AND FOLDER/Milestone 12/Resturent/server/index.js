require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000;

app.get('/', async (req, res) => { 
    res.send('Server is running...')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4jm04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
      await client.db("admin").command({ ping: 1 });

    const newVisaCollections = client.db('bistroResturent').collection('resturent');
    const cartCollection = client.db('bistroResturent').collection('carts')

      app.get('/resturent', async (req, res) => { 
          const resturent = await newVisaCollections.find().toArray();
          res.json(resturent)
      })
    
    //to post cart item
    app.post('/cart', async (req, res) => {
        const cartItem = req.body;
        const result = await cartCollection.insertOne(cartItem);
        res.send(result)
    })

    // to get cart item
    app.get('/carts', async (req, res) => {
        const cartItems = await cartCollection.find().toArray();
        res.json(cartItems)
    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);


app.listen(port)

//resturant345k
//2mn9HRZHNTMs9RVB