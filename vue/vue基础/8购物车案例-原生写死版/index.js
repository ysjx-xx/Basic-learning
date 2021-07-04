window.onload = function () {
  const isNull = document.querySelector(".null");
  const div = document.querySelector("div");
  const btnL = document.querySelectorAll(".btnLft");
  const btnR = document.querySelectorAll(".btn-rit");
  const tbody = document.querySelector("tbody");
  const trs = tbody.querySelectorAll("tr");
  const remove = document.querySelectorAll(".remove");
  let price=document.querySelectorAll(".price")
  let getSum=document.querySelector("#getSum")
  console.log(getSum.innerHTML);
  let sum=null;
  (function(){
    for(let i=0;i<price.length;i++){
        sum+=parseFloat(price[i].innerHTML.substr(1))
    }
  })()
  getSum.innerHTML=sum.toFixed(2)
  for (let i = 0; i < trs.length; i++) {  
    btnL[i].addEventListener("click", function () {
      let x = this.nextSibling.innerHTML;
      x--;
      if (x == 0) {
        tbody.removeChild(this.parentNode.parentNode);
      }
      this.nextSibling.innerHTML = x;
      getSum.innerHTML=(parseFloat(getSum.innerHTML)-
      parseFloat(this.parentNode.previousElementSibling.innerHTML.substr(1))).toFixed(2)
      clear()
    });
  }
  for (let i = 0; i < trs.length; i++) {
    btnR[i].addEventListener("click", function () {
      let x = this.previousSibling.innerHTML;
      x++;
      this.previousSibling.innerHTML = x;
      getSum.innerHTML=(parseFloat(getSum.innerHTML)+
      parseFloat(this.parentNode.previousElementSibling.innerHTML.substr(1))).toFixed(2)
      clear()
    });
  }
  for (let i = 0; i < trs.length; i++) {
    remove[i].addEventListener("click", function () {
      tbody.removeChild(this.parentNode.parentNode);
      getSum.innerHTML=(parseFloat(getSum.innerHTML)-
      parseFloat(this.parentNode.previousElementSibling.previousElementSibling.innerHTML.substr(1))*
        this.parentNode.previousElementSibling.children[1].innerHTML).toFixed(2)
      clear()
    });
  }
  function clear(){
    if (tbody.children.length == 0) {
        div.style.display = "none";
        isNull.style.display = "block";
      }
  }
};
//终于写完了啊啊啊,我讨厌原生JS！！！
