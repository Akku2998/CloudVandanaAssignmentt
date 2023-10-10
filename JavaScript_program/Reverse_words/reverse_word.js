function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const reversedWord = reverseString(word);
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);

console.log('Original sentence:', inputSentence);
console.log('Reversed words sentence:', reversedSentence);
