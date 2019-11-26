f = open("data.txt")

Data = [[0]*13 for i in range(135)]

i = 0

for line in f:
    #A
    if(i<24):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i][0] = temp[0]
        Data[i][1] = temp[1]
    elif(i<25):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<24):
                Data[j][2] = temp[2*j]
                Data[j][3] = temp[2*j+1]
    elif(i<26):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<24):
                Data[j][4] = temp[2*j]
                Data[j][5] = temp[2*j+1]
    elif(i<27):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<24):
                Data[j][6] = temp[3*j]
                Data[j][7] = temp[3*j+1]
                Data[j][8] = temp[3*j+2]
    elif(i<28):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<24):
                Data[j][9] = temp[2*j]
                Data[j][10] = temp[2*j+1]
    elif(i<29):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<24):
                Data[j][11] = temp[2*j]
                Data[j][12] = temp[2*j+1]
    #B
    elif(i<66):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i-5][0] = temp[0]
        Data[i-5][1] = temp[1]
    elif(i<67):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][2] = temp[2*j]
                Data[j+24][3] = temp[2*j+1]
    elif(i<68):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][4] = temp[2*j]
                Data[j+24][5] = temp[2*j+1]
    elif(i<69):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][6] = temp[2*j]
                Data[j+24][7] = temp[2*j+1]
    elif(i<70):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][8] = temp[2*j]
                Data[j+24][9] = temp[2*j+1]
    elif(i<71):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][10] = temp[j]
    elif(i<72):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][11] = temp[j]
    elif(i<73):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<37):
                Data[j+24][12] = temp[j]
    #C
    elif(i<93):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i-12][0] = temp[0]
        Data[i-12][1] = temp[1]
    elif(i<94):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][2] = temp[2*j]
                Data[j+61][3] = temp[2*j+1]
    elif(i<95):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][4] = temp[2*j]
                Data[j+61][5] = temp[2*j+1]
    elif(i<96):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][6] = temp[2*j]
                Data[j+61][7] = temp[2*j+1]
    elif(i<97):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][8] = temp[2*j]
                Data[j+61][9] = temp[2*j+1]
    elif(i<98):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][10] = temp[2*j]
                Data[j+61][11] = temp[2*j+1]
    elif(i<99):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<20):
                Data[j+61][12] = temp[j]
    #D[1:31]
    elif(i<130):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i-18][0] = temp[0]
        Data[i-18][1] = temp[1]
    elif(i<131):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][2] = temp[2*j]
                Data[j+81][3] = temp[2*j+1]
    elif(i<132):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][4] = temp[2*j]
                Data[j+81][5] = temp[2*j+1]
    elif(i<133):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][6] = temp[3*j]
                Data[j+81][7] = temp[3*j+1]
                Data[j+81][8] = temp[3*j+2]
    elif(i<134):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][9] = temp[j]
    elif(i<135):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][10] = temp[2*j]
                Data[j+81][11] = temp[2*j+1]
    elif(i<136):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<31):
                Data[j+81][12] = temp[j]
    #D[32:45]
    elif(i<150):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i-24][0] = temp[0]
        Data[i-24][1] = temp[1]
    elif(i<151):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<14):
                Data[j+112][2] = temp[3*j]
                Data[j+112][3] = temp[3*j+1]
                Data[j+112][4] = temp[3*j+2]
    elif(i<152):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<14):
                Data[j+112][5] = temp[4*j]
                Data[j+112][6] = temp[4*j+1]
                Data[j+112][7] = temp[4*j+2]
                Data[j+112][8] = temp[4*j+3]
    elif(i<153):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<14):
                Data[j+112][9] = temp[2*j]
                Data[j+112][10] = temp[2*j+1]
    elif(i<154):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<14):
                Data[j+112][11] = temp[j]
    elif(i<155):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<14):
                Data[j+112][12] = temp[j]
    #F
    elif(i<164):
        temp = line.rstrip(' \n').split(' ',maxsplit=1)
        Data[i-29][0] = temp[0]
        Data[i-29][1] = temp[1]
    elif(i<165):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][2] = temp[2*j]
                Data[j+126][3] = temp[2*j+1]
    elif(i<166):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][4] = temp[j]
    elif(i<167):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][5] = temp[2*j]
                Data[j+126][6] = temp[2*j+1]
    elif(i<168):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][7] = temp[3*j]
                Data[j+126][8] = temp[3*j+1]
                Data[j+126][9] = temp[3*j+2]
    elif(i<169):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][10] = temp[2*j]
                Data[j+126][11] = temp[2*j+1]
    elif(i<170):
        temp = line.rstrip(' \n').split(' ')
        for j in range(0,len(temp)):
            if(j<9):
                Data[j+126][12] = temp[j]
    i = i + 1

#print(Data[0])
#print(Data[23])
#print(Data[24])
#print(Data[60])
#print(Data[61])
#print(Data[80])
#print(Data[81])
#print(Data[111])
#print(Data[112])
#print(Data[125])
#print(Data[126])
#print(Data[134])

print("전체 상세 정보 확인 : 0 / 도로별 평균 양방 통행수 : 1")
print("도심 교통량:A / 시계 교통량:B / 교량 교통량:C / 간선 교통량:D / 도시고속도로 교통량:F")
a = input()
if(a!='1' and a!='0'):
    print("지점번호 : ")
    b = input()
    if(int(b)<10):
        b = "0"+str(b)
    else:
        b = str(b)
    for i in range(0,len(Data)):
        if(Data[i][0]==a+'-'+b):
            print('지점 : '+Data[i][0] + ' - '+Data[i][1])
            print('유입 차로수 : ' + Data[i][2] + ' 유출 차로수 : ' + Data[i][3] )
            print('2017 양방  : ' + Data[i][4] + ' 유입 : ' + Data[i][5] + ' 유출 : ' + Data[i][6])
            print('2018 양방  : ' + Data[i][7] + ' 유입 : ' + Data[i][8] + ' 유출 : ' + Data[i][9])
            print('증감현황  : ' + Data[i][10] + ' 유입 : ' + Data[i][11] + ' 유출 : ' + Data[i][12])

if(a=='0'):
    for i in range(0,len(Data)):
        print('지점 : ' + Data[i][0] + ' - '+ Data[i][1])
        print('유입 차로수 : ' + Data[i][2] + ' 유출 차로수 : ' + Data[i][3] )
        print('2017 양방  : ' + Data[i][4] + ' 유입 : ' + Data[i][5] + ' 유출 : ' + Data[i][6])
        print('2018 양방  : ' + Data[i][7] + ' 유입 : ' + Data[i][8] + ' 유출 : ' + Data[i][9])
        print('증감현황  : ' + Data[i][10] + ' 유입 : ' + Data[i][11] + ' 유출 : ' + Data[i][12])
        print()

if(a=='1'):
    for i in range(0,len(Data)):
        print('지점 : ' + Data[i][0] + ' - '+ Data[i][1])
        if(Data[i][4]=='-'):
            if(Data[i][7]=='-'):
                print('평균 양방 : -')
            else:
                print('평균 양방 : ' + Data[i][7].split(',')[0] + Data[i][7].split(',')[1] )
        else:
            if(Data[i][7]=='-'):
                print('평균 양방 : ' + Data[i][4].split(',')[0] + Data[i][4].split(',')[1] )
            else:
                print('평균 양방 : ' + str(int((int(Data[i][4].split(',')[0]) + int(Data[i][7].split(',')[0]))/2)) + str(int((int(Data[i][4].split(',')[1]) + int(Data[i][7].split(',')[1]))/2)))
        print()
f.close()