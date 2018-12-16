# Dijkstra's shortest path algorithm
from heapq import heappush, heappop


# Version of dijkstra not using heaps
def dijkstranaive(g, s, e=0):
    explored = {s: 0}
    while(e not in explored):
        mindist = float('inf')
        for startvertex in explored:
            for endvertex in g[startvertex]:
                greedyscore = explored[startvertex] + g[startvertex][endvertex]
                if(greedyscore < mindist and endvertex not in explored):
                    minendvert = endvertex
                    mindist = greedyscore
        explored[minendvert] = mindist
    return explored[e]


# Version of dijkstra using heaps
def dijkstraheap(g, s, e=0):
    explored = {s: 0}
    h = [(0, s)]
    while(len(h) > 0):
        dist, startvertex = heappop(h)
        if(startvertex == e):
            return dist
        for endvertex in g[startvertex]:
            greedyscore = explored[startvertex] + g[startvertex][endvertex]
            if (endvertex not in explored) or (greedyscore < explored[endvertex]):
                explored[endvertex] = greedyscore
                heappush(h, (greedyscore, endvertex))
    return explored


# Reads in a file and creates a graph
def readfiletodict():
    f = open("dtest.txt", "r")
    graph = {}
    for line in f:
        tempdict = {}
        x = line.split('\t')
        vert = x[0]
        sizes = x[1:len(x)]
        if(sizes[0] == ''):
            graph[vert] = {}
        else:
            for i in range(len(sizes)-1):
                arr = sizes[i].split(',')
                tempdict[arr[0]] = int(arr[1])
            graph[vert] = tempdict
    return graph


g = readfiletodict()
verts = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197]
string = ''
for val in verts:
    string += str(dijkstraheap(g, '1', str(val))) + ','
print(string)
