#include <iostream>
using namespace std;
#include <string>
int main()
{
int whi;
int rpt;
int qnt;
double um;
double dois;
double tres;
double quatro;
double cinco;
rpt=0;
whi=1;
cout<<"quantas provas?:";
cin>>qnt;
while(whi==1){

cout<<"nota:";
rpt=(rpt+1);
if (rpt==1){
cin>>um;

}
if (rpt==2){
cin>>dois;

}
if (rpt==3){
cin>>tres;

}
if (rpt==4){
cin>>quatro;

}
if (rpt==5){
cin>>cinco;

}
if (rpt==qnt){
whi=2;
}
}
while(whi==2){
double soma;
double somad;
soma=(um+dois+tres+quatro+cinco);
somad=(soma/qnt);
cout<<"soma:";
cout<<somad;
string acb;
cin>>acb;
break;
}
}
