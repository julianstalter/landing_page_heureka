import Head from "next/head"

export default
function Home() {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>

    <head>
      <meta charset="UTF-8"></meta>
      <title>Heureka Landing Page</title>
    </head>

    <body>

    <div class="text-bookmark-white">
      <header>
        <nav class="container flex items-center py-4">
        <img src="/imgs/LogoHeureka.svg" width="200 px" />
          <div class="flex-1">
            <div class="py-4 h-20 w-20 rounded-lg"> <img src="" alt="" /> </div>
          </div>
          <div>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 uppercase text-xs">
              <li class="cursor-pointer"> <a href="#Daten"> Daten </a> </li>
              <li class="cursor-pointer"> <a href="#editionen"> Digitale Editionen </a> </li>
              <li class="cursor-pointer"> <a href="#print"> Printpublikation </a> </li>
              <li class="cursor-pointer"> <a href="#start"> Get Started </a> </li>
              <button type="button" class="bg-bookmark-purple text-bookmark-white rounded-md px-7 py-3 uppercase">Leg Los!</button>
            </ul>
          </div>
        </nav>
      </header>

      <section class="relative">

        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-center lg:text-left mb-6 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center">
              Heureka
            </h2>
            <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              Bring your digital edition to the next level
            </p>
            <div class="flex justify-center flex-wrap gap-6">
              <button type="button" class="btn bg-bookmark-purple text-bookmark-white p-4 rounded-md bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-bookmark-white">
                <a href="#Section_further_down">
                  Leg Los!
                </a>
              </button>
            </div>
          </div>

          <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/imgs/code.png" alt="" />
          </div>

        </div>
      </section>

      <section class= "py-20 mt-5 bg-slate-900">
        <div id="Section_further_down" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center ">
            Weil best practice nicht immer die beste Lösung ist
          </h1>
          <p class="text-center text-bookmark-grey mt-4">
          HTML 5 erlaubt einfachere und schlankere Lösungen als TEI-XML und lässt sich zielgerichtet auf Dein Projekt zuschneiden
          </p>
        </div>

        <div class="relative mt-20 lg:mt-24">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

            <div class="flex-1">
              <h2 class="text-2xl ">
                HTML 5
              </h2>
              <p class="text-bookmark-grey mt-4">
                Intuitiv verständlich, differenziert, eindeutig
              </p>
              <pre><code class= "language-javascript">
              &lt;i&gt;
              <br></br>
              &lt;em/em&gt;
              <br></br>
              &gt;b/b&gt;
                </code> </pre>
              
              <img class="h-96 align-center" src="/imgs/html.jpg" alt="" />
            </div>
            
            <div class="flex-1">
              <h2 class="text-2xl ">
                TEI-XML
              </h2>
              <p class="text-bookmark-grey mt-4">
              Schnell unübersichtlich, überfrachtet, tendenziell mehrdeutig
              </p>
              <img class="h-96" src="imgs/teixml.jpg" alt="" />
            </div>

          </div>
        </div>



      </section>
      
      <div id="print" class="relative my-30 py-10 p-5 bg-white">
          <div class="flex flex-col items-center gap-x-24 container">

              <div class="">
                  <h2 class="text-2xl text-bookmark-blue text-center">Einfache Anwendung in Visual Studio Code</h2>
                  <p class="text-bookmark-blue mt-4 text-center mb-10">
                    Ausgabe des Ergebnisses direkt im Editor
                  </p>
              </div>

              <div class="">
                  <img class="h-96 border-2 border-black" src="/imgs/vscode_small.png" alt=""/>
              </div>
          </div>
        </div>


      <section>
        <div class="container flex flex-col  items-center justify-center gap-x-24 mt-20">

        <div class="">
                  <h2 class="text-2xl text-bookmark-white text-center mb-10">Vergleich mit anderen Auszeichnungssystemen</h2>
              </div>

          <table class="table-auto border-separate border-spacing-2 border border-slate-500">
            <thead>
            <tr>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Technologie</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Daten</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Druck</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Online</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Ökosystem</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Module</th>
                  <th class="border border-slate-600 border-spacing-2 p-4 bg-bookmark-blue">Erlernbarkeit</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td class="border border-slate-700 p-4 bg-bookmark-blue ">Textverarbeitungsprogramme</td>
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4">-</td>
                  <td class="border border-slate-700 text-center p-4">-</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                </tr>

                <tr>
                  <td class="border border-slate-700 p-4 bg-bookmark-blue">LaTex</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                </tr>

                <tr>
                  <td class="border border-slate-700 p-4 bg-bookmark-blue">TEI-XML</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4">-</td>
                  <td class="border border-slate-700 text-center p-4">-</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                </tr>

                <tr>
                  <td class="border border-slate-700 p-4 bg-bookmark-blue">HTML 5</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-yellow-400">⭑⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
                </tr>

            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div class="relative mt-20 lg:mt-24 bg-white">
          <div id="Daten" class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div class="flex-1">
              <h2 class="text-2xl text-bookmark-blue">Strukturierte Daten</h2>
              <p class="text-bookmark-grey mt-4">
                Für eine wissenschaftliche Edition sind strukturiertere Daten das A und O. <br/>
                HTML ist ein Datenstandard garantiert, der die Nachnutzbarkeit deiner Ergebnisse gewährleistet.
              </p>
            </div>
            <div class="flex-1">
            <img src="/imgs/in_loco.png" alt="https://www.istockphoto.com/de/foto/dokumenten-management-system-automatisierungssoftware-zur-archivierung-und-gm1354153850-429055202" height="297" width="509"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="editionen" class="relative mt-20">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div class="flex-1">
            <img src="/imgs/in_loco.png" alt="https://www.istockphoto.com/de/foto/dokumenten-management-system-automatisierungssoftware-zur-archivierung-und-gm1354153850-429055202" height="297" width="509"/>
            </div>

            <div class="flex-1">
                <h2 class="text-2xl ">Digitale Editionen</h2>
                <p class="text-bookmark-grey mt-4">
                Unabhängig vom Ausgabegerät können User die Edition im responsive Desgn durchsuchen und damit arbeiten.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="print" class="relative mt-20 p-5 bg-white">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              <div class="flex-1">
                  <h2 class="text-2xl text-bookmark-blue">Printpublikation</h2>
                  <p class="text-bookmark-grey mt-4">
                    Schluss mit umständlichen Auszeichnungen.
                    <br></br>
                    Nutze die vielfältigen open source Editoren mit direkter Vorschau.
                  </p>
              </div>

              <div class="flex-1">
              <img src="/imgs/in_loco.png" alt="https://www.istockphoto.com/de/foto/dokumenten-management-system-automatisierungssoftware-zur-archivierung-und-gm1354153850-429055202" height="297" width="509"/>
              </div>
          </div>
        </div>
      </section>

      <section class= "py-10 mt-5 bg-slate-900">
      </section>

        <div id="start" class="sm:w-3/4 mx-auto px-2">
          <h1 class="text-3xl text-center ">
            Get Started
          </h1>
          <p class="text-center text-bookmark-grey mt-4">
            In nur vier Schritten loslegen
          </p>
        </div>

          <section>
            <div class="relative mt-20 lg:mt-24 bg-white p-10">

              <div id="Daten" class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <div class="flex-1">
                  <h2 class="text-2xl text-bookmark-blue text-right">1. VSCode installieren</h2>
                  <p class="text-bookmark-grey mt-4">
                  </p>
                </div>
                <div class="flex-1">
                  <a href="https://code.visualstudio.com/download">
                    <img class="h-20" src="https://cdn1.iconfinder.com/data/icons/akar-vol-2/24/vscode-fill-512.png" height="50%" alt="" />
                  </a>
                </div>
              </div>

              <div id="Daten" class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-10">
                <div class="flex-1">
                  <h2 class="text-2xl text-bookmark-blue text-right">2. Extension downloaden</h2>
                  <p class="text-bookmark-grey mt-4">
                  </p>
                </div>
                <div class="flex-1">
                  <img class="h-20" src="/imgs/exporticon.svg" width="35 px" alt="" />
                </div>
              </div>

              <div id="Daten" class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-10">
                <div class="flex-1">
                  <h2 class="text-2xl text-bookmark-blue text-right">3. Dokumentation downloaden</h2>
                  <p class="text-bookmark-grey mt-4">
                  </p>
                </div>
                <div class="flex-1">
                <img class="h-20" src="/imgs/pdficon.svg" width="40 px" alt="" />
                </div>
              </div>

              <div id="Daten" class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-10">
                <div class="flex-1">
                  <h2 class="text-2xl text-bookmark-blue text-right">4. CSS pointen</h2>
                  <p class="text-bookmark-grey mt-4">
                  </p>
                </div>
                <div class="flex-1">
                <img class="h-20" src="/imgs/cssicon.svg" width="35 px" alt="" />
                </div>
              </div>
            </div>
          </section>

        <div id="start" class="flex flex-col p-10 items-center">

          <div>
            <h1 class="text-3xl text-center">
              Mehr Informationen
            </h1>
          </div>

          <div className="">
            <button type="button" class=" btn bg-bookmark-purple text-bookmark-white p-4 rounded-md bg-gradient-to-r from-purple-400 to-pink-600 mt-10">
                <a href="">
                  Download Dokumente
                </a>
            </button>
          </div>

        </div>

      <div className="bg-bookmark-blue flex justify-evenly p-10">

        <div className="text-sm basis-1/3 text-center">
          <p>Ein Rahmenwerk der 
            Bayerischen Akademie der Wissenschaften</p>
        </div>

        <div className="basis-1/3 ">
          <img class="h-20" src="imgs/wortmarke.png" alt=""/>
        </div>

        <div className="flex-row basis-1/3">
            <a href="https://badw.de/data/footer-navigation/impressum.html">
              <p>Impressum</p>
            </a>
            <a href="https://badw.de/data/footer-navigation/datenschutz.html">
              <p>Datenschutz</p>
            </a>
            <a href="https://badw.de/kontakt-und-anfahrt.html">
              <p>Kontakt</p>
            </a>
        </div>
      </div>

    </div>
    </body>
    </html>
  );
}
