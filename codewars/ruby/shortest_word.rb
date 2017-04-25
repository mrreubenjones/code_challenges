# Shortest Word
# https://www.codewars.com/kata/shortest-word/train/ruby

def find_short(s)
  l = s.length
  s.split(" ").each { |word| l = word.length if word.length < l  }
  l
end