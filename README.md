# node-tree

> An exercise about building an ordered tree from an unsorted list of nodes

## Introduction

This tool allows to generate a tree from a flat list of unsorted nodes like the
following:

```json
[
  {
    "nodeId": "2",
    "name": "Four",
    "parentId": "1",
    "previousSiblingId": "3"
  },
  {
    "nodeId": "1",
    "name": "One",
    "parentId": null,
    "previousSiblingId": null
  },
  {
    "nodeId": "3",
    "name": "Three",
    "parentId": "1",
    "previousSiblingId": null
  }
]
```

## Getting started

In order to execute this program, you need at least `Node.js >= 16.x`.

```bash
$ npm i

$ npm start <input_filename> [<output_filename>]

# e.g.
$ npm start test/inputs/t1.json
```

## Testing

The test suite can be executed with the following command:

```bash
$ npm test
```

## License

Copyright (c) Emanuele Bertoldi

MIT License

