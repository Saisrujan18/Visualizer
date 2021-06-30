/* eslint-disable no-unused-vars */
import './ALLCSS.css';
import react,{ useState}  from 'react';

import start from './ss.PNG';

import visited from './v2.PNG';
import way from './way.PNG';
import noway from './wall.jpg';

import stop from './ss.PNG';


function App() 
{

	const [Grid,UpdateGrid]=useState([
		[
		  2, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 3
		]
	  ]);
	
	const [Busy,Update]=useState(false);

	function handleClick(event)
	{
		if(Busy===true)return;
		const where=event.target.id;

		const r=(where-where%1000)/1000;
		const c=where%1000;

		if(r===0 && c===0)return;
		if(r===14 && c===29)return;
		
		var temp=Grid;
		if(temp[r][c]===1){temp[r][c]=0;}
		else {temp[r][c]=1;}
		UpdateGrid(temp);

		if(event.target.src===noway){event.target.src=way;}
		else{event.target.src=noway;}
	}

	function DIP(r,c)
	{
		var row=r.toString();
		var col=c.toString();
		var cl="sin cell-"+row+"-"+col;
		var ide=r*1000+c;
		if(r===0 && c===0)
		{
			return(
				<img src={start} alt="start" className="start" id={ide} onClick={handleClick}></img>
			);
		}
		else if(r===14 && c===29)
		{
			return(
				<img src={stop} alt="stop" className="stop" id={ide} onClick={handleClick}></img>
			);
		}
		else
		{
			return(
				<img src={way} alt="nowall" className="nowall" id={ide} onMouseOver={handleClick}></img>
			);
		}
	}
	function DISPLAY(rwindex)
	{
		return(
			<div className="row">
				{DIP(rwindex,0)}{DIP(rwindex,1)}{DIP(rwindex,2)}						
				{DIP(rwindex,3)}{DIP(rwindex,4)}{DIP(rwindex,5)}						
				{DIP(rwindex,6)}{DIP(rwindex,7)}{DIP(rwindex,8)}						
				{DIP(rwindex,9)}{DIP(rwindex,10)}{DIP(rwindex,11)}						
				{DIP(rwindex,12)}{DIP(rwindex,13)}{DIP(rwindex,14)}						
				{DIP(rwindex,15)}{DIP(rwindex,16)}{DIP(rwindex,17)}						
				{DIP(rwindex,18)}{DIP(rwindex,19)}{DIP(rwindex,20)}						
				{DIP(rwindex,21)}{DIP(rwindex,22)}{DIP(rwindex,23)}						
				{DIP(rwindex,24)}{DIP(rwindex,25)}{DIP(rwindex,26)}						
				{DIP(rwindex,27)}{DIP(rwindex,28)}{DIP(rwindex,29)}						
			</div>
		);
	}

	function show()
	{
		return(
			<div className="grid">
				{DISPLAY( 0)} {DISPLAY( 1)}{DISPLAY( 2)}{DISPLAY( 3)}{DISPLAY(4)}
				{DISPLAY( 5)} {DISPLAY( 6)}{DISPLAY( 7)}{DISPLAY( 8)}{DISPLAY(9)}
				{DISPLAY(10)} {DISPLAY(11)}{DISPLAY(12)}{DISPLAY(13)}{DISPLAY(14)}
			</div>
		);
	}

	function clearg()
	{
		if(Busy===true)return;

		var temp=Grid;
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<30;j++)
			{
				if(i===0 && j===0){continue;}
				if(i===14 && j===29){continue;}
				temp[i][j]=0;
				var ide=i*1000+j;
				document.getElementById(ide).src=way;
			}
		}
		temp[0][0]=2;
		temp[14][29]=3;
		document.getElementById(0).src=start;
		UpdateGrid(temp);
	}

	function DFSI()
	{
		Update(true);
		DFS(0,0);	
		Update(false);
	}
	const [path,UpdatePath]=useState([]);
	function DFS(i,j)
	{
		setTimeout( ()=>
		{
			
			if(i<0 || i>14 || j<0 || j>29)return;
	
			if(Grid[i][j]===3)
			{
				document.getElementById(0).src=stop;
				return;
			}
			
			if(Grid[i][j]===0 || Grid[i][j]===2)
			{
				
				if(Grid[i][j]!==2)
				{
					document.getElementById(i*1000+j).src=visited;
				}
				var temp=Grid;
				temp[i][j]=10;
				UpdateGrid(temp);
				
				DFS(i+1,j);
				DFS(i,j+1);
				DFS(i-1,j);
				DFS(i,j-1);
			}
		},
		90);
	}
  	return (
		<div className="App">
			
			{show()}
			<div className="button">
				<button className="buttons">Dijkstra</button>
				<button className="buttons">BFS</button>
				<button className="buttons" onClick={DFSI}>DFS</button>
				<button className="buttons" onClick={clearg}>Clear Grid</button>
			</div>
    	
		</div>
  	);
}
export default App;