const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");
const panel4 = document.querySelector(".panel4");
const panel5 = document.querySelector(".panel5");

panel1.addEventListener('click',function(){panelClicked(panel1)});
panel2.addEventListener('click',function(){panelClicked(panel2)});
panel3.addEventListener('click',function(){panelClicked(panel3)});
panel4.addEventListener('click',function(){panelClicked(panel4)});
panel5.addEventListener('click',function(){panelClicked(panel5)});

function panelClicked(panelNum){
	let active = document.querySelector(".open-active");
	if(active !== null){
		active.classList.remove("open-active","open");
		active.style.minWidth = 'initial';
		active.style.fontSize = '15pt';
	}
	panelNum.classList.add("open-active","open");
	
}
