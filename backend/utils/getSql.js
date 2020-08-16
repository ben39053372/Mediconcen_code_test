const fs = require('fs')

module.exports =  (module, method) => {
  return fs.readFileSync(`./sql/${module}/${module}.${method}.sql`).toString()
}

