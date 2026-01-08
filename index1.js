function simulateDefense(archers, mages, enemies, hasDragon) {
  const dragon = typeof hasDragon === 'string' ? hasDragon.toLowerCase() === 'да' || hasDragon.toLowerCase() === 'true' : hasDragon
  let turns = 0, magesReady = true
  while (turns < 10 && enemies > 0) {
    turns++
    let killed = archers
    if (magesReady) { killed += mages * 2; magesReady = false } else magesReady = true
    if (dragon) killed += 5
    enemies -= killed
    if (enemies <= 0) return `Враги уничтожены за ${turns} ход(а/ов)`
  }
  return 'Замок захвачен за 10 ходов'
}

const books = [
  { title: "Война и мир", author: "Лев Толстой", isRussianAuthor: true, isModernLiterature: false, genre: 1, year: '1863 - 1869', ratings: [{ userId: 1, rating: 4 },{ userId: 2, rating: 4 },{ userId: 3, rating: 4 },{ userId: 4, rating: 5 }] },
  { title: "Ночной дозор", author: "Сергей Лукьяненко", isRussianAuthor: true, isModernLiterature: true, genre: 3, year: '1998', ratings: [{ userId: 1, rating: 4 },{ userId: 2, rating: 5 },{ userId: 3, rating: 3 },{ userId: 4, rating: 5 }] },
  { title: "Гарри Поттер", author: "Дж. К. Роулинг", isRussianAuthor: false, isModernLiterature: true, genre: 3, year: '1997 - 2007', ratings: [{ userId: 1, rating: 4 },{ userId: 2, rating: 5 },{ userId: 3, rating: 4 },{ userId: 4, rating: 4 },{ userId: 5, rating: 5 },{ userId: 6, rating: 5 },{ userId: 7, rating: 5 }] },
  { title: "Шерлок Холмс", author: "Артур Конан Дойл", isRussianAuthor: false, isModernLiterature: false, genre: 2, year: '1887', ratings: [{ userId: 1, rating: 4 },{ userId: 2, rating: 5 },{ userId: 3, rating: 3 },{ userId: 4, rating: 5 }] },
  { title: "Девушка в поезде", author: "Пола Хокинс", isRussianAuthor: false, isModernLiterature: true, genre: 2, year: '2015', ratings: [{ userId: 1, rating: 4 },{ userId: 2, rating: 5 },{ userId: 3, rating: 3 },{ userId: 4, rating: 5 },{ userId: 5, rating: 2 }] }
]

function getBookInfo(book) {
  return `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year}`
}

function addRating(book, userId, rating) {
  book.ratings.push({ userId, rating })
}

function getAverageRating(book) {
  return book.ratings.reduce((s, r) => s + r.rating, 0) / book.ratings.length
}

function recommendBook(books) {
  let genre
  while (true) {
    genre = Number(prompt('Жанр: 1 - Роман, 2 - Детектив, 3 - Фэнтези'))
    if ([1,2,3].includes(genre)) break
    alert('Введите 1, 2 или 3')
  }
  const modern = prompt('Современная литература? (да/нет)').toLowerCase() === 'да'
  const russian = prompt('Русский автор? (да/нет)').toLowerCase() === 'да'
  const found = books.filter(b => b.genre === genre && b.isModernLiterature === modern && b.isRussianAuthor === russian)
  if (found.length === 0) alert('К сожалению, не смогли подобрать вам книгу')
  else alert(`Предлагаем вам почитать - "${found[0].title}"`)
}
