/**
 * Suppose you're searching for a person with a name Raphael,
 * their name starts with R, right? You need a way to find fast
 * the name on the middle of the database.
 */
function binarySearchNumbers(list:number[], value:number):number{
    let low: number = 0;
    let high: number = list.length -1;

    while(high >= low){
        let mid:number = low + high;
        let guess:number = list[mid];
        
        if(guess === value) 
            return mid;
        else if(guess > value){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return undefined;
}

const list:number[] = [1,2,3,4,5,6,7,8,9,10];
const indexFinded: number = binarySearchNumbers(list, 10);
console.log(indexFinded);