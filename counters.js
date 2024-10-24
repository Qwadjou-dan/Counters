
const value = document.getElementById('value');
const btns = document.getElementsByTagName('button');

let count = 0;

for(let i = 0; i < btns.length; i++){
  const btn = btns[i];

  btn.addEventListener('click', () => {
    if(btn.classList.contains("js-add")) {
      count++;
      value.textContent = count;
    } else if(btn.classList.contains("js-subtract")){
      count--;
      value.textContent = count;
    } else if(btn.classList.contains("js-reset")){
      count = 0;
      value.textContent = count;
    }

    if(count > 0){
      value.style.color = "green";
    } else if(count < 0){
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  })
}

