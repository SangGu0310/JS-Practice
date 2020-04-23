let word = document.querySelector(".word"),
    form = document.querySelector(".form"),
    input = document.querySelector(".answer"),
    btn = document.querySelector(".btn"),
    result = document.querySelector(".result");

 word.append("제로초");

// 이렇게 해도 enter누르면 실행이된다.
//  btn.addEventListener("click",function(){
//      if(word.textContent[word.textContent.length-1] === input.value[0]){
//          result.textContent = "정답";
//          word.textContent = input.value;
//          input.value = '';
//          input.focus();
//      } else{
//         result.textContent = "땡";
//         input.value = '';
//         input.focus();
//      }
//  });

 // submit으로 페이지전환막기
 form.addEventListener("submit",function(evt){
     evt.preventDefault();
    if(word.textContent[word.textContent.length-1] === input.value[0]){
        result.textContent = "정답";
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else{
       result.textContent = "땡";
       input.value = '';
       input.focus();
    }
});

 