						var ctx;										
						var ad=10;			
						var ae=10;
						var ac=10;
						var ab=10;				
					 var x=10;
					 var y=10;
					 var w=100;
					 var h=100;			
					 var can;
					 var dir;					
						var ay=10;
						var ax=10;
						var clu="red";
						var bfc="blue";
						var xp;				 
						var yp;
						var hp=10;
						var wp=10;
						loop();
						lbp();
						function loop(){								
						can=document.getElementById("tc");
						ctx=can.getContext("2d");								
						ctx.clearRect(x, y, w, h);		
															
						ctx.fillStyle=clu;														
						ctx.fillRect(x , y, w, h);
						requestAnimationFrame(loop) 
				
						} 						
						function lbp(){
						ctx.fillStyle=bfc;				
ctx.clearRect(xp,yp,wp,hp);																	
ctx.fillRect(xp,yp,wp,hp);
	
requestAnimationFrame(lbp) 											
} 
			$('#dir').on('touchstart',function(){ 
			dir=1;		
			dire();
							console.log("dir=1")			
								
							 }); 
			$('#dir').on('touchend',function(){
			console.log("dir=2");
			dir=2;
			 });
			 		$('#esq').on('touchstart',function(){ 
			esq=1;		
		 esqu();
							console.log("esq=1")			
								
							 }); 
			$('#esq').on('touchend',function(){
			console.log("esq=2");
			esq=2;
			 });
			 $('#cim').on('touchstart',function(){ 
			cim=1;		
		 cima();
							console.log("cim=1")			
								
							 }); 
			$('#cim').on('touchend',function(){
			console.log("cim=2");
			cim=2;
			 });
			$('#bax').on('touchstart',function(){ 
			bax=1;		
		 baix();
							console.log("bax=1")			
								
							 }); 
			$('#bax').on('touchend',function(){
			console.log("bax=2");
			bax=2;
			 });
			 function onbp(){
			bop=1;		
		 bope();
							console.log("bop=1")			
							xp=x;
							yp=y+50;	
							 }
			
		function dire(){
		if(dir==1) {

									ctx.clearRect(x, y, w, h);
																x=x+1;											
									
									
													
									
										setTimeout(dire, 0,1)	;
										}
					
		}
function esqu(){
		if(esq==1) {

									ctx.clearRect(x, y, w, h);
																x=x-1;															
											
									
													
									
										setTimeout(esqu, 0,1)	;
										}
					
		}
		function cima(){
		if(cim==1) {

									ctx.clearRect(x, y, w, h);
														y=y-1;
													
									
										setTimeout(cima, 0,1)	;
										}
					
		}
		function baix(){
		if(bax==1) {

									ctx.clearRect(x, y, w, h);
																y=y+1;															
										
									
													
									
										setTimeout(baix, 0,1)	;
										}
					
		}
function bope(){
		if(bop==1) {
	

										ctx.clearRect(xp,yp,wp,hp);					
																xp=xp+1;															
					
									
													
									
										setTimeout(bope, 0,1)	;
										}
					
		}
$('#vlt').click(function(){ window.location = "dc3.html"; });

											

						
						
												
		
											

						
						
												

											

						
						
												

						
						
												

											

						
						
												
		
											

						
						
												

											

						
						
												
