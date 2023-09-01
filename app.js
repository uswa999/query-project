//using selectors inside the element
// // traversing the dom




// let questions=document.querySelectorAll('.question');
// let btn=questions.querySelector('')

// plus.addEventListener('click', function(){
// if(paragraph.style.display==='none'&& minus.style.display=='none'&&plus.style.display=='inline'){
// 	paragraph.style.display= 'block';
// 	minus.style.display='inline';
// 	plus.style.display='none';
// }

// else{
// 	paragraph.style.display='none';
// 	minus.style.display='none';
// 	plus.style.display='inline';

// }																																									
// });



let questions=document.querySelectorAll('.question');
 questions.forEach(function (question){
    let btn =question.querySelector('.question-btn');
 	btn.addEventListener('click', function (){

 		questions.forEach(function (item){
 			if(item!== question){
 				item.classList.remove('show-text');
 			}
 		});
 		question.classList.toggle('show-text');
 	});
 });