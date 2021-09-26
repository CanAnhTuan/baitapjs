#include<stdio.h>
#include<math.h>
int giaiPT(float a, float b, float c,float &x1, float &x2){
    float delta = b*b - 4*a*c;
    if(delta<0){
        x1=x2=0.0;
        return 0;
    }
    else if(delta==0){
        x1 = x2 = -b/(2*a);
        return 1;
    }
    else{
        delta = sqrt(delta);
        x1 = (-b + delta) / (2*a);
        x2 = (-b - delta) / (2*a);
        return 2;
    }
}
int main(){
    float a,b,c;
    float x1,x2;
    do{
        printf("Nhap a (a!=0): ");
        scanf("%f",&a);
        printf("Nhap b: ");
        scanf("%f",&b);
        printf("Nhap c: ");
        scanf("%f",&c);
    }