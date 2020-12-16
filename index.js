// Code your solution here
// function findMatching(array, string) {
//     return array.filter(function(e) {
//         return e.toLowerCase() === string.toLowerCase()
//     })
// }

findMatching = (array, string) => {
    return array.filter(e => {
        return e.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(e => {
        return e.startsWith(string)
    })
}

// fuzzyMatch = (drivers, string) => {
//     return drivers.filter(e => {
//         return e.startsWith(string)
//     })
// }

// function matchName(drivers, string) {
//     return drivers.filter(function (e) {
//         return e.name === string
//     })
// }

function matchName(drivers, string) {
    return drivers.filter(e => e.name === string)
}

