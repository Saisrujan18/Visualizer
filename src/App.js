/* eslint-disable no-unused-vars */
import './ALLCSS.css';
import react,{ useState}  from 'react';
import start from './shuttle.png';
import stop from './shuttle (1).png';
function App() 
{
	const total_rows=15;
	const total_cols=30;
	const [Grid,UpdateGrid]=useState([
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
		  0, 0, 0
		],
		[
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0
		]
	  ]);
	
	function handleClick(event)
	{
		const where=event.target.id;
		const r=(where-where%1000)/1000;
		const c=where%1000;
		var temp=Grid;
		if(temp[r][c]!==2 && temp[r][c]!==3)
		{
			temp[r][c]=temp[r][c]===1?0:1;
		}
		UpdateGrid(temp);
		if(r===0 && c===0)
		{
			var el=event.target.innerHTML;
			console.log(el);
		}
		// console.log(event);
		// console.log(event.target.outerHTML);
		// event.target.outerHTML="<img class=\"start\" src=\"{stop}\" ></img>";
		// console.log(event.target.outerHTML);
		// event.target.innerHTML="*";
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
				<button className={cl} state={Grid[r][c]} onClick={handleClick} id={ide} ><img src={start} id="2" className="start" alt="s"></img></button>
			);
		}
		else if(r===14 && c===29)
		{
			return(
				<button className={cl} state={Grid[r][c]} onClick={handleClick} id={ide} ><img src={stop} id="3" className="start" alt="s"></img></button>
			);
		}
		else
		{
			return(
				<button className={cl} state={Grid[r][c]} onClick={handleClick} id={ide} >.</button>
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
				{/* {DISPLAY(15)} {DISPLAY(16)}{DISPLAY(17)}{DISPLAY(18)}{DISPLAY(19)} */}
				{/* {DISPLAY(20)} {DISPLAY(21)}{DISPLAY(22)}{DISPLAY(23)}{DISPLAY(24)} */}
				
			</div>
		);
	}
  	return (
		<div className="App">
			
			{show()}
			<div className="button">
				<button className="buttons">Dijkstra</button>
				<button className="buttons">BFS</button>
				<button className="buttons">DFS</button>
				<button className="buttons">Clear Grid</button>
			</div>
    	
		</div>
  	);
}
export default App;