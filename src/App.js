/* eslint-disable no-unused-vars */
import './ALLCSS.css';
import React,{ useState,useEffect}  from 'react';
import start from './ss.PNG';
import visited from './v2.PNG';
import way from './way.PNG';
import noway from './wall.jpg';
import stop from './ss.PNG';

// import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from './Components/Dijkstra.js';


// import Node from './Components/Node';

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
		  dfstack:[],
		  dfstime:0
		};
		this.handleClick=this.handleClick.bind(this);
		this.clearg=this.clearg.bind(this);
		this.DFSI=this.DFSI.bind(this);
		this.DFS=this.DFS.bind(this);
		this.Innerwhile=this.Innerwhile.bind(this);
		this.animatedfs=this.animatedfs.bind(this);
		this.BFS=this.BFS.bind(this);
		this.Binnerwhile=this.Binnerwhile.bind(this);

		// this.DIJKSTRA=this.DIJKSTRA.bind(this);
	}

	handleClick(event)
	{
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
				<img src={start} alt="start" className="start" id={ide}></img>
			);
		}
		else if(r===14 && c===29)
		{
			return(
				<img src={stop} alt="stop" className="stop" id={ide}></img>
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
		this.DFS();	
		this.setState({Busy:false});
	}
	Innerwhile(sstack,nodes,short)
	{
		var stack=sstack;

		var s = stack[stack.length-1];
		stack.pop();
		
		var r=(s-s%1000)/1000;
		var c=s%1000;
		
		var val=this.state.Grid[r][c];

		if(val===3){return [[],nodes,short]; }
		if(val===10 || val===1){return [stack,nodes,short];}

		let temp=this.state.Grid;
		temp[r][c]=10;
		nodes.push(r*1000+c);
		this.setState({Grid:temp});

		if(r<14){stack.push(r*1000+c+1000);short[r+1][c]=r*1000+c;}
		if(c<29){stack.push(r*1000+c+1);short[r][c+1]=r*1000+c;}
		return [stack,nodes,short];
	}

	animatedfs(nodes,short)
	{
		for(let i=0;i<=nodes.length;i++)
		{
			if(i===nodes.length)
			{
				setTimeout(() =>{this.animateShort(short);}, 20*i);
				return;
			}
			setTimeout(() => 
			{
				const node = nodes[i];
				if(node!==0)document.getElementById(node).src=visited;
			  }, 20 * i);
		}
	}

	animateShort(short)
	{
		for (let i = 0; i < short.length; i++) 
		{
			setTimeout(() => {
			  const node = short[i];
			  document.getElementById(node).src=start;
			}, 100*i);
		}
	}

	DFS()
	{
		var stack =[];
		stack.push(0);
		var answer=[];
		var short=[];
		for(let i=0;i<15;i++)
		{
			var t=[];
			for(let j=0;j<30;j++)
			{
				t.push(-1);
			}
			short.push(t);
		}
		while(stack.length!==0)
		{
			var temp=this.Innerwhile(stack,answer,short);
			stack=temp[0];
			answer=temp[1];
			short=temp[2];
		}
		// console.log(short);
		var inorder=[];
		if(short[14][29]===-1)
		{
			this.animatedfs(answer,inorder);
		}
		else
		{
			var r=14;
			var c=29;
			while(short[r][c]!==0)
			{
				inorder.push(short[r][c]);
				var val=short[r][c];
				r=(val-val%1000)/1000;
				c=val%1000;
			}
			inorder.push(0);
			this.animatedfs(answer,inorder);
		}
	}

	Binnerwhile(q,nodes,short)
	{
		var queue=q;

		var s = queue[queue.length-1];
		queue.pop();
		
		var r=(s-s%1000)/1000;
		var c=s%1000;
		
		var val=this.state.Grid[r][c];

		if(val===3){return [[],nodes,short]; }
		if(val===10 || val===1){return [queue,nodes,short];}

		let temp=this.state.Grid;
		temp[r][c]=10;
		nodes.push(r*1000+c);
		this.setState({Grid:temp});

		if(r<14){queue.unshift(r*1000+c+1000);short[r+1][c]=r*1000+c;}
		if(c<29){queue.unshift(r*1000+c+1);short[r][c+1]=r*1000+c;}
		return [queue,nodes,short];
	}
	BFS()
	{
		var queue=[];
		queue.push(0);
		var answer=[];
		var short=[];

		for(let i=0;i<15;i++)
		{
			var t=[];
			for(let j=0;j<30;j++)
			{
				t.push(-1);
			}
			short.push(t);
		}
		
		while(queue.length!==0)
		{
			var temp=this.Binnerwhile(queue,answer,short);
			queue=temp[0];
			answer=temp[1];
			short=temp[2];
		}
		var inorder=[];
		if(short[14][29]===-1)
		{
			this.animatedfs(answer,inorder);
		}
		else
		{
			var r=14;
			var c=29;
			while(short[r][c]!==0)
			{
				inorder.push(short[r][c]);
				var val=short[r][c];
				r=(val-val%1000)/1000;
				c=val%1000;
			}
			inorder.push(0);
			this.animatedfs(answer,inorder);
		}
	}
	// node(r,c,val,distance,prev)
	// {
	// 	return {r,c,val,distance,prev};
	// 	// this.r=r;
	// 	// this.c=c;
	// 	// this.val=val;
	// 	// this.distance=dist;
	// 	// this.prev=prev;
	// }
	// DIJKSTRA() 
	// {
	// 	var visitedNodesInOrder = [];
	// 	var unvisitedNodes = this.getAllNodes(this.state.Grid);
	// 	// console.log(unvisitedNodes);
	// 	unvisitedNodes[0].distance=0;
	// 	console.log(unvisitedNodes);
	// 	for(var i=0;i<15*30;i++)
	// 	{
	// 		if(unvisitedNodes[i].distance===0)
	// 		{
	// 			console.log(i);
	// 		}
	// 	}	
	// 	var grid=this.gridform(this.state.Grid);
	// 	grid[0][0].distance=0;

	// 	while (!!unvisitedNodes.length) 
	// 	{
	// 		this.sortNodesByDistance(unvisitedNodes);
	// 		console.log(unvisitedNodes);
	// 		const closestNode = unvisitedNodes.shift();
			
	// 		if (closestNode.val===3)break;

	// 		if (closestNode.val===1)continue;
	// 		if (closestNode.distance===Infinity)break;
			
	// 		var temp=this.state.Grid;
	// 		var r=closestNode.r;
	// 		var c=closestNode.c;
	// 		temp[r][c]=10;
	// 		this.setState({Grid:temp});
			
	// 		closestNode.val=10;
	// 		visitedNodesInOrder.push(closestNode);
	// 		this.updateUnvisitedNeighbors(closestNode, grid);
	// 	}
	// 	var answer=[];
	// 	for(var i=0;i<visitedNodesInOrder.length;i++)
	// 	{
	// 		answer.push(visitedNodesInOrder[i].r*1000+visitedNodesInOrder[i].c);
	// 	}
	// 	console.log(visitedNodesInOrder);


	// 	this.animatedfs(answer,[]);
	// }
	// sortNodesByDistance(unvisitedNodes) 
	// {
	// 	unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
	// }
	// updateUnvisitedNeighbors(node, grid) 
	// {
	// 	const unvisitedNeighbors = this.getUnvisitedNeighbors(node, grid);
	// 	for (const neighbor of unvisitedNeighbors) 
	// 	{
	//  		neighbor.distance = node.distance + 1;
	// 		neighbor.prev = node;
	// 	}
  	// }
	// gridform(grid)
	// {
	// 	const nodes = [];
	// 	for(var i=0;i<15;i++)
	// 	{
	// 		var temp=[];
	// 		for(var j=0;j<30;j++)
	// 		{
	// 			var nod=this.node(i,j,grid[i][j],Infinity,null);
	// 			// console.log(nod);
	// 			// nodes.push(nod);
	// 			temp.push(nod);
	// 		}
	// 		nodes.push(temp);
	// 	}
	// 	return nodes;
	// }
	// getUnvisitedNeighbors(node, grid) 
	// {
	// 	const neighbors = [];
	// 	const {c, r} = node;
	// 	if (r > 0) neighbors.push(grid[r - 1][c]);
	// 	if (r < 14) neighbors.push(grid[r + 1][c]);
	// 	if (c > 0) neighbors.push(grid[r][c - 1]);
	// 	if (c < 29) neighbors.push(grid[r][c + 1]);
	// 	// console.log(neighbors);
	// 	return neighbors.filter(neighbor => (neighbor.val!==10));
  	// }
	// getAllNodes(grid) 
	// {
	// 	const nodes = [];
	// 	for(var i=0;i<15;i++)
	// 	{
	// 		// var temp=[];
	// 		for(var j=0;j<30;j++)
	// 		{
	// 			var nod=this.node(i,j,grid[i][j],Infinity,null);
	// 			// console.log(nod);
	// 			nodes.push(nod);
	// 		}
	// 		// nodes.push(temp);
	// 	}
	// 	return nodes;
	// }
	// getNodesInShortestPathOrder(grid) 
	// {
	// 	const nodesInShortestPathOrder = [];
	// 	let currentNode = grid[14][29];
	// 	while (currentNode !== null) 
	// 	{
	// 		nodesInShortestPathOrder.unshift(currentNode.r*1000+currentNode.c);
	// 		currentNode = currentNode.prev;
	// 	}
	// 	return nodesInShortestPathOrder;
  	// }
	render()
	{
		return (
			<div className="App">
				
				{this.show()}

				<div className="button">
					<button className="cl" onClick={this.clearg}>CLEAR</button>
					<button className="buttons" onClick={this.DIJKSTRA}>DIJKSTRA</button>
					<button className="buttons" onClick={this.BFS}>BFS</button>
					<button className="buttons" onClick={this.DFSI}>DFS</button>
				</div>
			
			</div>
		);
	}
}
export default App;