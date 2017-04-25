# Unique in Order
# https://www.codewars.com/kata/unique-in-order

def unique_in_order(iterable)
  iterable.class == String ? iterable.squeeze.chars : iterable.uniq
end