class Solution {

    mapCharCount(wordLength:number, word:string): Map<string, number>   {
        const map = new Map<string, number>();

        for(let i = 0; i < wordLength; i++) {
            if(map.has(word[i])) {
                let total = map.get(word[i]) as number;
                map.set(word[i], total += 1);
            }
            else map.set(word[i], 1);
        }

        return map;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) return false;

        const wordLength = s.length;

        const sMap = this.mapCharCount(wordLength, s);
        const tMap = this.mapCharCount(wordLength, t);

        for (const [char, count] of sMap) {
            if (tMap.get(char) !== count) return false;
        }

        return true;
    }
}
