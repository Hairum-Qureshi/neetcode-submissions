class Solution {

    isAlphaNumeric(char:string) {
        const upperAsciiBoundStart = "A".charCodeAt(0);
        const upperAsciiBoundEnd = "Z".charCodeAt(0);

        const lowerAsciiBoundStart = "a".charCodeAt(0);
        const lowerAsciiBoundEnd = "z".charCodeAt(0);

        const numericAsciiBoundStart = "0".charCodeAt(0);
        const numericAsciiBoundEnd = "9".charCodeAt(0);

        return upperAsciiBoundStart <= char.charCodeAt(0) && char.charCodeAt(0) <= upperAsciiBoundEnd || 
        lowerAsciiBoundStart <= char.charCodeAt(0) && char.charCodeAt(0) <= lowerAsciiBoundEnd ||
        numericAsciiBoundStart <= char.charCodeAt(0) && char.charCodeAt(0) <= numericAsciiBoundEnd;
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let lPIdx = 0;
        const stringLength = s.length - 1;
        let rPIdx = stringLength;

        while(lPIdx < rPIdx) {
            while(lPIdx < rPIdx && !this.isAlphaNumeric(s[lPIdx])) lPIdx++;
            while(rPIdx > lPIdx && !this.isAlphaNumeric(s[rPIdx])) rPIdx--;

            if(s[lPIdx].toLowerCase() !== s[rPIdx].toLowerCase()) return false;

            lPIdx++;
            rPIdx--;
        }

        return true;
    }
}
