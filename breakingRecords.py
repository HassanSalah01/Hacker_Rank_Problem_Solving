
score = [3 ,4, 21 ,36 ,10 ,28 ,35, 5 ,24 ,42]

def breakingRecords(scores):
  min  = max = 0
  Minimum = Maximum = scores[0]
  for i in score:
    if i < Minimum :
      Minimum = i 
      min = min+1
    elif i > Maximum :
      Maximum = i 
      max= max+1
  return [max,min]


print(breakingRecords(score))
