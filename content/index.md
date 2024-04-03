---
description: "
Deze pagina bevat richtlijnen voor het bouwen van RESTful API's binnen Digitaal Vlaanderen. Ze zijn van toepassing op nieuwe ontwikkelingen en bij grote herwerkingen van bestaande oplossingen. Dit document is het resultaat van een interne afstemming via de Expertise Groep Architectuur en is afgetoetst met externe partijen die gelijkaardige afspraken maken. Vragen en feedback kunnen online gesteld worden als een issue op <a href='https://github.com/Informatievlaanderen/iv-rest-api-richtlijnen/issues'>github</a>, of via de interne kanalen bij Digitaal Vlaanderen.
"

introduction: "
<p>Representational State Transfer of kortweg REST is een architecturale stijl voor gedistribueerde hypermedia-systemen zoals ingevoerd en <a href='https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm'>gedefinieerd in 2000 door Roy Fielding</a>, waarbij de toegang tot en bewerking van objecten in een bepaald domein worden beschreven als standaard web operaties op web resources. REST stoelt sterk op de concepten en principes van het HTTP-protocol waarvan Roy Fielding mede-auteur is.</p>

<p><a href='https://restfulapi.net/rest-architectural-constraints/'>Een set van architecturale constraints</a> (uniforme interface, client-server interactie, stateless gedrag, cacheable, ...) maken van een webservice een RESTful webservice, die samen resulteren in een RESTful API. Dat wil zeggen een applicatieprogramma-interface (API) die overeenkomt met de REST-architectuurstijl.</p>

<p>Naast RESTful API's bestaan er nog andere manieren om API's te bouwen. In <a href='http://www.jopera.org/files/wilde-www2009-loospdf'>'Why is the Web Loosely Coupled? A Multi-Faceted Metric for Service Design.'</a> worden verschillende aspecten van de meest voorkomende API-types naast elkaar geplaatst. De auteurs tonen aan dat RESTful API's de vorzwakste koppelingen met de afnemers van de API vereist. Voor open systemen, zoals het web of data, is dat een belangrijk voordeel omdat hierdoor toegang tot data eenvoudiger is en de gevoelwijzigingen in de API beperkter is (dependencies).</p>

<p>Ondanks dat de basisprincipes van RESTful API's duidelijk zijn, is er toch heel wat implementatievariatie mogelijk. REST legt naenkele regel op met betrekking tot hoe het op een lager niveau geïmplementeerd moet worden. Deze variatie zorgt ervoor dat afnemers, hoewel geconfronteerd met API's die gelijkaardige principes vheel wat specifiek implementatiewerk hebben per API. Met onderstaande afspraken definiëren we een richtlijn voor RESTful API's die afnemers toelaat om sneller aan de slag te gaan met de API's vanVlaanderen.</p>

<p>RESTful API's die onderstaande richtlijnen implementeren</p>
<ul>
  <li>Hebben URL's die entity-centric, dus volgens de resources en niet service gericht zijn.</li>
  <li>Gebruiken HTTP als transportprotocol</li>
  <li>Gebruiken HTTP-werkwoorden (verbs) als interactiewijze voor het opvragen, wijzigen en aanmaken van resources</li>
</ul>

<p>De afspraken zijn technisch basaal: ze realiseren een uniforme URL-structuur én API design richtlijnen met standaardgedrag, germinimale implementatiekost. Afspraken voor zelf-documenterende 'slimme' (hypermedia-driven) API's worden opgenomen in andere standaarden.</p>
"

guidelines: "
<p>Er zijn heel wat gerelateerde standaarden en richtlijnen die een rol spelen bij de realisatie van een API:</p>
<ul>
  <li>De OSLO-standaarden (<a href='data.vlaanderen.be'>data.vlaanderen.be</a>) vormen de basis voor overheidsinformatie. Het is soms verplicht, maar steeds aanbevolen, om de data volgens deze afspraken te ontsluiten.</li>
  <li>De URI-standaard voor persistente identificatoren. Deze standaard is een technische standaard die van toepassing is op data die men via persistente identificatoren wil ontsluiten.</li>
  <li>De OSLO Generieke Hypermedia driven API's, zie <a href='https://github.com/Informatievlaanderen/generieke-hypermedia-api'>https://github.com/Informatievlaanderen/generieke-hypermedia-api</a>.<br>Hypermedia-driven (Hypermedia As The Engine Of Application State, kort HATEOAS) betekent dat de API zelf-documenterend is en geëxploreerd kan worden door machines. Deze standaard vult de afspraken aan voor specifieke topics.</li>
</ul>

<p>Deze afspraken worden momenteel ook intergouvernementeel afgestemd, om zo een nog groter draagvlak te bekomen. Dit document zal waar nodig en relevant verwijzen naar deze gerelateerde standaarden en richtlijnen.</p>
"

formGuidelines: "
<p>Met deze afspraken willen we maximaal inzetten op leesbaarheid als het compact, uniform beschikbaar maken van operaties op data in een entity-centric visie.</p>

<p>In het datalandschap zijn <b>twee</b> lezingen mogelijk voor een URL&#58; de <i>identificator lezing</i>  en de <i>API lezing</i>. Neem als voorbeeld de URL https://{domein}/a/b/c . Dan is
<ul>
  <li>de <b>API lezing</b> voor 'a/b/c' = de c's binnen de context van de b's in de context van de a's. Het gebruik van meervouden volgt logisch uit deze hiërarchische filtering lezing van de URL. In deze lezing heeft https://{domein}/a/b/c dus ook een betekenis!</li>
  <li>de <b>identificator lezing</b> = de naam van dit object is de gehele URL https://{domein}/a/b/c. Het geheel heeft dus betekenis. En het is niet zo omdat '/a/b/c' bestaat dat ook '/a/b' betekenis heeft. Daarom worden termen in het enkelvoud gebruikt in deze lezing.</li>
</ul>

<p>Bovenstaande afspraken passen de API lezing toe. Indien men identificatoren wenst te ontsluiten op het web, dan verwijzen we naar de URI standaard voor persistente identificatoren.</p>
"

notFound: "
{\n
\t type: moet een URI zijn, die referentieerbaar kan zijn, MAND.\n
\t title: Een niet wijzigbare beschrijving van de fout zoals geïdentificeerd met type, MAND.\n
\t status: 404, MAND.\n
\t detail: een leesbare beschrijving, welke aangepast mag zijn aan de oproep context OPT.\n
\t instance: de resource waarop de fout betrekking heeft OPT.\n
};
"

serverError: "
{\n 
\t type: ../errortype/2,\n 
\t title: Service onbeschikbaar,\n 
\t status: 503,\n 
\t detail: Achterliggende dienst/bron {kbo} onbereikbaar,\n 
\t instance: https://basisregisters.vlaanderen.be/api/v1/organisatie/OVO231123/kboinfo\n 
};
"

clientError: "
{\n 
\terrors: \n
\t [\n 
\t \t {\n 
\t \t \t type: 432\n 
\t \t \t title: maximaal 1 persoon\n 
\t \t \t detail: Er kan maximaal 1 persoon tegelijk eten bestellen\n 
\t \t }, ...\n 
\t ]\n 
};
"


---
