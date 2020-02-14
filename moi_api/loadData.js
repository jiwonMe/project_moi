// const sqlite3 = require('sqlite3')
import sqlite3 from 'sqlite3'

var questionList = []

let db = new sqlite3.Database('./db/moi.db', sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error(err.message)
        }
        console.log('Connected to the moi database')
    })

db.serialize(() => {
    db.each(`SELECT examName, qIndex, score, content FROM questionBook ORDER BY random() LIMIT 10`, (err, row) => {
        if (err) {
            console.error(err.message)
        }
        // console.log(row.qIndex + "\t" + row.score + "\t" + row.content)

        var _examName = row.examName
        var _qIndex = row.qIndex
        var _score = row.score
        var _content = row.content

        questionList.push({
            examName: _examName,
            index: _qIndex,
            score: _score,
            statement: _content
        })
    })
})

db.close((err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('Close the database connection')
})

exports.questionList = function() {
    return questionList
}