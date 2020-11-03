const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// routes
const postRoutes = require('./routes/posts');
const cors = require('cors');
const app = express();
// middlewre routes
// the first parameter is going to add a prefix tox  the postRoutes and
// make the /posts the default ergo the ("/")
app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Mr_Almond:projektor@cluster0.u9qly.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001;
// mongoose.connect is a function that accepts 2 different parameters
// the MongodDB connection path and an object with 2 property to avoid
// some warnings in the console
// mongoose.connect returna promise
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((data) => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`); // eslint-disable-line no-console
    }
  );
})
.catch(error => {
  console.log(error)
  console.error(error.message)
});
mongoose.set('useFindAndModify', false);

