// Here a simple in-memory approach is used for R/W due to the nature
// of sample datasets. In a real scenario, with large datasets, a more
// reliable solution should take advantage of read / write streams to 
// keep memory usage under control.
const fs = require('fs').promises

async function readInputFile(inputFilename) {
    const input = await fs.readFile(inputFilename)
    return JSON.parse(input)
}

async function writeOutputFile(tree, outputFilename) {
    const output = JSON.stringify(tree, null, 2)
    return fs.writeFile(outputFilename, output)
}

function printHelp() {
    console.log('node-tree')
    console.log('\nRun it as:')
    console.log('$ npm start <input_filename> [<output_filename>]')
    console.log('\nExample:')
    console.log('$ npm start test/inputs/t1.json out.json')
}

module.exports = {
    readInputFile,
    writeOutputFile,
    printHelp
}