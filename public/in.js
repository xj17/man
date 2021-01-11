const lis = document.querySelectorAll(".ulself>li");
			const lisa = document.querySelectorAll(".ulself>li>a");
			for(let i=0;i<lis.length;i++){
					lis[i].onclick=function(){
						//lis[i].style.backgroundColor='royalblue';
						for(let j=0;j<lis.length;j++){
							lis[j].style.backgroundColor='';
							lisa[j].style.color='';
							console.log('1')
						}
						lis[i].style.backgroundColor='rgb(230,247,255)';
						lisa[i].style.color='blue';
					}	
			}