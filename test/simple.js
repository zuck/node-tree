const t = require('tap')
const buildTree = require('../src/builder')
const input = require('./inputs/t1.json')
const expectedTree = require('./outputs/t1.json')

const tree = buildTree(input)

t.same(tree, expectedTree, 'test with single tree root node')