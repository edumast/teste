#!/bin/bash
whi=1
ou=0
aleatorio="random.randrange"
while [ $whi = 1 ];do
echo comando:
echo "comando:" >> stx.txt
ou=0
rr1="tf4"
fn=1
read "r1"
echo $r1 >> stx.txt
if [[ -n "$r1" ]]
then
    r1=$r1
else
    r1="null"
fi
if [ $r1 = "python" ];then
py="#!/usr/bin/env python"
echo certesa?
echo "certesa?" >> stx.txt
read pi
echo $pi >> stx.txt
if [ $pi = "sim" ];then
echo $py > "shell.txt"
echo feito
echo "feito" >> stx.txt
fi

fi
if [ $r1 = null ];then
r1=10
fi
if [ $r1 = "escrever" ];
then
echo "escrever:"
echo "escrever:" >> stx.txt
read esc
echo $esc >> stx.txt
rr1="print('"
rr1=$rr1$esc"')"

fi
if [ $r1 = "escrever_variavel" ];
then
echo "escrever:"
echo "escrever:" >> stx.txt
read esc
echo $esc >> stx.txt
rr1="print("$esc")"
echo feito
echo "feito" >> stx.txt
fi
if [ $r1 = "importar" ];
then
read imp
echo $imp >> stx.txt
rr1="import "$imp
echo feito
echo "feito" >> stx.txt
fi
if [ $r1 = "variavel" ];
then
read var
echo $var >> stx.txt
rr1=$var
echo "igual há"
echo "igual há" >> stx.txt
read rp
echo $rp >> stx.txt
if [ "$rp" = "aleatorio" ];
then
rp=$aleatorio
echo "de"
echo "de" >> stx.txt
read al
echo $al >> stx.txt
echo "há"
echo "há" >> stx.txt
read al2
echo $al2 >> stx.txt
rp=$rp"("$al","$al2")"
fi
rr1=$rr1"="$rp
fi
if [ "$r1" = "se" ];
then
read ig
echo $ig >> stx.txt
rrn="if ("$ig"):"
echo "fazer"
echo "fazer" >> stx.txt
whi=2
echo $rrn >> shell.txt
fi
while [ "$whi" = 2 ];do
read oq
echo $oq >> stx.txt
if [ "$oq" = "parar" ]
then
whi=1
break
fi
oq2=$oq
oq2=$oq2
ou=1
echo " "$oq2 >> shell.txt
echo " "$oq2 >> stx.txt
done
if [ $r1 = "entrar" ]
then
echo variavel:
echo "variavel:" >> stx.txt
read va
echo $va >> stx.txt
echo tipo:
echo "tipo:" >> stx.txt
read sis
echo $sis >> stx.txt
if [ $sis = "letra" ];then
is="str"
fi
if [ $sis = "inteiro" ];then
is="int"
fi
if [ $sis = "flutuante" ];then
is="float"
fi
echo escrever:
echo "escrever:" >> stx.txt
read escv
echo $escv >> stx.txt
rr1="="$is"(input('"
rr1=$va$rr1$escv"'))"

fi
if [ $r1 = "editor" ];then
nano shell.txt

fi
if [ "$rr1" = "tf4" ];then
fn=0
fi
if [ "$r1" = "sair" ];then
break
fi
if [ $fn = 1 ];then
echo "$rr1" >> shell.txt
fi
done
