
const en = {
  fadderukaText1: "This is a text",
  test1: "EN Test",
  home: {
    fadderuka: {
      text1: "value"
    }
  }
}

const no = {
  fadderukaText1: "Dette er en tekst",
  test1: "NO Test",
  home: {
    fadderuka: {
      text1: "value"
    }
  }
}

const Translate = (isEn) => (isEn ? en:no)


export default Translate;