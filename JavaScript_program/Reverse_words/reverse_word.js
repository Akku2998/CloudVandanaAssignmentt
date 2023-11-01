function reverseWords(sentence) {
    let wordStart = 0;
    const reversedWords = [];
    let wordBuffer = '';

    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === ' ') {
            if (wordBuffer.length > 0) {
                reversedWords.push(reverseString(wordBuffer));
                wordBuffer = '';
            }
        } else {
            wordBuffer += sentence[i];
        }
    }

    return reversedWords.join(' ');
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);

console.log('Original sentence:', inputSentence);
console.log('Reversed words sentence:', reversedSentence);
