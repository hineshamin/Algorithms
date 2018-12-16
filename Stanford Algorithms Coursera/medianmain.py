# Median maintenence - algorithm for keeping track of the median as each number from a list is read
import heapq


# Main function that uses 2 heaps to keep track of the median
def medianmain(arr):
    i = 0
    hlow = [-arr[0]]
    hhigh = []
    median = arr[0]
    for i in range(1, len(arr)):
        if(int(arr[i]) < int(-hlow[0])):
            heapq.heappush(hlow, -arr[i])
        else:
            heapq.heappush(hhigh, arr[i])
        while len(hlow) > len(hhigh):
            heapq.heappush(hhigh, -heapq.heappop(hlow))
        while len(hhigh) > len(hlow) + 1:
            heapq.heappush(hlow, -heapq.heappop(hhigh))
        if(i % 2 == 1):
            median += -hlow[0]
        else:
            median += hhigh[0]
    return median % 10000


# Read the file and create a list of numbers
def readfiletodict():
    f = open("mediantest.txt", "r")
    arr = []
    for line in f:
        arr.append(int(line.split('\n')[0]))
    return arr


arr = readfiletodict()
print(medianmain(arr))
