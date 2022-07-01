/*
		###Goti.js####
	Each goti is defined with the prototype:
	
	function Goti_Namr(color){
		this.type="i"; //-- initail that represents thhe goti 
		this.color=color; //-- color of goti black/white
		this.src="url"; //-- url to the image of goti

		//@parms:
		//		board=>[]; A 8*8 2d array that represents chess board
		//		x,y=>int; cordinate representing the position of corrsepoinding goti in the board
		
		//@returns:[{x:int,y:int}]; set of possible moves
		this.getPossibleMove=(x,y,board)=>{
			return [];
		};
	}
*/


function Army(color){
	this.type="i";
	this.src="assets/army.png";
	this.color=color;
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		if(this.color==="black"){

			if(y+1<8){
				//stright movement
				if(!board[y+1][x]){
					arr.push({y:y+1,x:x});
					//for move for init pos;
					if(y==1 && !board[y+2][x])arr.push({y:y+2,x:x});
				}
				//check movement
				if(x<8 && board[y+1][x+1] && board[y+1][x+1].color!=this.color)
					arr.push({y:y+1,x:x+1});
				if(x>-1 && board[y+1][x-1] && board[y+1][x-1].color!=this.color)
					arr.push({y:y+1,x:x-1});
			}
		}else{
			if(y>0){
				//strignt movement
				if(!board[y-1][x]){
					arr.push({y:y-1,x:x});
					//for move for init pos;
					if(y==6 && !board[y-2][x])arr.push({y:y-2,x:x});
				}
				//check movement
				if(x<8 && board[y-1][x+1] && board[y-1][x+1].color!=this.color)
					arr.push({y:y-1,x:x+1});
				if(x>-1 && board[y-1][x-1] && board[y-1][x-1].color!=this.color)
					arr.push({y:y-1,x:x-1});

			}
		}
		return arr;
	}
};
function Elephant(color){
	this.type="e";
	this.color=color;
	this.src="assets/elephant.png";
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		//x+ axis:
		for(let i=x+1;i<8;i++){
			if(board[y][i]){
				if(board[y][i].color==this.color)break;
				arr.push({y:y,x:i});
				break;
			}
			arr.push({y:y,x:i});
		}
		//x- axis:
		for(let i=x-1;i>-1;i--){
			if(board[y][i]){
				if(board[y][i].color==this.color)break;
				arr.push({y:y,x:i});
				break;
			}
			arr.push({y:y,x:i});
		}
		//y+ axis:
		for(let i=y+1;i<8;i++){
			if(board[i][x]){
				if(board[i][x].color==this.color)break;
				arr.push({y:i,x:x});
				break;
			}
			arr.push({y:i,x:x});
		}
		for(let i=y-1;i>-1;i--){
			if(board[i][x]){
				if(board[i][x].color==this.color)break;
				arr.push({y:i,x:x});
				break;
			}
			arr.push({y:i,x:x});
		}

		return arr;
	}
}
function Horse(color){
	this.type="h";
	this.color=color;
	this.src="assets/horse.png";
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		//right ++;
		if(y+1<8 && x+2<8 && !(board[y+1][x+2]&&board[y+1][x+2].color==this.color))
			arr.push({y:y+1,x:x+2});
		if(y+2<8 && x+1<8 && !(board[y+2][x+1]&&board[y+2][x+1].color==this.color))
			arr.push({y:y+2,x:x+1});
		//left ++;
		if(y+1<8 && x-2>-1 && !(board[y+1][x-2]&&board[y+1][x-2].color==this.color))
			arr.push({y:y+1,x:x-2});
		if(y+2<8 && x-1>-1 && !(board[y+2][x-1]&&board[y+2][x-1].color==this.color))
			arr.push({y:y+2,x:x-1});
		//right --;
		if(y-1>-1 && x+2<8 && !(board[y-1][x+2]&&board[y-1][x+2].color==this.color))
			arr.push({y:y-1,x:x+2});
		if(y-2>-1 && x+1<8 && !(board[y-2][x+1]&&board[y-2][x+1].color==this.color))
			arr.push({y:y-2,x:x+1});
		//left --
		if(y-1>-1 && x-2>-1 && !(board[y-1][x-2]&&board[y-1][x-2].color==this.color))
			arr.push({y:y-1,x:x-2});
		if(y-2>-1 && x-1>-1 && !(board[y-2][x-1]&&board[y-2][x-1].color==this.color))
			arr.push({y:y-2,x:x-1});


		return arr;
	}
}
function Camel(color){
	this.type="c";
	this.color=color;
	this.src="assets/bishop.png";
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		let i=x+1;let j=y+1;
		//right++;
		while(i<8 && j<8){
			if(board[j][i]){
				if(board[j][i].color==this.color)break;
				arr.push({x:i,y:j});
				break;
			}
			arr.push({x:i,y:j});
			i++;j++;
		}
		i=x-1;j=y+1;
		//left++;
		while(i>-1 && j<8){
			if(board[j][i]){
				if(board[j][i].color==this.color)break;
				arr.push({x:i,y:j});
				break;
			};
			arr.push({x:i,y:j});
			i--;j++;
		}
		i=x-1;j=y-1;
		//left--;
		while(i>-1 && j>-1){
			if(board[j][i]){
				if(board[j][i].color==this.color)break;
				arr.push({x:i,y:j});
				break;
			};
			arr.push({x:i,y:j});
			i--;j--;
		}
		i=x+1;j=y-1;
		//right--;
		while(i<8 && j>-1){
			if(board[j][i]){
				if(board[j][i].color==this.color)break;
				arr.push({x:i,y:j});
				break;
			};
			arr.push({x:i,y:j});
			i++;j--;
		}

		return arr;
	}
}
function King(color){
	this.type="k";
	this.color=color;
	this.src="assets/king.png";
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		//up down left right
		if(y+1<8 && !(board[y+1][x]&&board[y+1][x].color==this.color))
			arr.push({x:x,y:y+1});
		if(y-1>-1 && !(board[y-1][x]&&board[y-1][x].color==this.color))
			arr.push({x:x,y:y-1});
		if(x+1<8 && !(board[y][x+1]&&board[y][x+1].color==this.color))
			arr.push({x:x+1,y:y});
		if(x-1>-1 && !(board[y][x-1]&&board[y][x-1].color==this.color))
			arr.push({x:x-1,y:y});
		//digonal
		if(y+1<8 && x+1<8 && !(board[y+1][x+1]&&board[y+1][x+1].color==this.color))
			arr.push({x:x+1,y:y+1});
		if(y+1<8 && x-1>-1 && !(board[y+1][x-1]&&board[y+1][x-1].color==this.color))
			arr.push({x:x-1,y:y+1});
		if(y-1>-1 && x+1<8 && !(board[y-1][x+1]&&board[y-1][x+1].color==this.color))
			arr.push({x:x+1,y:y-1});
		if(y-1>-1 && x-1>-1 && !(board[y-1][x-1]&&board[y-1][x-1].color==this.color))
			arr.push({x:x-1,y:y-1});


		return arr;
	}
}
function Queen(color){
	this.type="q";
	this.color=color;
	this.src="assets/queen.png";
	this.getPossibleMove=(x,y,board)=>{
		let arr=[];
		let temp=new Elephant(this.color);
		arr=arr.concat(temp.getPossibleMove(x,y,board));
		temp=new Camel(this.color);
		arr=arr.concat(temp.getPossibleMove(x,y,board));
		return arr;


	}
}


