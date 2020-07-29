import React from "react";
import bookmarks from "../images/bookmarks.svg";

export default function Home() {
	return (

		<div className="container">
			<h1 className="display-4">Please help gather developer resources!</h1>
			<img src={bookmarks} alt="bookmarks" />
		</div>
	);
}

/* 
            <script>

			$(document).ready(function() {

				setTimeout(() => {
					$('.modal').modal('show')
				}, 1500);
				
				// Initialize the tooltip.
				$('#share').tooltip();

				// When the copy button is clicked, select the value of the text box, attempt
				// to execute the copy command, and trigger event to update tooltip message
				// to indicate whether the text was successfully copied.
				$('#share').bind('click', function() {
					let input = document.getElementById('site-link');
					input.select();
					input.setSelectionRange(0, input.value.length + 1);

					try {
					let success = document.execCommand('copy');
					if (success) {
						$('#share').trigger('copied', ['Copied!']);
					} else {
						$('#share').trigger('copied', ['Copy with Ctrl-c']);
					}

					} catch (err) {
					$('#share').trigger('copied', ['Copy with Ctrl-c']);
					}
				});

				// Handler for updating the tooltip message.
				$('#share').bind('copied', function(e) {
					$(this).tooltip('hide')
						.tooltip('show')
						.attr('title', "Copy to Clipboard")
				});
			});

		</script> */
