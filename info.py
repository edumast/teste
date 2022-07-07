#!/usr/bin/env python
import time
whi=1
while(whi==1):
 r1=input("alguma pergunta dev?                                  ")
 if r1=="n":
  print("ok tenha um bom dia")
  break
 elif r1=="s":
  whi=2
 elif r1=="com":
  whi=3
 while(whi==2):
  r2=input("qual sua pergunta?                                    ")
  if r2=="com":
   whi=3
  else:
   print("descupe não entendi poderia repetir")
  while(whi==3):
   rep=1
   com=input("rem cal free rm mv history touch mkdir                ")
   if com=="rem":
    print("renomear arquivo ou pasta")
   elif com=="cal":
    print("mostra o calendario")
   elif com=="free":
    print("mostra a memoria")
   elif com=="rm":
    print("remove pasta ou arquivo")
   elif com=="mv":
    print("move pasta ou arquivo") 
   elif com=="history":
    print("mostra historico de comandos")
   elif com=="touch":
    print("cria arquivo")
   elif com=="mkdir":
    print("cria pasta")
   else:
    print("desculpe nao entendi poderia repetir?")
    rep=0
   if rep==1:
    whi=4
   while(whi==4):
    r3=input("outra duvida?                                         ")
    if r3=="com":
     whi=3
    elif r3=="s":
     whi=2
    elif r3=="n":
     break

 break




