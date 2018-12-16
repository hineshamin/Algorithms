# Huffman coding that find the minimum average binary representation of a set of characters based on usage
from binarytree import Node
from heapq import heappop, heappush, heapify


# Main function
def huffman(h):
    while(len(h) > 1):
        v1 = heappop(h)
        v2 = heappop(h)
        mergetemp = mergenodes(v1[1], v2[1])
        if(len(h) == 0):
            return mergetemp.max_leaf_depth, mergetemp.min_leaf_depth
        heappush(h, (v1[0]+v2[0], mergetemp))


# Merges 2 nodes of a tree
def mergenodes(n1, n2):
    root = Node(1)
    root.left = n1
    root.right = n2
    return root


# Reads a file into a heap
def readfiletoheap():
    f = open('huffmantest.txt', 'r')
    h = []
    for line in f:
        x = line.split(' ')
        val = int(x[0].split('\n')[0])
        heappush(h, (val, Node(val)))
    return h


h = readfiletoheap()
print(huffman(h))
