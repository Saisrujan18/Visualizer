/* eslint-disable no-unused-vars */
import './ALLCSS.css';
import React,{ useState,useEffect}  from 'react';
import start from './ss.PNG';
import visited from './v2.PNG';
import way from './way.PNG';
import noway from './wall.jpg';
import stop from './ss.PNG';


class App extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.state={
			Grid: [
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
		  ],
		  Busy:false,
		  path:[],
		  dfstack:[]
		};
		this.handleClick=this.handleClick.bind(this);
		this.clearg=this.clearg.bind(this);
		
		this.DFSI=this.DFSI.bind(this);
		this.DFS=this.DFS.bind(this);
		this.Innerwhile=this.Innerwhile.bind(this);
	}

	handleClick(event)
	{
		// console.log(this.state);
		if(this.state.Busy===true)return;
		const where=event.target.id;
		
		const r=(where-where%1000)/1000;
		const c=where%1000;
		
		if(r===0 && c===0)return;
		if(r===14 && c===29)return;
		
		let temp=this.state.Grid;
		if(temp[r][c]===1){temp[r][c]=0;}
		else {temp[r][c]=1;}
		this.setState({Grid:temp});
		// console.log(this.state.Grid);
		if(event.target.src===noway){event.target.src=way;}
		else{event.target.src=noway;}
	}

	DIP(r,c)
	{
		let row=r.toString();
		let col=c.toString();
		let cl="sin cell-"+row+"-"+col;
		let ide=r*1000+c;
		if(r===0 && c===0)
		{
			return(
				<img src={start} alt="start" className="start" id={ide} onClick={this.handleClick}></img>
			);
		}
		else if(r===14 && c===29)
		{
			return(
				<img src={stop} alt="stop" className="stop" id={ide} onClick={this.handleClick}></img>
			);
		}
		else
		{
			return(
				<img src={way} alt="nowall" className="nowall" id={ide} onMouseOver={this.handleClick}></img>
			);
		}
	}
	DISPLAY(rwindex)
	{
		return(
			<div className="row">
				{this.DIP(rwindex,0)}{this.DIP(rwindex,1)}{this.DIP(rwindex,2)}						
				{this.DIP(rwindex,3)}{this.DIP(rwindex,4)}{this.DIP(rwindex,5)}						
				{this.DIP(rwindex,6)}{this.DIP(rwindex,7)}{this.DIP(rwindex,8)}						
				{this.DIP(rwindex,9)}{this.DIP(rwindex,10)}{this.DIP(rwindex,11)}						
				{this.DIP(rwindex,12)}{this.DIP(rwindex,13)}{this.DIP(rwindex,14)}						
				{this.DIP(rwindex,15)}{this.DIP(rwindex,16)}{this.DIP(rwindex,17)}						
				{this.DIP(rwindex,18)}{this.DIP(rwindex,19)}{this.DIP(rwindex,20)}						
				{this.DIP(rwindex,21)}{this.DIP(rwindex,22)}{this.DIP(rwindex,23)}						
				{this.DIP(rwindex,24)}{this.DIP(rwindex,25)}{this.DIP(rwindex,26)}						
				{this.DIP(rwindex,27)}{this.DIP(rwindex,28)}{this.DIP(rwindex,29)}						
			</div>
		);
	}

	 show()
	{
		return(
			<div className="grid">
				{this.DISPLAY( 0)} {this.DISPLAY( 1)}{this.DISPLAY( 2)}{this.DISPLAY( 3)}{this.DISPLAY(4)}
				{this.DISPLAY( 5)} {this.DISPLAY( 6)}{this.DISPLAY( 7)}{this.DISPLAY( 8)}{this.DISPLAY(9)}
				{this.DISPLAY(10)} {this.DISPLAY(11)}{this.DISPLAY(12)}{this.DISPLAY(13)}{this.DISPLAY(14)}
			</div>
		);
	}

	clearg()
	{
		if(this.state.Busy===true)return;

		let temp=this.state.Grid;
		for(let i=0;i<15;i++)
		{
			for(let j=0;j<30;j++)
			{
				if(i===0 && j===0){continue;}
				if(i===14 && j===29){continue;}
				temp[i][j]=0;
				let ide=i*1000+j;
				document.getElementById(ide).src=way;
			}
		}
		temp[0][0]=2;
		temp[14][29]=3;
		document.getElementById(0).src=start;
		this.setState({Grid:temp});
		// console.log(this.state.Grid);
	}

	DFSI()
	{
		this.setState({Busy:true});
		this.DFS(0,0);	
		this.setState({Busy:false});
	}
	//  DFS(i,j)
	// {
	// 	// console.log(Grid);
	// 	// setTimeout( ()=>
	// 	// {
			
	// 		if(i<0 || i>14 || j<0 || j>29)return;
	
	// 		if(this.state.Grid[i][j]===3)
	// 		{
	// 			document.getElementById(0).src=stop;
	// 			return;
	// 		}
			
	// 		if(this.state.Grid[i][j]===0 || this.state.Grid[i][j]===2)
	// 		{
				
	// 			if(this.state.Grid[i][j]!==2)
	// 			{
	// 				document.getElementById(i*1000+j).src=visited;
	// 			}
	// 			var g=[];
	// 			for(var itr=0;itr<15;itr++)
	// 			{
	// 				var temp=[];
	// 				for(var it=0;it<30;it++)
	// 				{
	// 					temp.push(this.state.Grid[itr][it]);
	// 				}
	// 				g.push(temp);
	// 			}
	// 			g[i][j]=10;
	// 			// console.log(g);
	// 			this.setState({Grid:g});

	// 			this.DFS(i,j+1);
	// 			// this.DFS(i+1,j);
	// 			// this.DFS(i-1,j);
	// 			// this.DFS(i,j-1);
	// 		}
	// 	// },
	// 	// 90);
	// }

	Innerwhile(sstack)
	{
		var stack=sstack;

		var s= stack[stack.length-1];
		stack.pop();
		
		var r=(s-s%1000)/1000;
		var c=s%1000;
		
		var val=this.state.Grid[r][c];

		if(val===3)
		{
			// done=true;
			// returns.push(stack);
			// returns.push(done);
			// return returns;
			// this.setState({dfstack:[]});
			return []; 
		}
		if(val===10 || val===1)
		{
			// returns.push(stack);
			// returns.push(done);
			// return returns;
			// this.setState({dfstack:stack});
			return stack;
		}

		let temp=this.state.Grid;
		temp[r][c]=10;
		this.setState({Grid:temp});
		document.getElementById(r*1000+c).src=visited;

		if(r<14){stack.push(r*1000+c+1000);}
		if(c<29){stack.push(r*1000+c+1);}
		// returns.push(done);
		// this.setState({dfstack:stack});
		return stack;
	}

	DFS()
	{
		var stack =[];
		// this.setState({dfstack:[]});
		stack.push(0);
		// console.log(this.state.);
		while(stack.length!==0)
		{
			// this.setState({dfstack:stack});
			// console.log(this.dfstack);
			// setTimeout(this.Innerwhile(),90);
			stack=this.Innerwhile(stack);
			// stack=this.state.dfstack;
			// console.log(stack);

			// var s= stack[stack.length-1];
			// stack.pop();
			// r=(s-s%1000)/1000;
			// c=s%1000;
			// var val=this.state.Grid[r][c];

			// if(val===3){break;}
			// if(val===10){continue;}
			// if(val===1){continue;}

			// let temp=this.state.Grid;
			// temp[r][c]=10;
			// this.setState({Grid:temp});
			// document.getElementById(r*1000+c).src=visited;

			// if(r<14){stack.push(r*1000+c+1000);}
			// if(c<29){stack.push(r*1000+c+1);}
		}
	}

	render()
	{
		return (
			<div className="App">
				
				{this.show()}

				<div className="button">
					<button className="buttons">Dijkstra</button>
					<button className="buttons">BFS</button>
					<button className="buttons" onClick={this.DFS}>DFS</button>
					<button className="buttons" onClick={this.clearg}>Clear Grid</button>
				</div>
			
			</div>
		);
	}
}
export default App;