<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>Nummer.</th>
          <th>Onderwerp</th>
          <th>Regel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>OSLO²</td>
          <td>
            <ol>
              <li>
                Het informatiemodel en de gebruikte nomenclatuur dient in lijn
                te zijn met de OSLO² semantiek voor wat betreft de
                OSLO²-governed entiteiten. Meer informatie hieromtrent is te
                vinden via
                <a href="https://data.vlaanderen.be/"
                  >https://data.vlaanderen.be/</a
                >
                of
                <a href="mailto:oslo@kb.vlaanderen.be">oslo@kb.vlaanderen.be</a>
              </li>
              <li>
                Het is verplicht om @id (indien de URI beschikbaar is) en
                @context verwijzing op te nemen voor OSLO²-governed entiteiten
                in de JSON payload van REST API's, zelf in services die al live
                staan (*)
                <br />
                <br />
                <i style="font-size: 75%"
                  >(*) Indien, voor services die al live staan, het om
                  technische redenen niet mogelijk is om de OSLO² semantiek
                  rechtstreeks over te nemen in de JSON payload zal deze
                  voorzien worden in een eigen @context file die de mapping naar
                  de OSLO² semantiek vastlegt.
                </i>
              </li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss" src="./style.scss" />
