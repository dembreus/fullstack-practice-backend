import { send, json } from 'micro'
import { router, get, post, put, del } from 'microrouter'
const cors = require('micro-cors')()
import people from './db/people'


export default cors(router(
    get('/', async (req,res) => {
        const results = await people.find({})
        await send(res, 200, results)
    }),

    post('/', async (req,res) => {
        console.log(`Im called`)

        const person = await json(req)
        const result = await people.insert(person)
        return send(res, 201, result)
    })
))