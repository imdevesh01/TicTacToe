var arr= [0, 0, 0, 0, 0,0,0,0,0];
var o=0;
var l=0;
$(".reset").click(function(){
for(var i=1;i<=9;i++)
{
    o=0;
    l=0;
    arr[i-1]=0;
    $("#b"+i).html("");
    $(".result").html("");
}

});

$(".box").click(function(){
    var x=this.id[1];
    
    if(arr[x-1]==0)
    {
        //alert(x);
        var xx="#b"+x;
        if(l==0){

            l=1;
            arr[x-1]=1;
            $(xx).html("<img src='images/cross.png' height='100px'>");
        }
        else{
            l=0;
            arr[x-1]=-1;
            $(xx).html("<img src='images/circle.png' height='100px'>");
        }

        check1();
        check2();
    }
});

function check1(){
    var z=0;
    if(arr[0]==arr[1]&&arr[1]==arr[2]&&arr[1]!=0){
        mod(arr[1]);
    }
    else if(arr[3]==arr[4]&&arr[4]==arr[5]&&arr[4]!=0){
        mod(arr[4]);
    }
    else if(arr[6]==arr[7]&&arr[7]==arr[8]&&arr[7]!=0){
        mod(arr[7]);
    }
    else if(arr[0]==arr[3]&&arr[3]==arr[6]&&arr[3]!=0){
        mod(arr[3]);
    }
    else if(arr[1]==arr[4]&&arr[4]==arr[7]&&arr[4]!=0){
        mod(arr[4]);
    }
    else if(arr[2]==arr[5]&&arr[5]==arr[8]&&arr[8]!=0){
        mod(arr[8]);
    }
    else if(arr[0]==arr[4]&&arr[4]==arr[8]&&arr[4]!=0){
        mod(arr[4]);
    }
    else if(arr[2]==arr[4]&&arr[4]==arr[6]&&arr[4]!=0){
        mod(arr[4]);
    }
    
}

function check2(){
    var gg=0;
    for(var i=0;i<9;i++)
    {
        if(arr[i]==0)
        gg++;
    }
    if(gg==0&&o==0)
    {
        $(".result").html("<h3>Its a Draw!!</h3>");
    }
}

function mod(z){
    for(var i=0;i<9;i++){
        arr[i]=1;
    }
    o=1;
    if(z==1){
        $(".result").html("<h3>Player 1 wins the game</h3>");
    }
    else{
        $(".result").html("<h3>Player 2 wins the game</h3>");
    }

}

//pehle check karna hoga har ek pattern ki kya kya case pe koi jeetega and fir uske baad agar koi jeet jata hai to array me har ek index ko ek value deni hogi and winner announce karna hoga