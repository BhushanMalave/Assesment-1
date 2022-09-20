let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];
let counta,countb,inda,indb;
let temp;
const sort = (a) => {


     for(let i=0;i<a.length;i++){
        temp = a[i];
        counta = (a.filter((n) => n == temp)).length;
        //console.log(counta)
        for(let j=0;j<a.length;j++)
        {
            temp = a[j];
            countb = (a.filter((n) => n == temp)).length;
            //console.log(countb)
            if(a[i] < a[j])
            {      
                //   if(counta < countb){
                //   temp = a[i];
                //   a[i] = a[j];
                //   a[j] = temp;
                //   }
                //   if(counta === countb)
                //   {
                //     if(i < j){
                //         temp = a[i];
                //         a[i] = a[j];
                //         a[j] = temp;
                //     }
                //   }
                temp = a[i];
                a[i]=a[j];
                a[j]=temp;
            }
            
        }
     
}
return a;
}

console.log(sort(arr));
