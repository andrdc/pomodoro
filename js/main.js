const COLUMNS = 8;
const ROWS = 3;
const DEFAULT_SESSION = 25; /* Minutes */
const DEFAULT_BREAK = 5; /* Minutes */

function createGrid(){
	let divGrid = getGridContainer();
	divGrid.setAttribute("style", "grid-template-columns: repeat(" + COLUMNS + ", 1fr); \
									grid-template-rows: repeat(" + ROWS + ", 1fr);");
	populateGrid(DEFAULT_SESSION, DEFAULT_BREAK, divGrid);
}

function getGridContainer(){ return document.getElementById("grid"); }

function populateGrid(sessionMinutes, breakMinutes, whatGrid){
	buttons = createButtons();
	for(let i = 0; i < buttons.length; i++){
		whatGrid.appendChild(buttons[i]);
	}
	config = createConfiguration(sessionMinutes, breakMinutes);
	for(let i = 0; i < config.length; i++){
		whatGrid.appendChild(config[i]);
	}
}

function createButtons(){
	let buttons = [];
	let divPause = document.createElement("div");
	let btnPause = document.createElement("button");
	btnPause.setAttribute("id", "buttonPause");
	btnPause.innerHTML = "PAUSE";
	divPause.appendChild(btnPause);
	buttons.push(divPause);
	let divRun = document.createElement("div");
	let btnRun = document.createElement("button");
	btnRun.setAttribute("id", "buttonRun");
	btnRun.innerHTML = "START";
	divRun.appendChild(btnRun);
	buttons.push(divRun);
	let divStop = document.createElement("div");
	let btnStop = document.createElement("button");
	btnStop.setAttribute("id", "buttonStop");
	btnStop.innerHTML = "STOP";
	divStop.appendChild(btnStop);
	buttons.push(divStop);

	let columnStart = 2;
	let columnEnd = columnStart + 2;
	for(let i = 0; i < buttons.length; i++){
		buttons[i].setAttribute("class", "cell");
		buttons[i].setAttribute("style", "grid-column-start:" + columnStart +" ;\
										grid-column-end:" + columnEnd + ";\
										grid-row-start: 1;\
										grid-row-end: 2;");
		columnStart += 2;
		columnEnd = columnStart + 2;
	}

	return buttons;
}

function createConfiguration(sessionMinutes, breakMinutes){
	let config = []
	let divSession = document.createElement("div");
	let h3Session = document.createElement("h3");
	h3Session.setAttribute("id", "h3Session");
	h3Session.innerHTML = "SESSION :";
	divSession.appendChild(h3Session);
	config.push(divSession);
	let divSessionMinutes = document.createElement("div");
	let divSMinutesMinus = document.createElement("div");
	let divSMinutes = document.createElement("div");
	let divSMinutesPlus = document.createElement("div")
	let pSMinutesMinus = document.createElement("p");
	let pSMinutes = document.createElement("p");
	let pSMinutesPlus = document.createElement("p");
	pSMinutesMinus.setAttribute("id", "pSMinutesMinus");
	pSMinutesMinus.innerHTML = "-";
	pSMinutes.setAttribute("id", "pSMinutes");
	pSMinutes.innerHTML = sessionMinutes;
	pSMinutesPlus.setAttribute("id", "pSMinutesPlus");
	pSMinutesPlus.innerHTML = "+";
	divSMinutesMinus.appendChild(pSMinutesMinus);
	divSMinutes.appendChild(pSMinutes);
	divSMinutesPlus.appendChild(pSMinutesPlus);
	divSessionMinutes.appendChild(divSMinutesMinus);
	divSessionMinutes.appendChild(divSMinutes);
	divSessionMinutes.appendChild(divSMinutesPlus);
	config.push(divSessionMinutes);

	let divBreak = document.createElement("div");
	let h3Break = document.createElement("h3");
	h3Break.setAttribute("id", "h3Break");
	h3Break.innerHTML = "BREAK : ";
	divBreak.appendChild(h3Break);
	config.push(divBreak);
	let divBreakMinutes = document.createElement("div");
	let divBMinutesMinus = document.createElement("div");
	let divBMinutes = document.createElement("div");
	let divBMinutesPlus = document.createElement("div")
	let pBMinutesMinus = document.createElement("p");
	let pBMinutes = document.createElement("p");
	let pBMinutesPlus = document.createElement("p");
	pBMinutesMinus.setAttribute("id", "pBMinutesMinus");
	pBMinutesMinus.innerHTML = "-";
	pBMinutes.setAttribute("id", "pBMinutes");
	pBMinutes.innerHTML = breakMinutes;
	pBMinutesPlus.setAttribute("id", "pBMinutesPlus");
	pBMinutesPlus.innerHTML = "+";
	divBMinutesMinus.appendChild(pBMinutesMinus);
	divBMinutes.appendChild(pBMinutes);
	divBMinutesPlus.appendChild(pBMinutesPlus);
	divBreakMinutes.appendChild(divBMinutesMinus);
	divBreakMinutes.appendChild(divBMinutes);
	divBreakMinutes.appendChild(divBMinutesPlus);
	config.push(divBreakMinutes);

	let columnStart = 0;
	let columnEnd = 2;
	for(let i = 0; i < config.length; i++){
		if(i % 2 == 0){
			columnStart = columnEnd;
			columnEnd += 2;
		}else{
			columnStart = columnEnd;
			columnEnd += 1;
		}

		config[i].setAttribute("class", "cell");
		config[i].setAttribute("style", "grid-column-start:" + columnStart +" ;\
										grid-column-end:" + columnEnd + ";\
										grid-row-start: 2;\
										grid-row-end: 3;");
	}

	return config;
}

createGrid();
