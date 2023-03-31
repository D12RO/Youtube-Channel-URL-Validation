<script>
function isYoutubeChannel(url) {
    let regCheck = RegExp('/(https?:\/\/)?(www\.)?youtu((\.be)|(be\..{2,5}))\/((user)|(channel)|(c)|(user)|(@))\/?([a-zA-Z0-9\-_]{1,})/'); 

    if(regCheck.test(url)) return true;
    return false; 
}
</script>
