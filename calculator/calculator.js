const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btn_plus = document.getElementById("btn+");
const btn_minus = document.getElementById("btn-");
const btn_star = document.getElementById("btn*");
const btn_div = document.getElementById("btn/");
const btn_back = document.getElementById("btn<");
const btn_result = document.getElementById("btn=");

let num=0;
let temp=0;
let state="none"



btn1.addEventListener('click', () => {
    num=num*10+1;
    changeByJS(num); 

  });

btn2.addEventListener('click', () => {
    num=num*10+2;
    changeByJS(num); 

  });

btn3.addEventListener('click', () => {
    num=num*10+3;
    changeByJS(num); 

  });
  
btn4.addEventListener('click', () => {
    num=num*10+4;
    changeByJS(num); 

  });
  
btn5.addEventListener('click', () => {
    num=num*10+5;
    changeByJS(num); 

  });

btn6.addEventListener('click', () => {
    num=num*10+6;
    changeByJS(num); 

  });

btn7.addEventListener('click', () => {
    num=num*10+7;
    changeByJS(num); 

  });

btn8.addEventListener('click', () => {
    num=num*10+8;
    changeByJS(num); 

  });

btn9.addEventListener('click', () => {
    num=num*10+9;
    changeByJS(num); 

  });

btn0.addEventListener('click', () => {
    num=num*10+0;
    changeByJS(num); 

  });



  btn_plus.addEventListener('click', () => {
    
    console.log('1 '+temp+" "+num+ " "+ state)
    num=check_state(state,num,temp);
    console.log('2 '+temp+" "+num+ " "+ state)    
    console.log(num);
    state='plus';
    changeByJS(num); 

    temp=num;
    num=0;
    console.log('3 '+temp+" "+num+ " "+ state)
    
  });
  btn_minus.addEventListener('click', () => {
    num=check_state(state,num,temp);
    changeByJS(num); 

    state='minus';
    temp=num;
    num=0;    
    console.log(num);
  });
  btn_star.addEventListener('click', () => {
    check_state(state,num,temp);
    changeByJS(num); 

    state='star';
    temp=num;
    num=0;    
    console.log(num);
  });
  btn_div.addEventListener('click', () => {
    check_state(state,num,temp);
    changeByJS(num); 

    state='div';
    temp=num;
    num=0;    
    console.log(num);
  });

  btn_back.addEventListener('click', () => {
    num=parseInt(num/10);
    changeByJS(num); 

    console.log(num);
  });
  btn_result.addEventListener('click', () => {
    num=check_state(state,num,temp);
    changeByJS(num); 

    console.log(num);
    num=0;
    temp=0;
  });

  function check_state(state, num, temp) {
    if (state==='none'){
        console.log(num);
    }
    if (state==='plus'){
        num=num+temp;
    }else if(state==='minus'){
        num=temp-num;
    }else if(state==='star'){
        num=num*temp;
    }else if(state==='div'){
        num=temp/num;
    }

    return num;
    
  }
  function changeByJS(num) {
    let x = document.getElementsByClassName("display")[0];
    x.innerText=num; 
    x.style.color="red";
 }



