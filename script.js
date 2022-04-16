const referencjeZbiornik = document.querySelector('.pojemnik-z-referencjami')
const referencja = document.querySelector('.referencja')
const obrazUzytkownika = document.querySelector('.obraz-uzytkownika')
const nazwaUzytkownika = document.querySelector('.nazwa-uzytkownika')
const rola = document.querySelector('.rola')

const referencje = [
  {
    nazwa: 'Julia Kowalska',
    stanowisko: 'Marketing',
    zdjecie: 'https://randomuser.me/api/portraits/women/1.jpg',
    tekst:
      "Pracowałam z dosłownie setkami programistów HTML/CSS i muszę przyznać, że pierwsze miejsce zajmuje ten facet. Ten facet jest niesamowitym programistą. Kładzie nacisk na dobry, czysty kod i zwraca uwagę na szczegóły. Uwielbiam programistów, którzy szanują każdy aspekt dokładnie przemyślanego projektu i starają się umieścić go w kodzie. Wykracza poza granice i przekształca ART w PIKSELE - za każdym razem bez żadnych usterek.",
  },
  {
    nazwa: 'Antoni Nowak',
    stanowisko: 'Inżynier oprogramowania',
    zdjecie: 'https://randomuser.me/api/portraits/men/1.jpg',
    tekst:
      'Ten facet jest niesamowitym frontend developerem, który wykonał zadanie dokładnie tak, jak tego potrzebowaliśmy, zrób sobie przysługę i zatrudnij go, nie będziesz zawiedziony wykonaną pracą. Zrobi wszystko, aby upewnić się, że jesteś zadowolony z projektu. Z pewnością będę z nim współpracował ponownie!',
  },
  {
    nazwa: 'Zuzanna Wiśniewska',
    stanowisko: 'Wprowadzanie Danych',
    zdjecie: 'https://randomuser.me/api/portraits/women/2.jpg',
    tekst:
      "Ten człowiek jest bardzo pracowity. Komunikacja z nim była również bardzo dobra i przez cały czas reagował na nasze potrzeby, co nie jest łatwe do znalezienia u wielu freelancerów. Na pewno będziemy z nim współpracować ponownie.",
  },
  {
    nazwa: 'Jan Kowalczyk',
    stanowisko: 'Recepcjonista',
    zdjecie: 'https://randomuser.me/api/portraits/men/2.jpg',
    tekst:
      "Ten człowiek robi wszystko, co w jego mocy, aby praca była wykonana i to wykonana dobrze. Zatrudniłem go już po raz drugi i na pewno zatrudnię go ponownie w przyszłości.",
  },
  {
    nazwa: 'Jakub Kamiński',
    stanowisko: 'Projektant graficzny',
    zdjecie: 'https://randomuser.me/api/portraits/men/3.jpg',
    tekst:
      "Miałem obawy, że z powodu napiętego terminu ten projekt nie może zostać zrealizowany. Ale ten facet udowodnił mi, że się myliłem, nie tylko dostarczył świetną pracę, ale zdążył ją dostarczyć 1 dzień przed terminem. A kiedy poprosiłem o kilka poprawek, zrobił je w MINUTY. Nie mogę się doczekać ponownej współpracy z nim i całkowicie go polecam. Jeszcze raz dziękuję!",
  },
  {
    nazwa: 'Aleksander Lewandowski',
    stanowisko: 'Księgowy',
    zdjecie:'https://randomuser.me/api/portraits/men/4.jpg',
    tekst:
      'Ten facet to najwyższej klasy projektant i front-end developer. Dobrze się komunikuje, pracuje szybko i tworzy wysokiej jakości prace. Mieliśmy szczęście z nim współpracować!',
  },
  {
    nazwa: 'Franciszek Woźniak',
    stanowisko: 'Dyrektor',
    zdjecie: 'https://randomuser.me/api/portraits/men/5.jpg',
    tekst:
      'Ten facet jest młodym i utalentowanym profesjonalistą IT, proaktywnym i odpowiedzialnym, z silną etyką pracy. Jest bardzo dobry w konwersji PSD2HTML i technologii HTML/CSS. Szybko się uczy, chętnie poznaje nowe technologie. Jest skoncentrowany i ma dobrą dynamikę, aby dotrzymywać terminów i osiągać doskonałe wyniki.',
  },
]

let idx = 1

function uaktualnij() {
  const { nazwa, stanowisko, zdjecie, tekst } = referencje[idx]

  referencja.innerHTML = tekst
  obrazUzytkownika.src = zdjecie
  nazwaUzytkownika.innerHTML = nazwa
  rola.innerHTML = stanowisko

  idx++

  if (idx > referencje.length - 1) {
    idx = 0
  }
}

setInterval(uaktualnij, 10000)