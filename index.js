const { resolve } = require("path")
const buildTree = require('./src/builder')
const { readInputFile, writeOutputFile, printHelp } = require('./src/io')

async function run(inputFilename, outputFilename) {
    console.log('Generating tree...')
    
    const input = await readInputFile(inputFilename)
    const tree = buildTree(input)
    await writeOutputFile(tree, outputFilename)

    console.log('Done.')
    console.log(`\nOutput: ${resolve(outputFilename)}`)
}

const args = process.argv.slice(2);

if (args.length === 0) {
    printHelp()
    return
}

run(args[0], args[1] || 'tree.json')