function ArrayRank(ArrayA) {
    if (Array.isArray(ArrayA)) {
        return ArrayRank(ArrayA[0]) + 1;
    }
    else {
        return 0;
    }
}

function ArrayShallowComparison(ArrayA, ArrayB) {
    if (ArrayA.length != ArrayB.length) {
        return false;
    }
    for (let i = 0; i < ArrayA.length; i++) {
        if (ArrayA[i] != ArrayB[i]) {
            return false;
        }
    }
    return true;
}

function ArrayShape(ArrayA) {
    if (!Array.isArray(ArrayA) || ArrayA.length == 0) {
        return [];
    }
    ComparisonShape = ArrayShape(ArrayA[0])
    for (let i = 1; i < ArrayA.length; i++) {
        
    }
}
