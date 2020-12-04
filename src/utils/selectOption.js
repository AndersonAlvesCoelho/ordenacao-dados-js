function bubbleSort() {

  let vetor = JSON.parse(localStorage.getItem("vetor"));
  let len = vetor.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let tmp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = tmp;
      }
    }
  }
  return vetor;
}

function selectionSort() {

  let vetor = JSON.parse(localStorage.getItem("vetor"));
  let len = vetor.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (vetor[min] > vetor[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = vetor[i];
      vetor[i] = vetor[min];
      vetor[min] = tmp;
    }
  }
  return vetor;
}

function insertionSort() {

  let vetor = JSON.parse(localStorage.getItem("vetor"));
  let len = vetor.length;

  for (let i = 1; i < len; i++) {
    let key = vetor[i];
    let j = i - 1;

    while (j >= 0 && vetor[j] > key) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = key;
  }

  return vetor;
}


export { bubbleSort, selectionSort, insertionSort };
