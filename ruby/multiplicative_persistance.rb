# multiplicative persistence
# https://www.codewars.com/kata/persistent-bugger

def persistence(n)
  count_ary = [] # initialize an array to count the multiplication instances
  loop do
    ary = n.to_s.split('') # split number into an array to multiply
    num = ary.reduce(:*) # multiply array elements to get the next number
    count_ary << num # add the new number to the array, for a record
    break if num.to_s.length == 1 # break the loop when number is a single digit
  end
  count_ary.length # return the multiplicative persistence
end





