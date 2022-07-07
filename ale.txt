import random
import string
rp=0
soma="a"
pl=input("diga uma palavra de no maximo 4 digitos:")
rep=1
while(rep==1):
 rp=rp+1
 if rp>4:
  rp=1
 u=(random.choice(string.ascii_lowercase))
 d=(random.choice(string.ascii_lowercase))
 t=(random.choice(string.ascii_lowercase))
 q=(random.choice(string.ascii_lowercase))
 if rp==1:
  soma=u
 if rp==2:
  soma=u+d
 if rp==3:
  soma=u+d+t
 if rp==4:
  soma=u+d+t+q
 print(soma)
 if pl==soma:
  print("sua palavra é:%s"%(soma))
  pl=input("")

