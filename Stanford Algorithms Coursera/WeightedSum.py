from heapq import heappop, heappush


def weightedsum(h):
    sum = 0
    length = 0
    while len(h) > 0:
        val = heappop(h)
        for i in range(len(val[1]) - 1, -1, -1):
            weight = val[1][i][0]
            length += val[1][i][1]
            sum += weight * length
    print(sum)


def readfilediff():
    d = {}
    h = []
    f = open('jobs.txt', 'r')
    for line in f:
        x = line.split(' ')
        x[1] = x[1].split('\n')[0]
        x = [int(x[0]), int(x[1])]
        if int(x[1]) - int(x[0]) in d:
            d[int(x[1]) - int(x[0])].append(x)
        else:
            d[int(x[1]) - int(x[0])] = [x]
    for key in d:
        d[key].sort()
        heappush(h, (key, d[key]))
    return h


def readfileratio():
    d = {}
    h = []
    f = open('jobs.txt', 'r')
    for line in f:
        x = line.split(' ')
        x[1] = x[1].split('\n')[0]
        x = [int(x[0]), int(x[1])]
        if float(x[1])/float(x[0]) in d:
            d[float(x[1])/float(x[0])].append(x)
        else:
            d[float(x[1])/float(x[0])] = [x]
    for key in d:
        d[key].sort()
        heappush(h, (key, d[key]))
    return h


h1 = readfilediff()
h2 = readfileratio()
weightedsum(h1)
weightedsum(h2)
