const t = require('tap')
const buildTree = require('../src/builder')
const input = require('./inputs/t2.json')
const expectedTree = require('./outputs/t2.json')

const tree = buildTree(input)

t.same(tree, expectedTree, 'test with several tree root nodes')