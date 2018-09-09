const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.static('public'));

const routes = {
  business: require("./routes/business")
}

app.use("/business", routes.business)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))