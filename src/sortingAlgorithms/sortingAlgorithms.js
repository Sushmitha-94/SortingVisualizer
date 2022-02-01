export function getHeapSortanimations(array){
    const animations = [];  
    let n = array.length;
    if(n <=1) return array;
    heapSortHelper(array,n,animations);
    return animations;
}

function heapSortHelper(array, n, animations){

    for(let i = Math.floor( n/ 2 ) - 1; i >= 0 ; i--){
        heapify(array, n, i,animations);
    }

    for(let i = n-1; i>=0; i--){
        swap(array , i,0);
        animations.push({'pos' : 'inPos','idx':[i,array[i]]});
        animations.push({'pos' : 'inPos','idx':[0,array[0]]});
        heapify(array, i, 0, animations);
    }
}

function heapify(array, n, i,animations){
    
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if(l < n && array[l]>array[largest])
        largest = l;

    if(r < n && array[r]>array[largest])
        largest = r;

    if(largest != i){        
        swap(array, i, largest);
        animations.push({'pos' : 'inPos','idx':[i,array[i]]});
        animations.push({'pos' : 'notInPos','idx':[largest,array[largest]]});
        heapify(array, n, largest, animations);
    }

    console.log('inside heapify');
}


export function getInsertionSortanimations(array){
    const animations = [];
    if(array.length <=1 ) return array;
    insertionSortHelper(array, array.length, animations);
    return animations;
}

function insertionSortHelper(array, length, animations){
    let i,k,j;
    for(i=1 ; i< length;i++){
        k = array[i];
        j=i-1;
        
        while(j>=0 && array[j]>k){           
            array[j+1] = array[j];
            animations.push({'pos' : 'notInPos','idx':[j+1,array[j+1]]});
            j=j-1;
        }

        array[j+1] = k;
        animations.push({'pos' : 'notInPos','idx':[j+1,array[j+1]]});
        animations.push({'pos' : 'inPos','idx':[i,array[i]]});
    }
}



export function getBubbleSortanimations(array){
    const animations = [];
    if(array.length <=1 ) return array;
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(array, length, animations){
    for(let i=0 ; i< length;i++){
        for(let j=0 ; j<length-i-1; j++){
            if( array[j] > array[j+1]){
                swap(array, j,j+1);
                animations.push({'pos' : 'notInPos','idx':[j,array[j]]});
                animations.push({'pos' : 'notInPos','idx':[j+1,array[j+1]]});
            }               
        }
        animations.push({'pos' : 'inPos','idx':[length-i-1,array[length-i-1]]});
    }
}

export function getQuickSortanimations(array){
    const animations = [];
    if(array.length <=1 ) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

function quickSortHelper(
    mainArray,
    startI,
    endI,
    animations
){
    if (startI >= endI) {
        animations.push({'pos' : 'inPos','idx':[startI,mainArray[startI]]});
        return;
    }
    
    const pos = quickPartition(mainArray, startI, endI, animations);
    animations.push({'pos' : 'inPos','idx':[pos,mainArray[pos]]});
    animations.push({'pos' : 'notInPos','idx':[endI,mainArray[endI]]});
    quickSortHelper(mainArray, startI, pos-1, animations);
    quickSortHelper(mainArray, pos+1, endI, animations);
}

function quickPartition(
    mainArray,
    startI,
    endI, 
    animations
){
    let i = startI -1 ;
    for(let j=startI; j < endI ; j++){
        if(mainArray[j]<mainArray[endI]){           
            i++;
            swap (mainArray,j,i);
        }
    }

    swap(mainArray,i+1,endI);
    animations.push({'pos' : 'notInPos','idx':[endI,mainArray[endI]]});
    return i+1;
}

function swap(
    mainArray,
    indI,
    indJ,
){
    let temp = mainArray[indI];
    mainArray[indI] = mainArray[indJ];
    mainArray[indJ] = temp;
}


export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
