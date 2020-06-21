window.addEventListener('DOMContentLoaded', function() {



//Отызывы

const commentContent = document.querySelectorAll('.feedback-item'),
		commentBtn = document.querySelector('.feedback-all'),
		commentBtnClose = document.querySelector('.close');

		function hide(a) {
			for (let i = 0; i < commentContent.length; i++) {
				commentContent[0].style.display = "block";
				commentContent[i].style.display = "none";
		}
	}
hide();

		function show(a) {
				commentBtn.addEventListener('click', function() {
					for (let i = 0; i < commentContent.length; i++) {
						commentContent[i].style.display = "block";
				}
				});
			
		}
show();

		function closeComment(a) {
			commentBtnClose.addEventListener('click', function() {
				for (let i = 1; i < commentContent.length; i++) {
					commentContent[i].style.display = "none";
			}
			});
		}

closeComment();

//Модальное окно 

let 	modal = document.querySelector('.contacts'),
		header = document.querySelector('.main-header'),
		modalBtn = document.querySelector('.btn_modal');
		closeModalBtn = document.querySelector('.closeModal')

		function hideModal(b) {
			modal.style.display = "none";
		}
	hideModal();

			modalBtn.addEventListener('click', function(){
				modal.style.display = "block";
				header.style.display = "none";
				document.body.style.overflow = 'hidden';
			});

			closeModalBtn.addEventListener('click', function() {
				modal.style.display = "none";
				header.style.display = "block";
				document.body.style.overflow = "";
			});

});