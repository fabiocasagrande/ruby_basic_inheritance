

var base={
	randNumb:"",
	
	randNumb1:"",
	randNumb2:"",
	randNumb3:"",
	randNumb4:"",
	randNumb5:"",
	randName1:"",
	randName2:"",
	randName3:"",
	randName4:"",
	
	randName:"",
	randBool:"",
	randTemplate:"",
	randID:"",
	answ:"",
	randomQuestion:"",
	arr:[],
	countt:0,
}

base.getRandomName = function(){
var names=[["red"],["yellow"],["green"],["blue"],["grey"],["black"],["purple"]];
var randint=this.getRandomInt(0,names.length);

return names[randint];
}

base.getRandomNumb = function(){
	return this.getRandomInt(0,9);
}


base.initRandomVars = function(){
	
	this.randNumb1=this.getRandomNumb();
	this.randNumb2=this.getRandomNumb();
	this.randNumb3=this.getRandomNumb();
	this.randNumb4=this.getRandomNumb();
	this.randNumb5=this.getRandomNumb();
	this.randName1=this.getRandomName();
	this.randName2=this.getRandomName();
	if(this.randName2==this.randName2){
		this.randName2=this.getRandomName();
	}	
	this.randName3=this.getRandomName();
	if(this.randName3==this.randName2 || this.randName3==this.randName1 ){
		this.randName3=this.getRandomName();
	}	
	this.randName4=capitalize(this.getRandomName());
	if(this.randName4==this.randName3 ||this.randName34==this.randName2 || this.randName4==this.randName1 ){
		this.randName4=capitalize(this.getRandomName());
	}	
	
}

var k=0;
base.generateQA = function(){
	
	
	var q1="ans = cp.addUp";
	var q2="ans = p.addUp";
	
	
	
	
	var a1=(2*this.randNumb3)+(2*this.randNumb4);
	var a2=this.randNumb1+this.randNumb2;
	
	var quesst=[[q1],[q2]];
	var anns=[[a1],[a2]];
	var inter=this.getRandomInt(0,2);
	this.randomQuestion=quesst[k];
	this.answ=anns[k];
	
	k++;
	if(k==2){
		k=0;
	}
	
}

function capitalize(str){
	
	str = str.toString().toLowerCase().replace(/\b[a-z]/g, function(letter) { return cpL(letter);});
	return str;
	
	
}

function cpL(letter){
switch(letter) {
    case 'q':
        return 'Q';
       
    case 'w':
          return 'W';
	case 'e':
        return 'E';
       
    case 'r':
          return 'R';
	case 't':
        return 'T';
       
    case 'y':
          return 'Y';
		  
	case 'u':
        return 'U';
       
    case 'i':
          return 'I';
	case 'o':
        return 'O';
       
    case 'p':
          return 'P';
	case 'a':
        return 'A';
       
    case 's':
          return 'S';	


	case 'd':
        return 'D';
       
    case 'f':
          return 'F';
	case 'g':
        return 'G';
       
    case 'h':
          return 'H';
	case 'j':
        return 'J';
       
    case 'k':
          return 'K';
		  
		  
		  
	case 'l':
        return 'L';
       
    case 'z':
          return 'Z';
	case 'x':
        return 'X';
       
    case 'c':
          return 'C';
	case 'v':
        return 'V';
       
    case 'b':
          return 'B';

		  
	case 'n':
        return 'N';
       
    case 'm':
          return 'M';	  
		  
		  
} 

}









base.getRandomBool = function(){

var bool=[["true"],["false"],["false"]];
var randint=this.getRandomInt(0,bool.length-1);
return bool[randint];
}


base.getRandomTemplate = function(){
if(this.countt==3){
	this.countt=0;
}
var tmpl=[["NONE"],["SOME"],["ID"]];

//var randint=this.getRandomIntTemp(0,tmpl.length);
return tmpl[this.countt++];

}

base.getRandomID = function(){

return this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb();

}


base.getRandomIntTemp = function(min, max) {
	 
	 var i=0;
	 
	 while(i<this.arr.length){
		 
		 if(this.arr[i]==""){
			 
			 var temp=Math.floor(Math.random() * (max - min)) + min;
			 var j=0;
			 while(j<this.arr.length){
				 if(this.arr[j]==temp){
					 j++;
				 }else{
					 this.arr[i]=temp;
					 return temp;
				 }
	
			 }
		 }
		 i++;
		 
	 }
	 
	 this.arr=[];
	 
	this.arr[0]=Math.floor(Math.random() * (max - min)) + min;
	
	return this.arr[0];

}







/*
*Generates a random integer
*/
 base.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 base.clear = function(){
	
	this.randNumb="";
	this.randName="";
	this.randBool="";
	this.randTemplate="";
	 this.randID="";
	 this.answ="";
	 this.randomQuestion="";
 }

 base.getRandomQuestion = function(){
	 
	 var type=this.getRandomTemplate();
	 
	 if(type=="NONE"){
		this.answ="2";
		return" val s = Name("+this.getRandomName()+", NONE, "+this.getRandomName()+")";
	 }
	 
	 else if(type=="SOME"){
		this.answ="1";
		return" val s = Name("+this.getRandomName()+", SOME "+this.getRandomName()+" , "+this.getRandomName()+")";
	 }
	 
	  else if(type=="ID"){
		 
		 this.answ="3";
		return" val s = ID("+this.getRandomID()+")";
		 
	 }
 }






base.generateListAnswers = function(){
	

	this.randNumb=this.getRandomNumb();
	this.randName=this.getRandomName();
	this.randBool=this.getRandomBool();
	
	this.randomQuestion=this.getRandomQuestion();
	

}

base.generateResult= function(){
	this.clear();
	this.initRandomVars();
	this.generateQA();
	//this.generateListAnswers();
	

	
}










