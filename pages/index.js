export default
function Home() {
  return (
    <div class="bg-slate-900 text-bookmark-white">
      <header>
        <nav class="container flex items-center py-4 mt-4 sm:mt-12">
          <div class="py-4 h-20 w-20 rounded-lg"> <img src="/imgs/logo_ai.jpg" alt="" /> </div>
          <ul>
          <li class="cursor-pointer"> <a href="#Daten"> Daten </a> </li>
                <li class="cursor-pointer"> <a href="#editionen"> Digitale Editionen </a> </li>
                <li class="cursor-pointer"> <a href="#print"> Printpublikation </a> </li>
                <button type="button" class="bg-bookmark-purple text-bookmark-white rounded-md px-7 py-3 uppercase">Leg Los!</button>
          </ul>
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
            <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/imgs/html.gif" alt="" />
          </div>

        </div>
      </section>

      <section class= "py-20 mt-10 lg:mt-60 bg-slate-900">
        <div id="Section_further_down" class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-bookmark-white">
            Weil best practive nicht immer die beste Lösung ist
          </h1>
          <p class="text-center text-bookmark-grey mt-4">
          HTML 5 erlaubt einfachere und schlankere Lösungen als TEI-XML und lässt sich zielgerichtet auf dein Projekt zuschneiden
          </p>
        </div>

        <div class="relative mt-20 lg:mt-24">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

            <div class="flex-1">
              <h2 class="text-2xl text-bookmark-white">
                HTML 5
              </h2>
              <p class="text-bookmark-grey mt-4">
                Intuitiv verständlich, differenziert, eindeutig
              </p>
              <img class="h-96 align-center" src="/imgs/html.jpg" alt="" />
            </div>
            
            <div class="flex-1">
              <h2 class="text-2xl text-bookmark-white">
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
      
      <section>
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <table class="table-auto text-bookmark-white border-separate border-spacing-2 border border-slate-500">
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
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑</td>
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
                  <td class="border border-slate-700 text-center p-4 bg-red-600">⭑</td>
                  <td class="border border-slate-700 text-center p-4 bg-green-800">⭑⭑⭑</td>
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
              <img class="h-96" src="https://media.istockphoto.com/id/1279103299/de/vektor/ai-künstliche-intelligenz-und-deep-learning-konzept-neuronaler-netzwerke-wellenausgleich.jpg?s=2048x2048&w=is&k=20&c=wbwUobkwY38P4JSyXvZ-UmvDUJr4Y5ZSa51NHjAgAwo=" alt="" />
            </div>
          </div>
        </div>


      </section>

      <footer class="bg-bookmark-blue py-8">
        <div class="container flex flex-col md:flex-row items-center p-10 m-5">
          <div class="flex mb-4 gap-12 ">
            <div class="w-1/3">
              <p>
              Ein Rahmenwerk der Bayerischen Akademie der Wissenschaften
              </p>
            </div>

            <div class="w-1/3">
              <img class="footerimage" src="imgs/wortmarke.png" alt="" />
            </div>

            <div class="w-1/3">
              <ul>
                <b><a href="https://badw.de/data/footer-navigation/impressum.html">IMPRESSUM</a></b>
                <br /><br />
                <b><a href="https://badw.de/data/footer-navigation/datenschutz.html">DATENSCHUTZ</a></b>
                <br /><br />
                <b><a href="https://badw.de/kontakt-und-anfahrt.html">KONTAKT</a></b>
                <br /><br />
              </ul>
            </div>
            
          </div>

        </div>
        
      </footer>
    </div>
  );
}
