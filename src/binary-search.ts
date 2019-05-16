import Debug from 'debug';
import * as np from 'numjs';

const debug = Debug('binary');

/**
 * Suppose you're searching for a person with a name Raphael,
 * their name starts with R, right? You need a way to find fast
 * the name on the middle of the database.
 */
function binarySearch(arr:Array<number|string>, low:number,high:number,toValueFind:number|string, count:number = 0):number{
    debug(count);

    if(high>=low){
        let middle = Math.floor(low + (high - low) /2)

        if(arr[middle] === toValueFind)
            return middle;
        else if(arr[middle] > toValueFind)
            return binarySearch(arr, low, middle - 1, toValueFind, ++count);
        else
            return binarySearch(arr, middle + 1, high, toValueFind, ++count);
    }else
        return -1;
}

const list:np.NdArray = np.arange(24000000);
const indexFinded: number = binarySearch(list.tolist(), 0,list.tolist().length - 1, 20000);
debug(`[FINDEDS: binarySearchNumbers] ${indexFinded}`);

const listString: Array<string> = ['ana','raphael','zebra','willian'];
const indexFindedString: number = binarySearch(listString, 0,listString.length - 1, 'zebra');

debug(`[FINDEDS: binarySearchNumbers] ${indexFindedString}`);