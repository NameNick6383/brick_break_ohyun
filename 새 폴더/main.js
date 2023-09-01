const RanN = Math.floor(Math.random()*100);
let HP = 5;
function sumit()
{
    let ans = document.getElementById('yourans');
    
    if(HP<=0)
    {
        document.write("실패!");
    }
    else if(ans.value > RanN)
    {
        alert("너무 커");
        HP--;
    }
    else if(ans.value < RanN)
    {
        alert("너무 작아");
        HP--;
    }
    else if(ans.value == RanN)
    {
        alert("정답");
        alert(`남은 기회 : ${HP}`);
    }
}