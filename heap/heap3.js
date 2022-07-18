// n 是总的节点数  i 是当前要做 heapify 的节点

function heapify(arr, n,i){

   // 递归的出口
   if( i >= n ) return;
   let c1 = 2*i+1;
   let c2 = 2*i+2;
   let largest = i;
   if(c1<n && arr[c1]>arr[largest]){
       largest = c1;
   }

   if(c2<n && arr[c2]>arr[largest]){
         largest = c2;
    }

    if(largest!=i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr,n,largest);
    }

}

function build_heap(arr, n){
    const last_node = n-1;
    const parent = Math.floor((last_node)/2);
    for(let i=parent; i>=0; i--){
        heapify(arr,n,i);
    }
}

// 堆排序原理：将根节点和最后一个节点交换，然后将剩下的数组重新建堆，直到数组长度为1
function heap_sort(arr){
    const n = arr.length;
    build_heap(arr, n);
    for(let i=n-1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}


// insert
// 在堆的最后一个节点上插入一个新的节点，和父节点比较，如果父节点小，则交换，直到父节点大于新节点，或者父节点是根节点
// 重复比较，直到最大堆的特性被满足


// poll
// 移除根节点，将最后元素移到根节点与之比较，如果小于根节点，则交换，直到根节点大于新节点，或者根节点是根节点
// 重复比较，直到最大堆的特性被满足


function main(){
    // let arr = [4,10,3,5,1,2];
    // heapify(arr,arr.length,0);


    // const arr = [1,2,4,10,5,3];
    // build_heap(arr,arr.length);
    // console.log('[ arr ]-30', arr);

    const arr = [1,2,4,10,5,3];
    heap_sort(arr,arr.length);
    console.log('[ arr ]-30', arr);
}

main();