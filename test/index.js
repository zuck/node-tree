const t = require('tap')
const buildTree = require('../src/builder')
const input = require('./inputs/nodes.json')
const expectedTree = require('./outputs/expected-tree.json')

const tree = buildTree(input)

t.same(tree, expectedTree, 'test an unsorted array of nodes should generate an ordered tree')