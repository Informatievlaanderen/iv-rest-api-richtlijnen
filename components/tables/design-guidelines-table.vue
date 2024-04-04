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
        <td>URL Strategie</td>
        <td>
          <ol>
            <li>
              Pas een data georiënteerd design toe. Een resource URL verwijst
              naar data en niet naar een proces. HTTP-werkwoorden worden
              gebruikt om het verwerken van data aan te geven.<br />
            </li>
            <li>
              Een resource URL dat verwijst naar data, gebruikt naamwoorden
            </li>
            <li>
              Gebruik een API alias voor veelgebruikte zoekcombinaties<br />
              <br />
              <b>Opmerking: </b> in uitzonderlijke gevallen is het mogelijk dat
              een data georiënteerde aanpak van de API niet toepasbaar is. Deze
              vallen dan buiten dit afsprakenkader. Echter, ook in deze
              uitzonderlijke situatie is het aangeraden om zoveel mogelijk van
              de hier opgesomde afspraken te volgen. Een voorbeeld van zo'n
              uitzondering is een convertiedienst:
              convert?from=EURO&to=CNY&amount=100
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>2.</td>
        <td>HTTP methods</td>
        <td>
          <ol tpye="A">
            <li>
              Een resource moet steeds een GET-operatie op niveau van de
              resource ondersteunen
            </li>
            <li>Een GET-operatie op de collectie is optioneel</li>
            <li>
              GET-operaties zijn safe, dat wil zeggen dat ze een resource nooit
              wijzigen. Bij herhaling van de GET-request wordt dezelfde of de
              nieuwe toestand van de resource teruggegeven.
            </li>
            <li>
              Indien een subresource enkel kan bestaan binnen de context van een
              andere resource:
              <ul>
                <li>/resource/{resource_id}/subresource/{subresource_ID}</li>
                <li>Beperk je tot één niveau van subresources</li>
              </ul>
            </li>
            <li>
              Indien een subresource ook onafhankelijk van de resource kan
              bestaan:
              <ul>
                <li>
                  Geef dan in de output van een GET op de resource, de
                  identifier van de subresource mee.
                </li>
              </ul>
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>3.</td>
        <td>Datum & tijd</td>
        <td>
          <ol>
            <li>
              De datum- en tijdsnotatie waarop gestandaardiseerd wordt is het
              ISO8601-formaat.
            </li>
            <li>
              Tijdstippen die deel uitmaken van een respons worden
              genormaliseerd teruggegeven als UTC met tijdzone informatie.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>4.</td>
        <td>Codelijsten</td>
        <td>
          <ol>
            <li>
              Maak gebruik van de ISO 3166-1 2 lettercodes voor landen. Tenzij
              anders opgelegd door de project specifieke data afspraken
              (Bijvoorbeeld: OSLO
              <a
                href="https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/country"
                >https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/country</a
              >
              ).
            </li>
            <li>
              Maak gebruik van de ISO 639-1 2 lettercodes voor talen zoals
              gestipuleerd in
              <a href="https://tools.ietf.org/html/rfc5646"
                >https://tools.ietf.org/html/rfc5646</a
              >. Volg voor meer specifieke taalbepalingen zoals nl-BE en fr-BE
              dezelfde standaard. Tenzij anders opgelegd door de project
              specifieke data afspraken (Bijvoorbeeld OSLO
              <a
                href="https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/language"
                >https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/language</a
              >
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>5.</td>
        <td>Payload</td>
        <td>
          <ol>
            <li>
              Het standaardformaat voor een respons is JSON. Andere formaten
              kunnen aangeboden worden via content-negotiatie.
            </li>
            <li>
              Indien een object niet beschikbaar is en verplicht terug te geven
              is volgens het domein, heeft het de waarde null.
            </li>
            <li>Voor attribuutnamen gebruikt men bij voorkeur camelCase.</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>6.</td>
        <td>Query Parameters</td>
        <td>
          <ol>
            <li>
              Indien ondersteuning wordt geboden voor de functionaliteit om
              subresources meteen mee in te laden tijdens het ophalen van een
              resource dan dient daartoe de <i>embed</i>
              standaard query parameter gebruikt te worden bij GET-operaties.
            </li>
            <li>
              Indien ondersteuning wordt geboden om resultaten te sorteren via
              de querystring, dient hiervoor de standaard queryparameter
              <i>sort</i> gebruikt te worden.
            </li>
            <li>
              Indien ondersteuning wordt geboden om in de lijst van resultaten
              slechts bepaalde attributen terug te geven, dienen hiervoor de
              standaard queryparameters
              <i>limit</i> en <i>offset</i> gebruikt te worden. Indien
              resultaten-paginatie ondersteuning in de payload wordt aangeboden,
              gebruik dan hiervoor de OSLO Hypermedia-standaard (<a
                href="https://github.com/Informatievlaanderen/generieke-hypermedia-api"
                >https://github.com/Informatievlaanderen/generieke-hypermedia-api</a
              >).
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>7.</td>
        <td>HTTP-statuscodes</td>
        <td>
          <ol>
            <li>
              Beperk je waar mogelijk tot de subset van volgende 4 tot 10 Status
              Codes:
              <ul>
                <li>Basis</li>
                <ul>
                  <li>200 - OK</li>
                  <li>404 - Not Found</li>
                  <li>409 - Conflict</li>
                  <li>500 - Internal Server Error</li>
                </ul>
                <li>Uitbreiding</li>
                <ul>
                  <li>201 - Created</li>
                  <li>304 - Not Modified</li>
                  <li>400 - Bad Request</li>
                  <li>401 - Unauthorized</li>
                  <li>403 - Forbidden</li>
                  <li>410 - Gone</li>
                </ul>
              </ul>
              Zie
              <a href="https://tools.ietf.org/html/rfc2616#section-9.5"
                >https://tools.ietf.org/html/rfc2616#section-9.5</a
              >
              voor het correcte gebruik van Status Codes.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>8.</td>
        <td>Standaard error payload</td>
        <td>
          Standaard errors zijn het gevolg van technische, systeem of software
          problemen. Deze worden weergegeven met de overeenkomstige HTTP error
          code en optioneel een standaard error payload.
          <ol>
            <li>
              Een standaard error payload volgt de afspraken
              <a href="https://tools.ietf.org/html/rfc7807"
                >https://tools.ietf.org/html/rfc7807</a
              >. In tegenstelling tot deze RFC zijn de velden <i>title</i> en
              <i>status</i> wel verplicht te voorzien.
            </li>
            <vl-textarea
              v-if="props?.notFound"
              v-model="props.notFound"
              cols="80"
              rows="10"
              disabled
            />
            <br /><br />
            Bijvoorbeeld:
            <br />
            <vl-textarea
              v-if="props?.serverError"
              v-model="props.serverError"
              cols="80"
              rows="10"
              disabled
            />
          </ol>
        </td>
      </tr>
      <tr>
        <td>9.</td>
        <td>Validatie error payload</td>
        <td>
          Validatie errors zijn het gevolg van een business evaluatie van de
          payload meegegeven in voorafgaande API interactie. Validatie errors
          verhinderen mogelijks het verzetten van interactie met (onderdelen
          van) de API. Er is geen vaste correlatie tussen HTTP error codes en
          het bestaan van vanlidatie errors. Het kan dus best voorkomen dat een
          HTTP respons code 200 wordt ontvangen met validatie errors.
          Bijvoorbeeld in de situatie dat een draft object wordt opgeslagen en
          dat al de validatie errors hierbij worden teruggegeven. Het is aan de
          designer van de REST API om zo goed mogelijk de HTTP respons code te
          laten overeenkomen met het bestaan van validatie errors en hiermee de
          interactie van de API te sturen.
          <ol>
            <li>
              Validatie errors worden meegegeven als een lijst met als naam
              <i>errors</i>, welke de elementen de basisstructuur van de
              standaard errors volgen: <i>type</i>, <i>title</i> en
              <i>detail</i>
              zijn verplicht in dit geval. Eigen uitbreidingen zijn toegestaan.
              <br /><br />
              <vl-textarea
                v-if="props?.clientError"
                v-model="props.clientError"
                cols="80"
                rows="10"
                disabled
              />
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>10.</td>
        <td>HTTP headers</td>
        <td>
          Waar toepasselijk gebruik de standaard HTTP headers om het gebruik van
          de API te bevorderen. Een concrete lijst met hun gebruik binnen AIV is
          <a
            href="https://vlaamseoverheid.atlassian.net/wiki/spaces/EAA/pages/1045628650/HTTP+headers+-+versie+1.1>"
            >hier</a
          >
          te vinden.
        </td>
      </tr>
      <tr>
        <td>11.</td>
        <td>Documentatie</td>
        <td>
          <ol>
            <li>
              Gebruik de OpenAPI Specificatie om RESTful API's te documenteren.
              We gebruiken de laatste versie van OpenAPI 3.x. Documentatie in de
              vorm van OpenAPI 2.x is
              <i>deprecated</i>.
            </li>
            <li>
              Volgende zaken zijn verplicht te beschrijven in de documentatie:
              <ul>
                <li>Omschrijven van wat de API call doet</li>
                <li>Beschrijving van de input en output parameters</li>
                <li>De exhaustieve lijst van respons codes</li>
              </ul>
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>12.</td>
        <td>Taal</td>
        <td>
          Een URL mag zowel in het Nederlands als het Engels. De taalwetgeving
          is niet van toepassing op API's. Wees consequent in het taalgebruik:
          minimaliseer het mengen van talen.
        </td>
      </tr>
      <tr>
        <td>13.</td>
        <td>API evolutie</td>
        <td>
          <ol>
            <li>
              Ondersteun API evolutie met goed API-versie management. In geval
              van breaking changes verhoogt de REST URL { version }.
            </li>
            <li>
              Voorzie, in kader van operationele backwards compatibility naar
              API afnemers toe, een transitieperiode bij het uitbrengen van een
              nieuwe REST URL { version }, waarbij de vorige versie gedurende
              een overeengekomen periode ondersteund blijft.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>14.</td>
        <td>Content negotiatie</td>
        <td>
          <ol>
            <li>
              Gebruik content negotiatie voor Accept, Accept-Encoding,
              Accept-Language zoals de HTTP-standaard voorschrijft. Voor de
              Accept header, gebruik media types zoals geregistreerd door IANA
              (zie:
              <a
                href="https://www.iana.org/assignments/media-types/media-types.xhtml"
                >https://www.iana.org/assignments/media-types/media-types.xhtml</a
              >).
            </li>
            <li>
              Data-gebaseerde content negotiatie wordt beschreven in
              <a href="https://w3c.github.io/dxwg/conneg-by-ap/"
                >https://w3c.github.io/dxwg/conneg-by-ap/</a
              >.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>15.</td>
        <td>CorrelatieID</td>
        <td>
          Om de verwerking van een API request te kunnen volgen is het zinvol om
          een correlatieID te initiëren door de proxy verbonden met de externe
          wereld. Deze correlatieID moet worden doorgegeven door elke
          verwerkende service naar zijn achterliggende API-oproepen. Op deze
          manier kan de verwerking van 1 externe request over verschillende
          API's heen gevolgd worden. Deze correlatieID zal worden opgeslagen in
          een HTTP header x-correlation-id.
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps({
  notFound: {
    type: String,
  },
  serverError: {
    type: String,
  },
  clientError: {
    type: String,
  },
})
</script>
