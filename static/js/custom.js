$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.myForm').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
