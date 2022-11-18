let turn = false;

let a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
console.log(a[0][0] == a[0][1]);
function placeXO(x)
{
    let r = x.substring(0,1);
    let t = x.substring(1);
    
    if(a[r][t] == 0)
    {
        if(turn)
        {
            document.getElementById(x).innerHTML = "X";
            turn = !turn;
            a[r][t] = 1;
        }
        else
        {
            document.getElementById(x).innerHTML = "O";
            turn = !turn;
            a[r][t] = 2;
        }
    }
    let u = checkWin();
    if(u == 1)
    {
        document.getElementById("ttt").innerHTML = "X WON";
        nextgame().then(reset);
        u=0;
    }
    if(u == 2)
    {
        document.getElementById("ttt").innerHTML = "O WON";
        nextgame().then(reset);
        u=0;
    }
}
function nextgame()
{
    return new Promise(function (resolve, reject)
    {
        setTimeout(() => 
        {
            document.getElementById("ttt").innerHTML = "Play Again??";
            document.getElementById("ttt").onclick = function()
            {
                resolve();
            }
        }, 4000)

    })
}
function reset()
{
    document.getElementById("ttt").innerHTML = "TIC TAC TOE";
    turn = false;
    a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) 
    {
        for (let j = 0; j < 3; j++)
        {
            document.getElementById(`${i}${j}`).innerHTML = "";
        }
    }
}

for (let i = 0; i < 3; i++) 
{
    for (let j = 0; j < 3; j++)     
    {
        document.getElementById(i.toString()+j.toString()).onclick = function()
        {
            placeXO(i.toString()+j.toString());
        }
        console.log(i.toString()+j.toString())
    }
}

// document.getElementById("00").onclick = function()
// {
//     placeXO("00");
// }

function checkWin()
{
    for(let i = 0; i<3; ++i)
    {
        if((a[i][0] == a[i][1]) && (a[i][1] == a[i][2]))
        {
            return a[i][0];
        }
        if((a[0][i] == a[1][i]) && (a[1][i] == a[2][i]))
        {
            return a[0][i];
        }
    }
    if((a[0][0] == a[1][1]) && (a[1][1] == a[2][2]))
    {
        return a[0][0];
    }
    if((a[0][2] == a[1][1]) && (a[1][1] == a[2][0]))
    {
        return a[1][1];
    }
}