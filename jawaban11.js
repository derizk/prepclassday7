const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']

for (let i = 0 ; i <= fruits.length ; i++){
  const data = fruits[i]
  if (data === "Jambu"){
    continue
  }
  console.log(data)
}