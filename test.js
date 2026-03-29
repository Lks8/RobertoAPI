// Teste da RobertoAPI
import RobertoAPI from './index.js';
import commentType from './commentType.js';

console.log('\n******* Testando RobertoAPI *******\n');


// Teste: Obter um comentário aleatório
console.log('----- Teste - Comentário aleatório -----');

let randomComment = RobertoAPI.getComment();

if (randomComment !== null) {
    console.log(randomComment);
    console.log("Teste ok\n");
} else {
    console.log("Teste falhou: " + randomComment + "\n");
}


// Teste: Obter um comentário raivoso
console.log('----- Teste - Comentário raivoso -----');

let angryComment = RobertoAPI.getComment(commentType.ANGRY);
let expectedAngryComments = RobertoAPI.getAllComments();

if (angryComment !== null && expectedAngryComments.includes(angryComment)) {
    console.log(angryComment);
    console.log("Teste ok\n");
} else {
    console.log("Teste falhou: " + angryComment + "\n");
}


// Teste: Obter um comentário suicida
console.log('----- Teste - Comentário suicida -----');

let suicidalComment = RobertoAPI.getComment(commentType.SUICIDAL);
let expectedSuicidalComments = RobertoAPI.getAllComments();

if (suicidalComment !== null && expectedSuicidalComments.includes(suicidalComment)) {
    console.log(suicidalComment);
    console.log("Teste ok\n");
} else {
    console.log("Teste falhou: " + suicidalComment + "\n");
}


// Teste: Ver quantidade de comentários
console.log('----- Teste - Total de comentários -----');

let commentCount = RobertoAPI.getCommentCount();
if (commentCount > 0) {
    console.log(`Total de comentários: ${commentCount}`);
        console.log("Teste ok\n");
} else {
    console.log("Teste falhou: " + commentCount + "\n");
}


// Teste: Adicionar um novo comentário
console.log('----- Teste - Adicionando novo comentário -----');

let newComment = 'Você é a razão pela qual os aliens não vêm nos visitar.';
console.log('Novo comentário: ' + newComment);

RobertoAPI.addComment(newComment);
let allComments = RobertoAPI.getAllComments();

if (allComments.includes(newComment)) {
    console.log('Novo comentário adicionado com sucesso!');
    console.log("Teste ok\n");
} else {
    console.log("Teste falhou: Novo comentário não encontrado\n");
}
