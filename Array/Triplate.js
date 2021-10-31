let sumToZero = () =>
{
    console.log("find sum of three digits add to zero");
    let digitsArr = [0, -1, 2, -3, 1];
    let length = digitsArr.length;
    let flag = false;
    for(let i=0;i<length-2;i++)
    {
        for(let j=i+1;j<length-1;j++)
        {
            for(let k=j+1;k<length;k++)
            {
                if(digitsArr[i]+digitsArr[j]+digitsArr[k] ==0)
                {
                    console.log(`${digitsArr[i]}, ${digitsArr[j]}, ${digitsArr[k]}`);
                    flag=true;
                }
            }
        }
    }
    if(flag==false)
    {
        console.log("Not Exists");
    }
}