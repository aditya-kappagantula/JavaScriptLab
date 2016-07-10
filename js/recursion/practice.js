/**
 * Print the dependencies of a.
 * Input: 'a'
 * Output: ['b', 'c', 'd', 'e', 'f']
 */

let data = {
    'a':['b', 'c', 'd'],
    'b':['e', 'f'],
    'c':['f', 'd'],
    'd':['e'],
    'e':['f']
}
let dependencies = [];
function getDependencies(aValue) {
    if (!data[aValue] || data[aValue].length === 0) {
        return;
    }
    for (let i=0; i< data[aValue].length; i++) {
        dependencies.push(data[aValue][i]);
        getDependencies(data[aValue][i]);
    }
}
getDependencies('a');
