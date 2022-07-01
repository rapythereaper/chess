/*
		###board.js###

*/
function Game(){
	this.board;
	this.CURRENT_PLAYER="white";
	this.gameOver=false;
	this.history=[];
	this.init=()=>{
		this.gameOver=false;
		this.history=[];
		this.board=new Array(8);
		for(let i=0;i<8;i++)this.board[i]=new Array(8);
		//Black
		this.board[0][0]=new Elephant("black");
		this.board[0][1]=new Horse("black");
		this.board[0][2]=new Camel("black");
		this.board[0][3]=new King("black");
		this.board[0][4]=new Queen("black");
		this.board[0][7]=new Elephant("black");
		this.board[0][6]=new Horse("black");
		this.board[0][5]=new Camel("black");
		//white
		this.board[7][0]=new Elephant("white");
		this.board[7][1]=new Horse("white");
		this.board[7][2]=new Camel("white");
		this.board[7][3]=new King("white");
		this.board[7][4]=new Queen("white");
		this.board[7][7]=new Elephant("white");
		this.board[7][6]=new Horse("white");
		this.board[7][5]=new Camel("white");

		for(let i=0;i<8;i++){
			this.board[1][i]=new Army("black");
			this.board[6][i]=new Army("white");
		}
	}
	this.init();
	this.switchPlayer=()=>{
		if(this.CURRENT_PLAYER=="black")
			this.CURRENT_PLAYER="white";
		else 
			this.CURRENT_PLAYER="black";
	}
	/*
		@parms: y,x => cordinate of goti in board
		@return: [{y:int,x:int}] => list of possible move of goti at y,x;
	*/
	this.getMove=(y,x)=>{
		if(this.board[y][x]&&this.board[y][x].color==this.CURRENT_PLAYER)
			return this.board[y][x].getPossibleMove(x,y,this.board);
		return [];

	}
	// @return: [{from:{x:int,y:int},to:[{y:int,x:int}]}]
	//			from=>position of goti
	//			to=>list of position it can travell;
	this.getAllMoves=()=>{
		let res=[];
		for(let i=0;i<8;i++){
			for(let j=0;j<8;j++){
				temp=this.getMove(i,j);
				if(temp.length>0)res.push({from:{x:j,y:i},to:temp});
			}
		}
		return res;
	}
	//move with out validation
	this.moveWithNoMove=(from,to)=>{
		if(this.board[to.y][to.x]&&this.board[to.y][to.x].type=="k")
			this.gameOver=true;
		this.history.push({to:to,from:from,goti:this.board[to.y][to.x]});
		this.board[to.y][to.x]=this.board[from.y][from.x];
		this.board[from.y][from.x]=null;
		this.switchPlayer();
	}
	/*
		@parms: from=>{y:int,x:int}, to=>{y:int,x:int};
		mvoes goti from "from" to "to" if the move is valid
	*/
	this.move=(from,to)=>{
		let move=this.getMove(from.y,from.x);
		isValid=false;
		for(let i of move)if(i.y==to.y && i.x==to.x)isValid=true;;
		if(!isValid)throw `(${from.y},${from.x})->(${to.y},${to.x})Is not a Valid move!`;

		if(this.board[to.y][to.x]&&this.board[to.y][to.x].type=="k")
			this.gameOver=true;
		this.history.push({to:to,from:from,goti:this.board[to.y][to.x]});
		this.board[to.y][to.x]=this.board[from.y][from.x];
		this.board[from.y][from.x]=null;
		this.switchPlayer();

	}
	// undo the last move;
	this.undo=()=>{
		let task=this.history.pop();
		this.gameOver=false;
		if(!task)return;
		this.board[task.from.y][task.from.x]=this.board[task.to.y][task.to.x];
		this.board[task.to.y][task.to.x]=task.goti;
		this.switchPlayer();
	}
	this.print=()=>{
		for(let i=0;i<8;i++){
			let str="";
			for(let j=0;j<8;j++){
				if(this.board[i][j])
					str+=this.board[i][j].type+"\t";
				else
					str+="*\t";
			}
			console.log(str);
		}
	}
}
/*g=new Game();
g.print();
a=g.getAllMoves();
g.move(a[0].from,a[0].to[0]);
g.print();*/