bill =[3, 10,2 ,9]
k = 1
b = 7
def bonAppetit(bill, k, b):
  bill.pop(k)
  x = b-(sum(bill)/2)
  if x>0:
    print(int(x))
  else:
    print("Bon Appetit")



bonAppetit(bill,k,b)
