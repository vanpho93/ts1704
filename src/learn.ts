enum MatchResult { Win, Draw, Lose }

function getPoint(result: MatchResult) {
    if (result === MatchResult.Win) return 3;
    if (result === MatchResult.Draw) return 1;
    return 0;
}

console.log(getPoint(MatchResult.Win));
console.log(getPoint(0));

console.log(getPoint(MatchResult.Draw));
console.log(getPoint(1));

console.log(getPoint(MatchResult.Lose));
console.log(getPoint(2));
