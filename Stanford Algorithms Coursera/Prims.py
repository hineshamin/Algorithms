# Prims algorithm for finding an MST
from heapq import heappush, heappop


# Main function using heaps
def primsheap(g, s, e=0):
    cost = 0
    explored = {s: 0}
    h = [(0, s)]
    while(len(h) > 0):
        dist, startvertex = heappop(h)
        if startvertex not in explored:
            explored[startvertex] = dist
        elif dist < explored[startvertex]:
            explored[startvertex] = dist
        for endvertex in g[startvertex]:
            if endvertex not in explored:
                score = g[startvertex][endvertex]
                heappush(h, (score, endvertex))
    for key in explored:
        cost += explored[key]
    return cost


# Reads in a file and creates a graph
def readfiletodict():
    f = open("primstest.txt", "r")
    graph = {}
    for line in f:
        x = line.split(' ')
        x[2] = x[2].split('\n')[0]
        if x[0] in graph:
            graph[x[0]][x[1]] = int(x[2])
        else:
            graph[x[0]] = {x[1]: int(x[2])}
        if x[1] in graph:
            graph[x[1]][x[0]] = int(x[2])
        else:
            graph[x[1]] = {x[0]: int(x[2])}
    return graph


g = readfiletodict()
print(primsheap(g, '1'))
