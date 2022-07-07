var rs;
var chmy;
var chli;
var hhl;
var bom;
var mdc;
var ling;
ling="br"; 
var nome;
nome="edumast" 
var mdl=false;
mdc=false;
rs="\\_(0_0)_/";
        const inputEle = document.getElementById('chmy');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    env();
  }
}); 
        
chli=document.getElementById("chli").value;

function env(){
  resp();
}
function resp(){  
chmy=document.getElementById("chmy").value;
if (mdc==true){ document.body.style.backgroundColor = chmy;
mdc=false;
    } else if (chmy=="hello"||chmy=="hl"||chmy=="hello oliver"||chmy=="hey"||chmy=="hey oliver"||chmy=="hi"||chmy=="hi oliver"||chmy=="ola"||chmy=="oi"||chmy=="ola oliver"||chmy=="oi oliver"){
  if (ling=="ing"){
    rs="hello "+nome;
  }else if (ling=="br"){
    rs="olá "+nome;
    }
}else if(chmy=="bom dia"||chmy=="good day"){
  if (ling=="ing"){
    rs="good day "+nome+"!";
  }
  else if
    (ling=="br"){
  rs="bom dia "+nome+"!";
      
  }  

  }else if(chmy=="mudar cor"||chmy=="cor"||chmy=="color"||chmy=="change color"
          ){
mdc=true;  
}else if (mdl==true){
    ling=chmy;
  if (ling=="inglês"||ling=="ingles"){
    ling="ing";
  }else if (ling=="portugues"||ling=="pt"||ling=="português"||ling=="br"||ling=="brasil"){
    ling="br";
  }
  mdl=false;
  }else if(chmy=="mudar idioma"||chmy=="idioma"){
  mdl=true;
  }else if (chmy=='tudo bem'|| chmy=='ola tudo bem'|| chmy=='ola tudo bem?'|| chmy=='tudo bem?'){rs='tudo';}else if (chmy=='qual meu nome'|| chmy=='qual meu nome?'){rs="seu nome é "+nome;}


document.getElementById('chmy').value='';
document.getElementById("chli").innerHTML=(rs);
}
