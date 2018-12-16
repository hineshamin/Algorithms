# Using Kruskals algorithm to create a clustering of nodes in a graph
import itertools


# UnionFind data structure
class UnionFind:

    def __init__(self, x):
        self.set = set([x])
        self.parent = x
        return None

    def merge(self, x):
        switch = False
        if len(self.set) < len(x.set):
            self.parent = x.parent
            switch = True
        self.set = self.set.union(x.set)
        return self, switch


# Main function
def clustering(arr, max, k=1):
    dictun, arrpar = createunionfind(max)
    while len(dictun) > k:
        val = arr.pop(0)
        spacing = val[0]
        startvertex = val[1][0]
        endvertex = val[1][1]
        if(arrpar[startvertex-1] != arrpar[endvertex-1]):
            dictun, arrpar = mergedict(
                dictun, arrpar, dictun[arrpar[startvertex-1]], dictun[arrpar[endvertex-1]])
    min = float('inf')
    for val in arr:
        if(val[0] < min):
            min = val[0]
    return min


def mergedict(dictun, arrpar, v1, v2):
    oldv1par = v1.parent
    oldv2par = v2.parent
    dictun[v1.parent], switch = v1.merge(v2)
    if switch:
        del dictun[oldv1par]
    else:
        del dictun[oldv2par]
    for val in dictun[v1.parent].set:
        arrpar[val-1] = v1.parent
    return dictun, arrpar


def createunionfind(max):
    d = {}
    arr = []
    for i in range(max):
        d[i+1] = UnionFind(i+1)
        arr.append(i+1)
    return d, arr


def readfile():
    f = open('clusteringtest.txt', 'r')
    arr = []
    max = 0
    for line in f:
        x = line.split(' ')
        x[2] = x[2].split('\n')[0]
        t = [int(x[0]), int(x[1])]
        arr.append((int(x[2]), t))
        if int(x[0]) > max:
            max = int(x[0])
        if int(x[1]) > max:
            max = int(x[1])
    arr.sort()
    return [arr, max]


[a, max] = readfile()
clustering(a, max, 4)
