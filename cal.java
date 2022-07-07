package cal;
import java.util.Scanner;
public class cal{
public static void main(String[] args){
String sr;
int whi=1;
int sm;
double x;
double y;
double r;
r=1;
Scanner s=new Scanner(System.in);
while(whi==1){
System.out.println("1+ 2- 3× 4÷");
sm=s.nextInt();
System.out.println("primeiro:");
x=s.nextDouble();
System.out.println("segundo:");
y=s.nextDouble();
if (sm==1){
r=(x+y);
}
if (sm==2){
r=(x-y);
}
if (sm==3){
r=(x*y);
}
if (sm==4){
r=(x/y);
}
System.out.println("resultado:");
System.out.println(r);
System.out.println("reiniciar");
sr=s.nextLine();
System.out.println("n or s");
sr=s.nextLine();
if ((sr).equals("n")){
break;

}
}
}
}

