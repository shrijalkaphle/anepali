const unicodeToPreetiMap = {
    'क': 's',
    'ख': 'v',
    'ग': 'u',
    'घ': '3',
    'ङ': 'ª',
    'च': 'r',
    'छ': '5',
    'ज': 'h',
    'झ': '´',
    'ञ': 'ˆ',
    'ट': '6',
    'ठ': '7',
    'ड': '8',
    'ढ': '9',
    'ण': '0f',
    'त': 't',
    'थ': 'y',
    'द': 'b',
    'ध': 'w',
    'न': 'g',
    'प': 'k',
    'फ': 'km',
    'ब': 'a',
    'भ': 'e',
    'म': 'd',
    'य': 'o',
    'र': '/',
    'ल': 'n',
    'व': 'j',
    'श': 'z',
    'ष': 'if',
    'स': ';',
    'ह': 'x',
    'क्ष': '1',
    'त्र': 'q',
    'ज्ञ': 'ž',

    'अ': 'c',
    'आ': 'cf',
    'इ': 'O',
    'ई': 'O{',
    'उ': 'p',
    'ऊ': 'pm',
    'ए': 'P',
    'ऐ': 'P]',
    'ओ': 'C',
    'औ': 'C+',

    'ा': 'f',
    'ि': ']',
    'ी': '[',
    'ु': '\'',
    'ू': '"',
    'े': '\\',
    'ै': '|',
    'ो': ']\\',
    'ौ': ']\\+',

    'ं': '˜',
    'ँ': '!',
    'ः': '@',
    'ृ': '$',
    'े': '\\',
    'ै': '|',

    '्': 'l',

    // Numbers
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9'
};

export const unicodeToPreeti = (input) => {
    let output = '';
    for (const char of input) {
        output += unicodeToPreetiMap[char] || char;
    }
    return output;
}