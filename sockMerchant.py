arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

def sockMerchant(n,ar):
  count = 0 
  arr=set(ar)
  for i in arr:
    x = ar.count(i)
    count+=int(x/2)
  return count
  


print(sockMerchant(5,arr))
