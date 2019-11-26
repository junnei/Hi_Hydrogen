f = open("data4.txt")

Data = [[""]*4 for i in range(101)]

i = 0

for line in f:
    temp = line.rstrip(' \n').split(',')
    Data[i][0] = temp[1]+"("+temp[0]+")"
    Data[i][1] = temp[3]
    Data[i][2] = temp[4]
    Data[i][3] = temp[2]
    i = i + 1

for i in range(0,len(Data)):
    print('''{
        coordinate: {
          latitude: '''+Data[i][2]+''',
          longitude: '''+Data[i][1]+''',
        },
        title: "'''+Data[i][0]+'''",
        description: "'''+Data[i][3]+'''",
        image: Images['''+str(i)+'''],
      },''')
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

f.close()