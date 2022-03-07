n= 6
def staircase(n):
  for i in range(0,n):
    for j in range(0,(n-1)-(i)):
      print(" ",end="")
    for x in range (0,i+1):
      print("#",end="")
    print()
    
staircase(6)