jQuery(document).ready (function ($) {
	$("#form-group").on("submit", function (e) {
		e.preventDefault();

		const zip=$("#zip-Code").val();
		const weatherUrl=`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=6b625e360de2cb159cbebe6e63a6ad40`;
		$('#weather').html('');
		
		$('#loading-animation').toggleClass('d-none');

		axios.get(weatherUrl).then(function (response) {
			$('#loading-animation').toggleClass('d-none');
			const {weather, main, name} = response.data;
			const { temp, feels_like } = main;

			const round_Tem = Math.round(temp);
			const round_Feel = Math.round(feels_like);
			
			$('#weather').html(
                `<div class="container border border-danger mt-3 box bg-light">
                    <div class="row align-items-center">                        
                        <div class="col text-center">
							<h2 class="text-primary">${name}, USA <i class="fas fa-cloud-sun"></i></h2>
							<h4 class ="text-danger"> Current Temperature ${round_Tem} F </h4>
							<h5 class="text-center">Feels Like: ${round_Feel} F</h5>
                        </div>
                    </div>
                </div>
            `);
		}).catch(function(error) {
			$('#loading-animation').toggleClass('d-none');
			alert('Zip Code Invalid!!!');
		});
	});


});