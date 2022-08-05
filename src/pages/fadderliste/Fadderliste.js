
import { useContext, useState } from 'react';
import { MajorContext } from '../../App';

const TableItem = ({name, major, sjef}) => {
  
  return (
    <tr>
      <td>
        <span class="ms-2 badge rounded-pill bg-light text-dark f-text">
          <i class={"fa-solid me-2 "+(sjef?"fa-crown f-text-"+major.color:"fa-circle-user")}></i>
          {name}
          {sjef && <span className="faddersjef"> Faddersjef</span>}
        </span>
      </td>
      <td>
        <span class={"badge badge-pill f-text rounded-pill f-"+major.color}>
          {major.name}
        </span>
      </td>
    </tr>
  );
}

const Table = ({søk}) => {
  const major = useContext(MajorContext);
  const content = [
{name: "Åsmund Snorresønn Haugaard",m: major.eiendom, s: true},
{name: "Admir Osmani",m: major.eiendom, s: false},
{name: "Adrian Nathaniel Andersen",m: major.eiendom, s: false},
{name: "Amalie Noraker Pettersen",m: major.eiendom, s: false},
{name: "Anders Holmberg Johnsen",m: major.eiendom, s: false},
{name: "Arne Martin Tysvær",m: major.eiendom, s: false},
{name: "Celine Michelsen Leines",m: major.eiendom, s: false},
{name: "Christer Brekka",m: major.eiendom, s: false},
{name: "Christoffer Vindum",m: major.eiendom, s: false},
{name: "Emilie Githmark Solhaug",m: major.eiendom, s: false},
{name: "Emilie Nielsen",m: major.eiendom, s: false},
{name: "Emilie Aae Gjermstad",m: major.eiendom, s: false},
{name: "Frida Sommer Gunnulfsen",m: major.eiendom, s: false},
{name: "Gard Mathias Dolve Mysen",m: major.eiendom, s: false},
{name: "Gowshigan Kohilaraj",m: major.eiendom, s: false},
{name: "Hanne Lene Norheim",m: major.eiendom, s: false},
{name: "Ida Camilla Aase",m: major.eiendom, s: false},
{name: "Joar Støkket Eik",m: major.eiendom, s: false},
{name: "Jon Andre Pindsle",m: major.eiendom, s: false},
{name: "Jonas Kolberg",m: major.eiendom, s: false},
{name: "Julie Danielsen",m: major.eiendom, s: false},
{name: "Julius Bach Akerholt",m: major.eiendom, s: false},
{name: "Karoline Moen Berg",m: major.eiendom, s: false},
{name: "Kristine Greaker",m: major.eiendom, s: false},
{name: "Lillie Mathilde Koland Dalane",m: major.eiendom, s: false},
{name: "Lotte Strand Jonsmyr",m: major.eiendom, s: false},
{name: "Magnus Disch Thorvaldsen",m: major.eiendom, s: false},
{name: "Malin Bøhn",m: major.eiendom, s: false},
{name: "Marte Blömacher",m: major.eiendom, s: false},
{name: "Marthe Kals Stenersen",m: major.eiendom, s: false},
{name: "Marthine Valmestadrød",m: major.eiendom, s: false},
{name: "Mia Ravnås",m: major.eiendom, s: false},
{name: "Mikael Dvergastein Hansen",m: major.eiendom, s: false},
{name: "Oda Fløtaker",m: major.eiendom, s: false},
{name: "Sander Hovde",m: major.eiendom, s: false},
{name: "Selina Kolakovic",m: major.eiendom, s: false},
{name: "Sunniva Amalie Odberg-Kjær",m: major.eiendom, s: false},
{name: "Thea Ahlbom Johansen",m: major.eiendom, s: false},
{name: "Thomas Rønning Valderhaug",m: major.eiendom, s: false},
{name: "Tobias Ingvardsen Sture",m: major.eiendom, s: false},
{name: "Victor Falkenberg Martins",m: major.eiendom, s: false},
{name: "Victoria Treland",m: major.eiendom, s: false},
{name: "Viktoria Tønnessen",m: major.eiendom, s: false},
{name: "Frøy Marius Trenum Kruse",m: major.idrett, s: true},
{name: "Adrian Faaberg Sundbø",m: major.idrett, s: false},
{name: "Adrian Jørgensen Vold",m: major.idrett, s: false},
{name: "Aleksander Rønbeck Lunga",m: major.idrett, s: false},
{name: "Andreas Helgesen Barstad",m: major.idrett, s: false},
{name: "Andreas Sebastian Fougerand",m: major.idrett, s: false},
{name: "Casper Moen Gundersen",m: major.idrett, s: false},
{name: "Elise Gjerjordet",m: major.idrett, s: false},
{name: "Fride Olsen Mork",m: major.idrett, s: false},
{name: "Håvard Ananiassen",m: major.idrett, s: false},
{name: "Jenny Kristine Brække Brandvold",m: major.idrett, s: false},
{name: "Joakim Nergård",m: major.idrett, s: false},
{name: "Karen Emilie Bjordal",m: major.idrett, s: false},
{name: "Lone Pollestad",m: major.idrett, s: false},
{name: "Marco Lindalen Da Silva",m: major.idrett, s: false},
{name: "Oda Kvammen",m: major.idrett, s: false},
{name: "Oskar Aspelund",m: major.idrett, s: false},
{name: "Sander Brendalsmo Salte",m: major.idrett, s: false},
{name: "Stian Gryting Thorvaldsen",m: major.idrett, s: false},
{name: "Tommy Christoffer Romarheim",m: major.idrett, s: false},
{name: "Kjetil Alsen",m: major.innovasjon, s: true},
{name: "Erlen Iversen",m: major.innovasjon, s: false},
{name: "Frida Wølner Voss",m: major.innovasjon, s: false},
{name: "Iselin Kjelbergnes Staakkan",m: major.innovasjon, s: false},
{name: "Jonas Berget Eide",m: major.innovasjon, s: false},
{name: "Marcus Wold Lundgård",m: major.innovasjon, s: false},
{name: "Markus Kvifte",m: major.innovasjon, s: false},
{name: "Ole Kristian Ågotnes",m: major.innovasjon, s: false},
{name: "Rosanne Evi Van Der Vloed",m: major.innovasjon, s: false},
{name: "Tuva Høibakke",m: major.innovasjon, s: false},
{name: "Sara Moe Snapa",m: major.marked, s: true},
{name: "Albertine Linesdatter Ellingsen",m: major.marked, s: false},
{name: "Charlotte Hamlot",m: major.marked, s: false},
{name: "Eivind Wold",m: major.marked, s: false},
{name: "Fredrik Axelsen",m: major.marked, s: false},
{name: "Fredrik Berg Strømstad",m: major.marked, s: false},
{name: "Heidi Remmereit",m: major.marked, s: false},
{name: "Helle Grüner",m: major.marked, s: false},
{name: "Henriette Landro",m: major.marked, s: false},
{name: "Kai Anders Bugtene",m: major.marked, s: false},
{name: "Linujann Balasegar",m: major.marked, s: false},
{name: "Lisa Evju",m: major.marked, s: false},
{name: "Magnus Tørre",m: major.marked, s: false},
{name: "Magnus Østengen",m: major.marked, s: false},
{name: "Olav Winther",m: major.marked, s: false},
{name: "Sara Emilie Kant",m: major.marked, s: false},
{name: "Tone Marie Ytterbøe Nordh",m: major.marked, s: false},
{name: "Tristan Hasselquist Gunnarschjå",m: major.marked, s: false},
{name: "Trym Breivikås",m: major.marked, s: false},
{name: "Adrian Dahl",m: major.it, s: true},
{name: "Alexander Roan Ovesen",m: major.it, s: false},
{name: "Andrea Marie Sæter",m: major.it, s: false},
{name: "Andreas Myrmo Kjørås",m: major.it, s: false},
{name: "Andris Gustavsen Høiseth",m: major.it, s: false},
{name: "Daniel Moosaui Feili",m: major.it, s: false},
{name: "Daniel Vikan",m: major.it, s: false},
{name: "Dion Prieler",m: major.it, s: false},
{name: "Elias Kjøll Kristensen",m: major.it, s: false},
{name: "Emil Weiberg-Aurdal Aandahl",m: major.it, s: false},
{name: "Erik Rosland",m: major.it, s: false},
{name: "Haoyang Lu",m: major.it, s: false},
{name: "Herman Firing Simonsen",m: major.it, s: false},
{name: "Håvard Garsrud",m: major.it, s: false},
{name: "John Ivar Lilleøren Hagene",m: major.it, s: false},
{name: "Jøran Clausen Jøsang",m: major.it, s: false},
{name: "Krister Iversen",m: major.it, s: false},
{name: "Mads Rønningen",m: major.it, s: false},
{name: "Magnus Løiten Fjeldberg",m: major.it, s: false},
{name: "Martin Hodne",m: major.it, s: false},
{name: "Morten Skaren Berge",m: major.it, s: false},
{name: "Olav Pålerud Lille-Østerholt",m: major.it, s: false},
{name: "Oscar Skauge Eriksen",m: major.it, s: false},
{name: "Poul André Grevsen Røinaas",m: major.it, s: false},
{name: "Sanel Pitnjakovic",m: major.it, s: false},
{name: "Sondre Skaug Alvestad",m: major.it, s: false},
{name: "Susannah Gilbu",m: major.it, s: false},
{name: "Thomas Kirkeng",m: major.it, s: false},
{name: "Turid Lovise Eliassen",m: major.it, s: false},
{name: "Vegard Hjerpaasen",m: major.it, s: false},
{name: "Yonatan Adam Mulugeta",m: major.it, s: false},
{name: "Mikkel Solberg",m: major.kultur, s: true},
{name: "Andrea Bratli Indregård",m: major.kultur, s: false},
{name: "Elisabeth Regine Myrland",m: major.kultur, s: false},
{name: "Emilie Sætre",m: major.kultur, s: false},
{name: "Emma Sofie Kvam",m: major.kultur, s: false},
{name: "Helene Hogstad",m: major.kultur, s: false},
{name: "Hyndla Aira",m: major.kultur, s: false},
{name: "Iselina Johansen",m: major.kultur, s: false},
{name: "Joakim Randby Garthus",m: major.kultur, s: false},
{name: "Marius Nordli",m: major.kultur, s: false},
{name: "Martin Bosnes",m: major.kultur, s: false},
{name: "Mathilde Brenden Skjellerud",m: major.kultur, s: false},
{name: "Sara Halima Habib Wang",m: major.kultur, s: false},
{name: "Tatjana Maria Matic Siemer",m: major.kultur, s: false},
{name: "Tuva Fredrikke Digre",m: major.kultur, s: false},
{name: "Yngve Solsvik Asheim",m: major.kultur, s: false},
{name: "Martin Midbøe",m: major.natur, s: true},
{name: "Adeline Meel Lunde",m: major.natur, s: false},
{name: "Alfred Hannibal Høgsbro-Nielsen",m: major.natur, s: false},
{name: "Felix André Hermansen Bolle",m: major.natur, s: false},
{name: "Floris Meijer",m: major.natur, s: false},
{name: "Gry Anniken Kvaale Ramdal",m: major.natur, s: false},
{name: "Hedda Kavring Gjone",m: major.natur, s: false},
{name: "Ingrid Maria Bik",m: major.natur, s: false},
{name: "Ingrid Olstad",m: major.natur, s: false},
{name: "Jenny Kristina Skorpen Kvamme",m: major.natur, s: false},
{name: "Jimmy Xie",m: major.natur, s: false},
{name: "Jo-Tellef Myhre",m: major.natur, s: false},
{name: "Kari Tone Foldøy",m: major.natur, s: false},
{name: "Kristin Heggenes Haave",m: major.natur, s: false},
{name: "Mariell Bergestig Olsen",m: major.natur, s: false},
{name: "Marta Solheim",m: major.natur, s: false},
{name: "Nikoline Knutsen",m: major.natur, s: false},
{name: "Ola Vågane",m: major.natur, s: false},
{name: "Stine Marie Iversen",m: major.natur, s: false},
{name: "Vilde Jensen",m: major.natur, s: false},
{name: "Yann Busson",m: major.natur, s: false},
{name: "Rikke Hjelseth Larsen",m: major.økonomi, s: true},
{name: "Adrian Mateusz Oleksiak",m: major.økonomi, s: false},
{name: "Aleksander Svensrud Jørgensen",m: major.økonomi, s: false},
{name: "Alexander Valstad Haveråen",m: major.økonomi, s: false},
{name: "André Sommerfelt Seljåsen",m: major.økonomi, s: false},
{name: "Andreas Torp",m: major.økonomi, s: false},
{name: "Andrine Huseth Johansen",m: major.økonomi, s: false},
{name: "Anukshi Jeyarajah",m: major.økonomi, s: false},
{name: "Barbro Alexandra Rosseland",m: major.økonomi, s: false},
{name: "Elisabeth Frigstad",m: major.økonomi, s: false},
{name: "Jeton Ajvazi",m: major.økonomi, s: false},
{name: "Joachim Ricci Eikelid",m: major.økonomi, s: false},
{name: "Kari Sandnes",m: major.økonomi, s: false},
{name: "Magnus Lindland",m: major.økonomi, s: false},
{name: "Malene Fjellestad Bakken",m: major.økonomi, s: false},
{name: "Marius Vallheim",m: major.økonomi, s: false},
{name: "Simon Arneberg",m: major.økonomi, s: false},
{name: "Stine Nåvik-Husveg",m: major.økonomi, s: false},
{name: "Synnøve Bjørgum",m: major.økonomi, s: false},
{name: "Thea Bergum",m: major.økonomi, s: false},
{name: "Thea Høgseth",m: major.økonomi, s: false},
{name: "Tonje Jonsås Svendsen",m: major.økonomi, s: false},
{name: "Christoffer Rustad",m: major.international, s: true},
{name: "Adrian Dahl",m: major.international, s: false},
{name: "Adrian Joachin",m: major.international, s: false},
{name: "Andrea Madeleine Simonsen",m: major.international, s: false},
{name: "Erlend Holen",m: major.international, s: false},
{name: "Erik Rosland",m: major.international, s: false},
{name: "Glen Roar Lintho",m: major.international, s: false},
{name: "Gaute Hermansen",m: major.international, s: false},
{name: "Herman Firing Simonsen",m: major.international, s: false},
{name: "Henrik Lindam",m: major.international, s: false},
{name: "Hisham Mohamed Haleemdeen",m: major.international, s: false},
{name: "Julian Erikson",m: major.international, s: false},
{name: "Maia Sørensen Lundby",m: major.international, s: false},
{name: "Maike Zillgitt",m: major.international, s: false},
{name: "Malin Urdalen Høyset",m: major.international, s: false},
{name: "Marius Norman Grut-Thorsen",m: major.international, s: false},
{name: "Marte Bottolfs Brekke",m: major.international, s: false},
{name: "Minh Tinh Tran",m: major.international, s: false},
{name: "Mohammed Essam Abdulrahman",m: major.international, s: false},
{name: "Patrick Kristiansen",m: major.international, s: false},
{name: "Simon Fritzman Laamiri",m: major.international, s: false},
{name: "Tim Emin André Rajala",m: major.international, s: false},
{name: "Vetle José Kløvstad",m: major.international, s: false},
{name: "Oda Kvammen",m: major.international, s: false},
{name: "Hyndla Aira",m: major.international, s: false}
];
  const filterContent = content.filter(v=>{
    return (v.name.toLowerCase().indexOf(søk.toLowerCase()) !==-1 ||
          v.m.name.toLowerCase().indexOf(søk.toLowerCase()) !==-1 ||
          ("faddersjef".indexOf(søk.toLowerCase())!==-1 && v.s))
  })
  return (
  <div class="table-responsive rounded">
    <table class="table table-striped table-hover align-middle mb fixedHeader">
      <thead class="bg-dark text-white small">
        <tr className="text-sub-title small">
          <th>Student</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody class="table-group-divider" id="tableData">

        {filterContent.map(person=>(
          <TableItem name={person.name} major={person.m} sjef={person.s}/>
        ))}

      </tbody>
    </table>
    </div>
  );
}
const Fadderliste = () => {
  const major = useContext(MajorContext);
  const [søk, setSøk] = useState("");
  const submitSearch = (e)=>{
    setSøk(e.target.value);
  }
  return (
    <div className="container">
      <div class="input-group rounded my-3">
            <input type="search" class="form-control rounded" placeholder="Søk etter fadder..." id="myInput"
                name="myInput" aria-label="Search" list="linjer" onChange={submitSearch}/>
            <span type="submit" class="input-group-text border-0">
                <i class="fas fa-search"></i>
            </span>
        </div>

        <datalist id="linjer">
            <option value="Faddersjef"></option>
            <option value={major.eiendom.name}></option>
            <option value={major.it.name}></option>
            <option value={major.kultur.name}></option>
            <option value={major.international.name}></option>
            <option value={major.idrett.name}></option>
            <option value={major.marked.name}></option>
            <option value={major.innovasjon.name}></option>
            <option value={major.natur.name}></option>
            <option value={major.økonomi.name}></option>
        </datalist>

      <Table søk={søk}/>

    </div>
  );
}

export default Fadderliste
