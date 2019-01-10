//https://leetcode.com/problems/merge-intervals/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a.start - b.start);
  let ret = [];
  let i = 0;
  let j = 0;
  currIntervalMin = intervals[0].start;
  currIntervalMax = intervals[0].end;
  while (i < intervals.length && j < intervals.length) {
    if (intervals[j + 1] && intervals[j + 1].start > currIntervalMax) {
      ret.push(new Interval(currIntervalMin, currIntervalMax));
      j++;
      i = j;
      currIntervalMin = intervals[i].start;
      currIntervalMax = intervals[j].end;
    } else {
      j++;
      if (intervals[j]) {
        currIntervalMax = Math.max(currIntervalMax, intervals[j].end);
      }
    }
  }
  ret.push(new Interval(currIntervalMin, currIntervalMax));
  return ret;
}
