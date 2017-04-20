# Counting Duplicates
# https://www.codewars.com/kata/counting-duplicates

def duplicate_count(text)
  dupes = text.chars.each_with_object([]){ |x, ary| ary << x if text.downcase.count(x) > 1 }
  dupes.uniq.count
end


# Add character to array if there's more than one occurrence
# Strip non-unique characters from array, and count the remainder