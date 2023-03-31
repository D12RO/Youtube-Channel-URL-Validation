# Youtube-Channel-URL-Validation
With this function you can check if youtube channel URL is valid.

Eg: 

<script>
console.log(isYoutubeChannel('https://www.youtube.com/channel/UCOZ257Pb8qEu-Xs0pcJlXIA')); // response: true   
console.log(isYoutubeChannel('https://www.youtube.com/c/UCOZ257Pb8qEu-Xs0pcJlXIA')); // response: true   
console.log(isYoutubeChannel('https://www.youtube.com/user/UCOZ257Pb8qEu-Xs0pcJlXIA')); // response: true   
console.log(isYoutubeChannel('https://www.youtube.com/@customusername')); // response: true   
console.log(isYoutubeChannel('https://www.youtube.com/UCOZ257Pb8qEu-Xs0pcJlXIA')); // response: false   
</script>
