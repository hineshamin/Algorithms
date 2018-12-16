def twosum(arr, h, t):
    count = 0
    for i in range(t[0], t[1] + 1):
        for val in arr:
            if i-val in h and i-val != val:
                count += 1
                break
    return count


def readfiletoarrandhash():
    f = open("twosum.txt", "r")
    arr = []
    h = {}
    for line in f:
        x = line.split('\n')
        arr.append(int(x[0]))
        h[int(x[0])] = 0
    return arr, h


print(twosum(readfiletoarrandhash()[0],
             readfiletoarrandhash()[1], [-10000, 10000]))
