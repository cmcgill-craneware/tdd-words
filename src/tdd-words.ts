export class TddWords {
    wordCount(stringToCount: string): Number {
        if (stringToCount === null) {
            return 0;
        }

        let isOnlyWhitespace = /^\s+$/.test(stringToCount);
        if (isOnlyWhitespace) {
            return 0;
        }

        let normalizedString = this.sanitizeInputString(stringToCount);
        let normalizedStringArray = normalizedString.split(' ');

        normalizedStringArray = normalizedStringArray.filter(word => {
            return word.trim().length;
        });

        let uniqueWordArray = this.returnDistinctWords(normalizedStringArray);
        return uniqueWordArray.length;
    }

    private returnDistinctWords(wordArray) {
        let uniqueWordArray = [];
        for (let word of wordArray) {
            if (!uniqueWordArray.includes(word)) {
                uniqueWordArray.push(word);
            }
        }
        return uniqueWordArray;
    }

    private sanitizeInputString(str: string): string {
        let sanitizedString = str.toLowerCase();
        sanitizedString = this.removeAccents(sanitizedString);
        return this.removePunctuation(sanitizedString);
    }

    private removeAccents(str): string {
        return str.normalize('NFD').replace(/[\u0080-\u036f]/g, '');
    }

    private removePunctuation(str): string {
        return str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
    }

};