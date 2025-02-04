import {server} from './server'
import {PORT} from './envs/envs'


server.listen(PORT, () => {
    console.log(`server running in port ${PORT} 🚀`)
})