$(document).ready(()=> {

    const profileAvatar = $('#user-avatar');
    const profileName = $('#user-name');
    const profilLogin = $('#user-login');
    const repositorie = $('#repositories');
    const followers = $('#followers');
    const following = $('#following');
    const linkRepo = $('#user-link')
    

    window.fetch('https://api.github.com/users/wbarcellosn')
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        
        profileAvatar.prop('src', json.avatar_url);
        profileName.text(json.name);
        profilLogin.text('@' + json.login);
        repositorie.text(json.public_repos);
        followers.text(json.followers);
        following.text(json.following);
        linkRepo.prop('href', json.html_url)
    })
})