var utop = {
    "अ": "c",
    "आ": "cf",
    "ा": "f",
    "इ": "O",
    "ई": "O{",
    "र्": "{",
    "उ": "p",
    "ए": "P",
    "े": "]",
    "ै": "}",
    "ो": "f]",
    "ौ": "f}",
    "ओ": "cf]",
    "औ": "cf}",
    "ं": "+",
    "ँ": "F",
    "ि": "l",
    "ी": "L",
    "ु": "'",
    "ू": '"',
    "क": "s",
    "ख": "v",
    "ग": "u",
    "घ": "3",
    "ङ": "ª",
    "च": "r",
    "छ": "5",
    "ज": "h",
    "झ": "´",
    "ञ": "`",
    "ट": "6",
    "ठ": "7",
    "ड": "8",
    "ढ": "9",
    "ण": "0f",
    "त": "t",
    "थ": "y",
    "द": "b",
    "ध": "w",
    "न": "g",
    "प": "k",
    "फ": "km",
    "ब": "a",
    "भ": "e",
    "म": "d",
    "य": "o",
    "र": "/",
    "रू": "?",
    "ृ": "[",
    "ल": "n",
    "व": "j",
    "स": ";",
    "श": "z",
    "ष": "if",
    "ज्ञ": "1",
    "ह": "x",
    "१": "!",
    "२": "@",
    "३": "#",
    "४": "$",
    "५": "%",
    "६": "^",
    "७": "&",
    "८": "*",
    "९": "(",
    "०": ")",
    "।": ".",
    "्": "\\",
    "ऊ": "pm",
    "-": " ",
    "(": "-",
    ")": "_"
};

function unicodeToPreeti(text) {
    var e = convertUnicodeToPreeti(text);
    console.log(e)
}

function normalizeUnicode(e) {
    let normalized = "";
    for (var n = 0; n < e.length; n++) {
        var currentChar = e[n];
        try {
            try {
                if ("र" != currentChar && "्" == e[n + 1] && " " != e[n + 2] && "।" != e[n + 2] && "," != e[n + 2] && "र" != e[n + 2]) {
                    if ("wertyuxasdghjkzvn".includes(utop[n])) {
                        normalized += char(parseInt(utop[n]) - 32), n++;
                        continue
                    }
                    if ("स" == currentChar) {
                        normalized += ":", n++;
                        continue
                    }
                    if ("ष" == currentChar) {
                        normalized += "i", n++;
                        continue
                    }
                }
                if ("र" != e[n - 1] && "्" == currentChar && "र" == e[n + 1]) {
                    if ("ट" != e[n - 1] && "ठ" != e[n - 1] && "ड" != e[n - 1]) {
                        normalized += "|", n++;
                        continue
                    }
                    normalized += "«", n++;
                    continue
                }
            } catch (e) {}
            normalized += currentChar
        } catch (e) {
            normalized += currentChar
        }
    }
    return normalized.replace("त|", "q")
}

function convertUnicodeToPreeti(e) {
    var normalizedUnicodeText = normalizeUnicode(e), converted = "";
    for (var n = 0; n < normalizedUnicodeText.length; n++) {
        var i = normalizedUnicodeText[n];
        if ("\ufeff" != i) try {
            try {
                if ("ि" == normalizedUnicodeText[n + 1]) {
                    "q" == i ? converted += "l" + i : utop[i] ? converted += "l" + utop[i] : converted += "l" + i, n++;
                    continue
                }
                if ("ि" == normalizedUnicodeText[n + 2] && "WERTYUXASDGHJK:ZVN".includes(i)) {
                    if ("q" != normalizedUnicodeText[n + 1]) {
                        converted += "l" + i + utop[normalizedUnicodeText[n + 1]], n += 2;
                        continue
                    }
                    if ("q" == normalizedUnicodeText[n + 1]) {
                        converted += "l" + i + normalizedUnicodeText[n + 1], n += 2;
                        continue
                    }
                }
                if ("्" == normalizedUnicodeText[n + 1] && "र" == i) {
                    if ("ा" == normalizedUnicodeText[n + 3] || "ो" == normalizedUnicodeText[n + 3] || "ौ" == normalizedUnicodeText[n + 3] || "े" == normalizedUnicodeText[n + 3] || "ै" == normalizedUnicodeText[n + 3] || "ी" == normalizedUnicodeText[n + 3]) {
                        converted += utop[normalizedUnicodeText[n + 2]] + utop[normalizedUnicodeText[n + 3]] + "{", n += 3;
                        continue
                    }
                    if ("ि" == normalizedUnicodeText[n + 3]) {
                        converted += utop[normalizedUnicodeText[n + 3]] + utop[normalizedUnicodeText[n + 2]] + "{", n += 3;
                        continue
                    }
                    converted += utop[normalizedUnicodeText[n + 2]] + "{", n += 2;
                    continue
                }
                if ("्" == normalizedUnicodeText[n + 1] && "र" !== i && "wertyuxasdfhjkzvng".includes(utop[normalizedUnicodeText[n]])) {
                    converted += utop[i].toUpperCase(), n++;
                    continue
                }
                if ("ि" == normalizedUnicodeText[n + 3] && ("|" == normalizedUnicodeText[n + 2] || "«" == normalizedUnicodeText[n + 2]) && "WERTYUXASDGHJK:ZVNIi".includes(i)) {
                    converted += "l" + i + utop[normalizedUnicodeText[n + 1]] + normalizedUnicodeText[n + 2], n += 3;
                    continue
                }
            } catch (e) {}
            converted += utop[i] || i
        } catch (e) {
            converted += i
        }
    }
    let finalString;
    finalString = converted, finalString = finalString.replace("Si", "I"), finalString = finalString.replace("H`", "1"), finalString = finalString.replace("b\\\\w", "4"), finalString = finalString.replace("z|", ">"), finalString = finalString.replace("/'", "?"), finalString = finalString.replace("Tt", "Q"), finalString = finalString.replace("b\\\\lj", "lå"), finalString = finalString.replace("b\\\\\\j", "å"), finalString = finalString.replace("0f\\", "0"), finalString = finalString.replace("`\\", "~"), finalString = finalString.replace(new RegExp("(.)[l][|]", "g"), "l$1|"), finalString = finalString.replace(new RegExp("[k][l][m][|]", "g"), "lk|m");
    let t = finalString.indexOf("l"),
        r = finalString.substring(t - 1, t);

    return finalString = finalString.replace(new RegExp("(Wl)|(El)|(Rl)|(Tl)|(Yl)|(Ul)|(Xl)|(Al)|(Sl)|(Dl)|(Fl)|(Hl)|(Jl)|(Kl)|(Zl)|(Vl)|(Nl)|(Gl)", "g"), "l" + r), finalString
}

export default convertUnicodeToPreeti