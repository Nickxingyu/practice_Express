const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/public',express.static('practice_yiyi_image'));
app.listen(3000, () => console.log('Example app listening on port 3000!'))