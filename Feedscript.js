const inputBusca = document.getElementById('inputBusca');
const posts = document.querySelectorAll('.post');

inputBusca.addEventListener('keyup', (e) => {
    const termoBusca = e.target.value.toLowerCase();

    posts.forEach(post => {
        const conteudoTexto = post.innerText.toLowerCase();
        
        if (conteudoTexto.includes(termoBusca)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});

const botoesLike = document.querySelectorAll('.btn-like');

botoesLike.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.innerText.includes('🤍')) {
            botao.innerText = '❤️ Curtiu!';
            botao.style.color = 'red';
            botao.style.fontWeight = 'bold';
        } else {
            botao.innerText = '🤍 Curtir';
            botao.style.color = '#666';
            botao.style.fontWeight = 'normal';
        }
    });
});

const btnPostar = document.getElementById('btnPostar');
const textoPost = document.getElementById('textoPost');
const feedContainer = document.querySelector('main'); 

btnPostar.addEventListener('click', () => {
    const texto = textoPost.value;

    if (texto === "") {
        alert("O Batman não fala nada, mas você precisa escrever algo!");
        return;
    }


    const novoPost = document.createElement('article');
    novoPost.classList.add('post');
    novoPost.style.marginTop = '12px';
    

    novoPost.innerHTML = `
        <div class="head">
            <div class="avatar" style="background-color:black;"></div> <div>
                <strong>Você</strong>
                <div class="muted">Agora mesmo</div>
            </div>
        </div>
        <div class="content">
            <p>${texto}</p>
        </div>
    `;


    const primeiroPostAntigo = document.querySelector('.post');
    feedContainer.insertBefore(novoPost, primeiroPostAntigo);

    textoPost.value = '';
});