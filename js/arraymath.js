export function ArrayRank(ArrayA) {
    if (Array.isArray(ArrayA)) {
        return ArrayRank(ArrayA[0]) + 1;
    }
    else {
        return 0;
    }
}

export function ArrayShallowComparison(ArrayA, ArrayB) {
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

export function ArrayShape(ArrayA) {
    if (!Array.isArray(ArrayA) || ArrayA.length == 0) {
        return [];
    }
    let ComparisonShape = ArrayShape(ArrayA[0])
    for (let i = 1; i < ArrayA.length; i++) {
        if (!ArrayShallowComparison(ArrayShape(ArrayA[i]), ComparisonShape)) {
            throw "arraymath.js, ERROR 0, ArrayShape, INVALID ARRAY SHAPE.";
        }
    }
    return [ArrayA.length].concat(ComparisonShape);
}

export function ArrayElementWise(ArrayA, ArrayB) {
    let RankA = ArrayRank(ArrayA);
    let RankB = ArrayRank(ArrayB);
    for (let i = 0; i < (RankB - RankA); i++) {
        ArrayA = [ArrayA];
    }
    for (let i = 0; i < (RankA - RankB); i++) {
        ArrayB = [ArrayB];
    }
}
