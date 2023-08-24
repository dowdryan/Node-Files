const fs = require('fs') // import fs(file system)
const process = require('process')
const axios = require('axios')

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}: 
            ${err}`)
            process.exit(1)
        } else {
            console.log(data)
        }
    })
}

async function webCat(url) {
    try {
        let response = await axios.get(url)
        console.log(response.data) // Returns HTML
    } catch(err) {
        console.error(`Error reading: ${url}:
        ${err}`)
        process.exit(1)
    }
}

// Determines if argument given is a url or file path
let arg = process.argv[2]
if (arg.slice(0,4) === 'http') {
    webCat(arg)
} else {
    cat(arg)
}

