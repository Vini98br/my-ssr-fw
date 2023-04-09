import express from 'express';
import render from './render';

const app = express();

app.get('/', (req, res) => {
  render(res)
})
app.use(express.static('build'))
app.use(express.static('public'))

const port = 3000

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})