const perfilUser = document.getElementById('perfil');
const seguidores = document.getElementById('seguidores');

async function meuPerfil() {
    await fetch("https://api.github.com/users/belevaneeIV787")
        .then(response => response.json())
        .then(data => {
            perfilUser.innerHTML = `
            <div class="divFlex">
                <div class="perfil-img">
                    <img src="${data.avatar_url}" class="perfil-img">
                </div>
                <div class="descricao-perfil">
                    <h2 class="nome">${data.name}</h2>
                    <p class="bio">${data.bio}</p>
                    <button class="downloadBtn">Download Currículo</button>
                    <button class="contatoBtn">Contato</button>
                </div>
                </div>
            `
    })
}

async function Seguidores() {
    await fetch("https://api.github.com/users/belevaneeIV787/followers")
        .then(response => response.json())
        .then(data => {
            data.map(follower => {
                seguidores.innerHTML += `
                    <div class="seguidor">
                        <img  class="imagemSeguidor" onclick="perfilSeguidor('${follower.login}')" src="${follower.avatar_url}">
                        <p class="nomeSeguidor">${follower.login}</p>
                    </div>
                `;
            });
        });
}
async function perfilSeguidor(seguidor) {
    await fetch(`https://api.github.com/users/${seguidor}`)
        .then(response => response.json())
        .then(data => {
            perfilUser.innerHTML = `
            <div class="divFlex">
            <div class="perfil-img">
                <img src="${data.avatar_url}" class="perfil-img">
            </div>
            <div class="descricao-perfil">
                <h2 class="nome">${data.name}</h2>
                <p class="bio">${data.bio}</p>
                <button class="downloadBtn">Download Currículo</button>
                <button class="contatoBtn">Contato</button>
            </div>
            </div>
            `
        })
}

Seguidores()
meuPerfil()
