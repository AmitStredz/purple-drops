n= int(input())
for i in range (0,n):
    temp = input()
    abr = ""
    if(len(temp) > 10):
        abr += temp[0]
        abr +=str(len(temp[1:len(temp)-1]))
        abr += temp[len(temp)-1]
    print(abr)