
document.querySelector('form').addEventListener('submit',(event) => {
    event.preventDefault();
    const location = event.target.location.value;
    if(location != ''){
        fetch(`/weather?place=${location}`).then((response) => {
            response.json().then(data => {
                document.getElementById('response').innerText = data.msg;
            });
        });
    }else{
        document.getElementById('response').innerText = 'Please provide a location';
    }
});