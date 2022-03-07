ar = [4,2,7,8,9]
k=3
def divisibleSumPairs(n, k, ar):
  count = 0 
  for i in ar:
      for j in ar:
          if (i+j)%k==0 and i < j:
            print(i,j)
            count+=1
  return count
print(divisibleSumPairs(1,k,ar))

