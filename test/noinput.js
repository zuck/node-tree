const t = require('tap')
const buildTree = require('../src/builder')

const tree = buildTree()

t.same(tree, [], 'test without input shuld not fail')