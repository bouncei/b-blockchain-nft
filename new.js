// 0, 1, 2, 3, 5 ,8, 12, 21, ...

let sequence = [0, 1]

function listSequence(num) {
  for (let i = 1; i < num; i++) {
    sequence.push(sequence[i] + sequence[i - 1])
  }

  console.log(sequence)
}

listSequence(15)
