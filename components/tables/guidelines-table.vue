<template>
  <table>
    <thead>
      <tr>
        <th>Nummer</th>
        <th>Onderwerp</th>
        <th>Regel</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>URL</td>
        <td>
          Een REST URL wordt geformatteerd als { protocol }://{ hostname }/api/{
          version }/{ resource}/{ identifier } .<br />
          Daarbij is 'api' optioneel als het reeds gebruikt wordt als onderdeel
          van de {hostname}.
          <b
            >Het gebruik van hoofdletters in de REST URL's is niet toegestaan</b
          >
        </td>
      </tr>
      <tr>
        <td>2.</td>
        <td>URL {hostname}</td>
        <td>
          De concrete hostname afspraken voor Informatie Vlaanderen via een
          separate guideline, los van de REST API guideline uitwerken.
        </td>
      </tr>
      <tr>
        <td>3.</td>
        <td>URL {protocol}</td>
        <td>
          <ol>
            <li>Gebruik steeds HTTPS</li>
            <li>
              Gebruik TLS (Transport Layer Security) v1.2 (SSL & TLS v1.0 zijn
              deprecated)
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>4.</td>
        <td>URL {version}</td>
        <td>
          <ol>
            <li>
              De versie van de API wordt mee in de URL opgenomen. Bijkomend mag
              deze informatie ook ontsloten worden via andere kanalen zoals
              headers indien deze exact dezelfde versie weergeven als in de URL
            </li>
            <li>
              Een versie wordt genoteerd als kleine letter 'v' met een
              volgnummer, bijvoorbeeld v1, v2 of v14. Geen verdere leestekens
              zijn toegestaan.<br />
              Er worden enkel <b>major</b> versies opgenomen. Minor changes
              kunnen via de header <i>x-version</i> bekend gemaakt worden. De
              header-waarde volgt de semantic versioning regels&#58;
              v.MAJOR.MINOR.PATCH
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>5.</td>
        <td>URL {resource}</td>
        <td>
          <ol>
            <li>Resources worden in URI's in het meervoud uitgedrukt.</li>
            <li>
              Binnen de URI mag <i>resource</i> nooit de waarde 'id', 'doc' of
              'ns' aannemen.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>6.</td>
        <td>URL {identifier}</td>
        <td>
          <ol>
            <li>
              Een resource identifier dient één enkele (desnoods applicatie
              geconcateneerde) unieke key te zijn waarmee één resource zal terug
              te vinden zijn.<br />
              <br />
              De unieke key moet voldoen aan semantische coherentie. Dat wil
              zeggen dat het niet toegelaten is dat dezelfde unieke key zal
              gebruikt worden om doorheen de tijd naar verschillende objecten te
              verwijzen. De toestand van dat object waarnaar het verwijst kan
              wel wijzigen.
            </li>
            <li>
              Gebruik geen URI als resource identifier. Bij voorkeur worden
              GUID's of long integers aangeraden. Bestaande businessdomein
              identificatoren zoals ISBN-nummers, CAPA key,
              rijksregisternummers, ... vormen ook een goede keuze.<br />
              <br />
              <b>Motivatie&#58; </b>URI's als resource identifier zijn lang én
              vereisen het toepassen van URL encoding, wat de leesbaarheid en
              het gebruik van de API bemoeilijkt.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>7.</td>
        <td>URL formatting</td>
        <td>
          <ol>
            <li>
              Gebruik geen fragments (#) in de URL. Fragmenten worden gebruikt
              om in een webpagina te navigeren. Ze worden niet gebruikt in een
              API URL.
            </li>
            <li>
              Gebruik geen underscores '_' of punten '.' in de URL resource.
              Gebruik koppeltekens '-' om woorden te scheiden. Dat verhoogt de
              leesbaarheid.
            </li>
            <li>
              Gebruik geen eind '/' (trailing slash) als betekenisvol onderdeel
              van de REST URL.
            </li>
            <li>
              Gebruik geen file extensies als betekenisvol onderdeel van de REST
              URL.<br />
              <br />
              <b>Motivatie&#58; </b> File extensies kunnen best beschouwd worden
              als een vereenvoudigde vorm van <i>content negotiation</i>. De
              vorm van de respons is niet identificerend, dus is dit ook best
              geen onderdeel van de resource identificator. Bijvoorbeeld&#58;
              file extensies zijn van toepassing wanneer gewone HTML pagina's
              direct willen verwijzen naar de data in een bepaalde vorm.
              'Volwaardige' content negotiation mag niet achterwege gelaten
              worden enkel en alleen omdat file extensies zouden ondersteund
              worden.
            </li>
          </ol>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>
