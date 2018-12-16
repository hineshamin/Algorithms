def weightedgraph(arr):
    maxset = [0, arr[1]]
    for i in range(2, len(arr)):
        maxset.append(max(maxset[i-1], maxset[i-2] + arr[i]))
    s = set([])
    i = len(arr) - 1
    while i >= 1:
        if(maxset[i-1] >= (maxset[i-2] or 0) + arr[i]):
            i -= 1
        else:
            s.add(i)
            i -= 2
    return s


def readfiletoarr():
    arr = []
    f = open('weightedgraph.txt', 'r')
    for line in f:
        x = line.split(' ')
        arr.append(int(x[0].split('\n')[0]))
    return arr


arr = readfiletoarr()
a = [1, 2, 3, 4, 17, 117, 517, 997]
s = weightedgraph(arr)
s1 = ''
for val in a:
    if val in s:
        s1 += '1'
    else:
        s1 += '0'
print(s1)
