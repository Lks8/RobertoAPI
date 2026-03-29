import { angryComments, suicidalComments, comments } from './comments.js';
import commentType from './commentType.js';

const RobertoAPI = {
    // Retorna um comentário baseado no tipo especificado
    getComment(type) {
        switch (type) {
            case commentType.RANDOM:
                return this._getRandomComment();
            case commentType.ANGRY:
                return this._getAngryComment();
            case commentType.SUICIDAL:
                return this._getSuicidalComment();
            default:
                // Caso o tipo não seja especificado, retorna um comentário aleatório
                return this._getRandomComment();
        }
    },

    // Retorna um comentário aleatório
    _getRandomComment() {
        const randomIndex = Math.floor(Math.random() * comments.length);
        return comments[randomIndex];
    },

     // Retorna um comentário raivoso
    _getAngryComment() {
        const angryIndex = Math.floor(Math.random() * angryComments.length);
        return angryComments[angryIndex];
    },

     // Retorna um comentário suicida
    _getSuicidalComment() {
        const suicidalIndex = Math.floor(Math.random() * suicidalComments.length);
        return suicidalComments[suicidalIndex];
    },

    // Adiciona um novo comentário
    addComment(comment) {
        if (typeof comment !== 'string' || comment.trim() === '') {
            throw new Error('Comentário inválido');
        }
        comments.push(comment);
    },

    // Retorna todos os comentários disponíveis
    getAllComments() {
        return [...comments];
    },

    // Retorna a quantidade de comentários disponíveis
    getCommentCount() {
        return comments.length;
    }
};

export default RobertoAPI;
