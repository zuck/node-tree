function insertAndSort(node, siblings) {
    // Because the node has no previous sibling, insert it as the first
    // child of its parent.
    if (!node.previousSiblingId) {
        // We can assume a push is always safe here as siblings have been
        // already sorted, so no other sibling can be present in the list
        // before this first one.
        siblings.push(node)
        return siblings
    }

    // Check if the next sibling has been already registered:
    // if so, insert the new node just before it, otherwise append it.
    // NOTE: an insertion sort is used here: while its average time complexity
    // is O(n^2), it doesn't use an additional extra array to perform the
    // sorting. On small, already sorted list it can perform with O(n).
    const idx = siblings.findIndex(n => n.previousSiblingId === node.nodeId)
    if (idx !== -1) {
        siblings.splice(idx, 0, node)
    } else {
        siblings.push(node)
    }

    return siblings
}

module.exports = function (input) {
    // The builder function will use:
    // - a `tree` array containing only the root nodes;
    // - a `lookup` map to provide a quick lookup of any node during
    //   the tree generation;
    // - a `nodes` array, as a clone of the `input` one. This is used to enforce
    //   the immutability of the input dataset. In a real scenario, with large
    //   input datasets, this could be sacrificed to reduce memory usage.
    const tree = []
    const lookup = new Map()
    const nodes = [...(input || [])]

    // First of all, sort all nodes by parent and sibling in order to:
    // - avoid null references when looking for node parent on the next step;
    // - improve performance of insertion sort used to distribute children
    nodes.sort((a, b) => {
        if (a.parentId === b.parentId) {
            return a.previousSiblingId - b.previousSiblingId
        }
        return a.parentId - b.parentId
    })

    // Then, iterate over all sorted nodes, putting those without a parent
    // as a root node of the final tree and adding the others to the (added)
    // `children` array of their parent node.
    for (node of nodes) {
        // We can add the `children` attribute inline here as `node` has been
        // already cloned and the sort step guarantees it will be touched before
        // all of its child nodes.
        node.children = []

        // Now simply register the node in the lookup map for the next iteration
        // and check for the correct parent node (if any). As we're working with
        // objects, they will be accessed by reference so no memory duplication
        // is involved here.
        lookup[node.nodeId] = node
        const siblings = node.parentId
            ? lookup[node.parentId].children
            : tree

        // Insert the node in the siblings list and sort it.
        insertAndSort(node, siblings)
    }

    return tree
}