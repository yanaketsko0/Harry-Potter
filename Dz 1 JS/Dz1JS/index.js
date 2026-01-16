function castleDefense(archers, mages, enemies, hasDragon) {
    let turns = 0
    let mageCooldown = Array(mages).fill(false)
    while (enemies > 0 && turns < 10) {
        turns++
        enemies -= archers
        mageCooldown = mageCooldown.map(cooldown => {
            if (!cooldown) {
                enemies -= 2
                return true
            } else {
                return false
            }
        })
        if (hasDragon) {
            enemies -= 5
        }
    }
    if (enemies <= 0) {
        return `Замок защищён за ${turns} ход(ов)!`
    } else {
        return "К сожалению, замок пал через 10 ходов..."
    }
}

const books = [
    {
        title: "Война и мир",
        author: "Лев Толстой",
        isRussianAuthor: true,
        isModernLiterature: false,
        genre: 1,
        year: '1863 - 1869',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 4 },
            { userId: 3, rating: 4 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Ночной дозор",
        author: "Сергей Лукьяненко",
        isRussianAuthor: true,
        isModernLiterature: true,
        genre: 3,
        year: '1998',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Гарри Поттер",
        author: "Дж. К. Роулинг",
        isRussianAuthor: false,
        isModernLiterature: true,
        genre: 3,
        year: '1997 - 2007',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 4 },
            { userId: 4, rating: 4 },
            { userId: 5, rating: 5 },
            { userId: 6, rating: 5 },
            { userId: 7, rating: 5 }
        ],
    },
    {
        title: "Шерлок Холмс",
        author: "Артур Конан Дойл",
        isRussianAuthor: false,
        isModernLiterature: false,
        genre: 2,
        year: '1887',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Девушка в поезде",
        author: "Пола Хокинс",
        isRussianAuthor: false,
        isModernLiterature: true,
        genre: 2,
        year: '2015',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 },
            { userId: 5, rating: 2 }
        ],
    },
]

function getBookInfo(book) {
    return `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year}`
}

function addRating(book, userId, rating) {
    book.ratings.push({ userId, rating })
}

function getAverageRating(book) {
    const sum = book.ratings.reduce((acc, r) => acc + r.rating, 0)
    return (sum / book.ratings.length).toFixed(2)
}

function recommendBook(books) {
    let genre
    while (true) {
        genre = parseInt(prompt("Какой жанр предпочитаете? 1 - Роман, 2 - Детектив, 3 - Фэнтези"))
        if ([1, 2, 3].includes(genre)) break
        alert("Введите число 1, 2 или 3!")
    }
    const isModernLiterature = confirm("Предпочитаете современную литературу?")
    const isRussianAuthor = confirm("Хотели бы книгу русского автора?")
    const found = books.find(book =>
        book.genre === genre &&
        book.isModernLiterature === isModernLiterature &&
        book.isRussianAuthor === isRussianAuthor
    )
    if (found) {
        alert(`Предлагаем вам почитать - "${found.title}"`)
    } else {
        alert("К сожалению, не смогли подобрать вам книгу")
    }
}

console.log(castleDefense(3, 2, 20, true))
console.log(getBookInfo(books[0]))
addRating(books[0], 6, 5)
console.log(getAverageRating(books[0]))
