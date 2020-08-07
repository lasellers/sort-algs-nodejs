
/*
function sort(ratings) {
    let swapCount = 0;
    let partition = ratings.length - 1;
    do {
        //let sub = ratings.slice(0, partition);
        //let minV = Math.min(...sub);
        //let index = sub.findIndex(el => el == minV);
        let minV = ratings[0];
        let index = 0;
        for (let i = 0; i <= partition; i++) {
            if (ratings[i] < minV) {
                index = i;
                minV = ratings[i];
            }
        }

        const a = ratings[index];
        const b = ratings[partition];
        if (a < b) {
            ratings[index] = b;
            ratings[partition] = a;
            swapCount++;
        }
        //  console.log(swapCount, ratings);
        console.log('*' + swapCount);
    } while (--partition > 0);
    return swapCount;
}

*/