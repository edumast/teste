#!/usr/bin/env python
import random
nm=int(input("diga um numero de 0 a 100000:"))
rpt=1
while(rpt==1):
 n=int(random.randrange(0,100001))
 print(n)
 if (nm==n):
  print("o resultado é:%i"%(n))
  nm=int(input())


