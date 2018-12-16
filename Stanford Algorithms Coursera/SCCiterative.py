# Kosarajus two-pass algorithm for finding strongly connected componenets
import sys
sys.setrecursionlimit(50000)

t = 0
s = 0

# Main function


def scc(g):
    fintime = dfsloopone(g)
    fing = fingraph(g, fintime)
    return dfslooptwo(fing)


# Runs dfs on the reverse of g which finds the correct ordering of nodes
def dfsloopone(g, explored={}):
    revg = revgraph(g)
    for i in range(int(max(revg.keys())), 0, -1):
        if(str(i) not in explored):
            global t
            t += 1
            explored = dfs(revg, str(i), explored)
    return explored


# Runs dfs on g with the order done in the first loop
def dfslooptwo(g, explored={}):
    for i in range(len(g), 0, -1):
        if(str(i) not in explored):
            initlen = len(explored)
            explored = dfs(g, str(i), explored)
            afterlen = len(explored)
            print(afterlen - initlen)
    return explored


# Depth first search graph algoritm iterative
def dfs(g, s, explored={}):
    stack = [s]
    arr = []
    global t
    while stack:
        vertex = stack.pop()
        if vertex not in explored:
            arr.append(vertex)
            explored[vertex] = ''
            stack.extend(g[vertex] - set(explored.keys()))
    for i in range(len(arr) - 1, -1, -1):
        t += 1
        explored[arr[i]] = str(t)
    return explored


# Final graph
def fingraph(g, f):
    fingraph = {}
    for key in g:
        for val in g[key]:
            if(f[key] in fingraph):
                fingraph[f[key]].add(f[val])
            else:
                fingraph[f[key]] = set([f[val]])
    for i in range(1, int(max(f.keys()))+1):
        if(str(i) not in fingraph):
            fingraph[str(i)] = set([])
    return fingraph


# Reverses a directed graph
def revgraph(g):
    revg = {}
    for key in g:
        for val in g[key]:
            if(val in revg):
                revg[val].add(key)
            else:
                revg[val] = set([])
                revg[val].add(key)
    min = 0
    for key in revg:
        if int(str(key)) > min:
            min = int(str(key))
    for i in range(1, min+1):
        if(str(i) not in revg):
            revg[str(i)] = set([])
    return revg


# Reads in a file and creates a graph out of it
def readfiletodict():
    f = open("test1.txt", "r")
    graph = {}
    for line in f:
        x = line.split(' ')
        x[1] = x[1].split('\n')
        x = [x[0], x[1][0]]
        if(x[0] in graph):
            graph[x[0]].add(x[1])
        else:
            graph[x[0]] = set([x[1]])
    return graph


g = readfiletodict()
scc(g)
