// $(document).ready(function(){

// 	$('.tab-pane:not(:first)').hide();


// 	$('.nav-item').click(function(event) {
// 		event.preventDefault();

// 		$('.tab-pane').hide();
// 		$('.nav-item').removeClass('active');

// 		$(this).addClass('active');

// 		var target = $(this).attr('href');
// 		// console.log(target);

// 		// $(target).fadeIn();
// 		$(target).show();
// 	});
// });

(function() {
	'use strict';

	var tabPane = document.querySelectorAll('.tab-pane');
		// console.log(tabPane);
		for (var i = 1; i < tabPane.length; i++) {
			tabPane[i].style.display = 'none';
		}


		var navItem = document.querySelectorAll('.nav-item');

		for (var i = 0; i < navItem.length; i++) {
			navItem[i].addEventListener('click', function(event) {
				// alert('ok');
				event.preventDefault();

				var tabPane = document.querySelectorAll('.tab-pane');
					
					for (var i = 0; i < tabPane.length; i++) {
						tabPane[i].style.display = 'none';
					}

				var navItem1 = document.querySelectorAll('.nav-item');
					
					for (var i = 0; i < navItem1.length; i++) {
						navItem1[i].classList.remove('active');
					}

				this.className += ' active';


				var href = event.currentTarget.getAttribute('href');

				if (href == document.getElementById('nav-home').id) {
					document.getElementById('nav-home').style.display = "block";
				}


				if (href == document.getElementById('nav-profile').id) {
					// console.log(document.getElementById('nav-profile').id);
					document.getElementById('nav-profile').style.display = "block";
				}

				if (href == document.getElementById('nav-contact').id) {
					document.getElementById('nav-contact').style.display = "block";
				}

			});
		}

})();