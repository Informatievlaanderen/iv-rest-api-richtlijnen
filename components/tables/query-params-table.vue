<template>
  <table>
    <thead>
      <tr>
        <th>Nummer</th>
        <th>Functionaliteit</th>
        <th>Query parameter (i.h. Engels)</th>
        <th>Betekenis</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Eager loading van subresources</td>
        <td>embed</td>
        <td>
          Komma-gescheiden lijst van subresource(s) die eager geladen dienen te
          worden, waarbij ondersteuning voor geneste subresources (bv:
          thema.categorie) of subresource attributen (bv: thema.categorie.naam),
          wordt geboden.
        </td>
      </tr>
      <tr>
        <td>2.</td>
        <td>Filteren van zoekresultaten</td>
        <td>&lt;attribuut&gt;</td>
        <td>
          <ol>
            <li>
              Attribuut en de waarde ervan waarop gefilterd dient te worden (bv:
              status=actief). Filteren op meerdere attributen gebeurt door
              meerdere attributen en hun waarden als query parameters op te
              nemen, als in status=actief,publiek=true;
            </li>
            <li>
              Waar in de queryparameters domeinbenamingen als waarde nodig zijn
              (zoals bij embedding, filtering op attribuut, zoeken, scope
              framing) zullen dit normaal gezien de benamingen zijn die
              voorkomen in de payload.
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>3.</td>
        <td>Sorteren van zoekresultaten</td>
        <td>sort</td>
        <td>
          Komma-gescheiden lijst van attributen waarop gesorteerd wordt, waarbij
          de volgorde in de lijst bepalend is voor de sorteervolgorde en waarbij
          tevens naast ondersteuning voor oplopend ook functionaliteit voor
          aflopend sorteren, door middel van <code>:desc</code> toe te voegen
          aan het attribuut (<code>:asc</code> is default), wordt geboden.
          Voorbeeld: <code>sort=-creatieDatum:desc,naam</code>
        </td>
      </tr>
      <tr>
        <td>4.</td>
        <td>Full-text zoeken</td>
        <td>q</td>
        <td>Vrij zoekveld</td>
      </tr>
      <tr>
        <td>5.</td>
        <td>Beperken van geretourneerde attributen</td>
        <td>field</td>
        <td>
          Komma-gescheiden lijst van attributen die gewenst worden in de
          resultatenlijst.
        </td>
      </tr>
      <tr>
        <td>6.</td>
        <td>Paginatie</td>
        <td>limit</td>
        <td>Aantal resultaten op 1 resultatenpagina</td>
      </tr>
      <tr>
        <td>7.</td>
        <td>Paginatie</td>
        <td>offset</td>
        <td>
          Volgnummer van het eerstvolgend resultaat dat als eerste wordt
          verwacht (startend bij 0). Voorbeeld van 10 resultaten per pagina
          opvragen waarbij pagina 1 wordt opgevraagd met
          <code>limit=10,offset=0</code> en de tweede pagina met
          <code>limit=10;offset=10</code>, dus resultaten teruggeeft beginnend
          bij het 11de resultaat.
        </td>
      </tr>
    </tbody>
  </table>
</template>
