//What are the number of ways a given message can be decoded
//Sample input '123'
//Output 3
//1 2 3 (ABC)
//12 3 (LC)
//1 23 (AW)

function mapDecoding(message) {
  let DP = [];
  DP[message.length] = 1;
  DP[message.length + 1] = 0;
  for (let i = message.length - 1; i >= 0; i--) {
    if (message[i] === '0') DP[i] = 0;
    else if (+message.slice(i, i + 2) < 27) {
      DP[i] = DP[i + 1] + DP[i + 2];
    } else {
      DP[i] = DP[i + 1];
    }
    DP[i] = DP[i];
  }
  return DP[0];
}
