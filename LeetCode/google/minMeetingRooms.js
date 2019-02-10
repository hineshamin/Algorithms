//https://leetcode.com/problems/meeting-rooms-ii/solution/
const { MinPriorityQueue } = require('../../Algorithms For Class/trees/heap');

class Node {
  constructor(data, meeting) {
    this.data = data;
    this.meeting = meeting;
  }
}

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function minMeetingRooms(intervals) {
  let p = new MinPriorityQueue();
  intervals.sort((a, b) => a.start - b.start);
  p.insert(createNode(intervals[0]));
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start >= p.peek().meeting.end) p.extract();
    p.insert(createNode(intervals[i]));
  }
  return p.size;
}

function createNode(interval) {
  return new Node(interval.end, interval);
}
