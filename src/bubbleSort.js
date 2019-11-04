
const swap = (list, a, b) => {
    const item = list[b];
    list[b] = list[a];
    list[a] = item;
    return list;
};

export default function bubbleSort(listArg)  {
    const list = Object.assign([], listArg);
    let n = list.length;

    do {
        // console.log(`n1 = ${n}`);

        let highIndex = 0;

        for (let i = 1; i < n; i++){
            if (list[i-1] > list[i]){
                swap(list, i-1, i);
                highIndex = i;
            }
        }
        n = highIndex;
        // console.log(`n2 = ${n}`);
    } while ( n > 1 );
        return list;
};

