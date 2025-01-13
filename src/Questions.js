const questions = [
    {
        id:1,
        type:1,
        question:'const x = 10;\nx=20;\nΕίναι η παραπάνω εντολή έγκυρη σε JavaScript;',
        correct:2
    },
    {
        id:2,
        type:1,
        question:'let x=5;\nlet y= "5"\nconsole.log(x==y);\nΤο αποτέλεσμα της εντολής console.log(x == y) θα είναι true;',
        correct:1
    },
    {
        id:3,
        type:1,
        question:'let arr = [1,2,3];\narr.push(4);\nconsole.log(arr.length === 4);\nΤο αποτέλεσμα της εντολής console.log(arr.length === 4) θα είναι true;',
        correct:1
    },
    {
        id:4,
        type:2,
        question:'Τι θα εμφανιστεί στην κονσόλα από την παρακάτω εντολή;\nlet a = 10;\nlet b = "10";\nconsole.log(a===b)\n',
        answears:['true','false','undefined','Θα προκληθεί σφάλμα'],
        correct:1
    },
    {
        id:5,
        type:2,
        question:'Τι θα εμφανιστεί στην κονσόλα από την παρακάτω εντολή;\nlet x = 5;\nlet y = x++;\nconsole.log(y)',
        answears:['5','6','undefined','Θα προκληθεί σφάλμα'],
        correct:0
    },
    {
        id:6,
        type:2,
        question:'Τι θα εμφανιστεί στην κονσόλα από την παρακάτω εντολή;\nconsole.log(typeof null)\n',
        answears:['null','object','udnefined','boolean'],
        correct:1
    },
    {
        id:7,
        type:3,
        question:'Ποια από τα παρακάτω θα επιστρέψουν true;\nlet a = 0;\nlet b = "0";\nlet c = []\n',
        answears:['a == b ','a === b','c == false','a == false'],
        correct:[1,4]
    },
    {
        id:8,
        type:3,
        question:'Ποια από τα παρακάτω θα επιστρέψουν true;\nlet x = "hello";\nlet y = x;\nlet z = x.split("")\n',
        answears:['x == y ','x === y','x == z','x === z.join("")'],
        correct:[1,2,4]
    },
    {
        id:9,
        type:3,
        question:'Ποια από τα παρακάτω θα επιστρέψουν true;\nlet a = null;\nlet b;\nlet c = []\n',
        answears:['a == undefined ','b === undefined','c.length == 0','a === b'],
        correct:[1,2,3]
    },
    {
        id:10,
        type:4,
        question: 'Συμπλήρωσε το κενό για να ελέγξεις αν μια μεταβλητή x είναι τύπου αριθμός (number):\nif(typeof x === "______") {\n\tconsole.log("x is a number");\n}\n',
        correct:'number'
    },
    {
        id:11,
        type:4,
        question: 'Συμπλήρωσε το κενό για να προσθέσεις ένα στοιχείο στο τέλος του πίνακα arr:\narr.______(5);',
        correct:'push'
    },
    {
        id:12,
        type:4,
        question: 'Συμπλήρωσε το κενό για να ελέγξεις αν μια συνθήκη είναι αληθής και να επιστρέψεις ένα συγκεκριμένο μήνυμα:\nlet message = (a > b) ? "a is greater" : "________"',
        correct:'b is greater'
    },
    {
        id:13,
        type:5,
        question:'Διάταξε τις ενέργειες που πραγματοποιούνται κατά την προσθήκη ενός στοιχείου σε έναν πίνακα και την εμφάνιση του νέου μήκους του πίνακα:',
        answears:['Κλήση της μεθόδου push() για την προσθήκη του στοιχείου','Αποθήκευση του πίνακα σε μια μεταβλητή','Εμφάνιση του μήκους του πίνακα με console.log()'],
        correct:[2,1,3]
    },
    {
        id:14,
        type:5,
        question:'Διάταξε τα βήματα για τη δημιουργία και την εκτέλεση μιας συνάρτησης σε JavaScript:',
        answears:['Εκτέλεση της συνάρτησης','Δήλωση της συνάρτησης','Κλήση της συνάρτησης'],
        correct:[2,3,1]
    },
    {
        id:15,
        type:5,
        question:'Διάταξε τις ενέργειες που πραγματοποιούνται κατά τη δήλωση μιας μεταβλητής και την ανάθεση τιμής σε αυτή:',
        answears:['Ανάθεση τιμής στη μεταβλητή','Εκτύπωση της τιμής με console.log()','Δήλωση της μεταβλητής'],
        correct:[2,1,3]
    },
    {
        id:16,
        type:6,
        question:'Αντιστοίχισε τις μεταβλητές με τον τύπο τους:',
        answears1:['boolean','string','number'],
        answears2:['let x = 10;','let y = "JavaScript";','let z = true;'],
        correct:[3,2,1]
    },
    {
        id:17,
        type:6,
        question: "Αντιστοίχισε τις μεταβλητές με τον τύπο τους:",
        answears1: ["array", "object", "function"],
        answears2: ["let arr = [1, 2, 3];", "let obj = { name: 'John', age: 30 };", "let func = () => {};"],
        correct: [1, 2, 3]
    },
    {
        id:18,
        type:6,
        question: "Αντιστοίχισε τις μεταβλητές με τον τύπο τους:",
        answears1: ["undefined", "number", "string"],
        answears2: ["let a;", "let b = 42;", "let c = 'Hello World';"],
        correct: [1, 2, 3]
    }
]

export default questions