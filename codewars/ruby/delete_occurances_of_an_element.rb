# Delete occurences of an element if it occurs more than n times
# https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times

def delete_nth(album,n)
  album.each_with_object([]){ |pic,alb| alb << pic if alb.count(pic) < n  }
end

# Push each picture into a new album, if the picture count in the new album is less than the limit.