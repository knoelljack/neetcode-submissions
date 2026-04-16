class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        chars = {}
        for char in s:
            chars[char] = chars.get(char,0) + 1
        for char in t:
            if char not in chars:
                return False
            chars[char] -= 1
            if chars[char] < 0:
                return False
        
        return all(v == 0 for v in chars.values())
        