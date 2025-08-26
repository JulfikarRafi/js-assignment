function reverse(str) {
  let reversed = "";
  for (let s = str.length - 1; s >= 0; s--) {
    reversed += str[s];
  }
  return reversed;
}

console.log(reverse("hello"));