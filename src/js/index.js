//import { Sidenavigation } from '@govflanders/vl-ui-side-navigation';

window.onload = function () {

    // Lazy way to do this
    document.getElementById("code-1").value = "" +
        "{\n" +
        "   \"type\": \"moet een URI zijn, die referentieerbaar kan zijn\", MAND.\n" +
        "   \"title\": \"Een niet wijzigbare beschrijving van de fout zoals geïdentificeerd met type\", MAND.\n" +
        "   \"status\": \"404\", MAND.\n" +
        "   \"detail\": \"een leesbare beschrijving, welke aangepast mag zijn aan de oproep context\" OPT.\n" +
        "   \"instance\": \"de resource waarop de fout betrekking heeft\" OPT.\n" +
        "}";

    document.getElementById("code-2").value = "" +
        "{\n" +
        "   \"type\": \"../errortype/2\",\n" +
        "   \"title\": \"Service onbeschikbaar\",\n" +
        "   \"status\": \"503\",\n" +
        "    \"detail\": \"Achterliggende dienst/bron {kbo} onbereikbaar\",\n" +
        "    \"instance\": \"https://basisregisters.vlaanderen.be/api/v1/organisatie/OVO231123/kboinfo\"\n" +
        "}";

    document.getElementById("code-3").value = "" +
        "{\n" +
        "   \"errors\" : [\n" +
        "         {\n" +
        "          \"type\": \"432\"\n" +
        "          \"title\": \"maximaal 1 persoon\"\n" +
        "          \"detail\": \"Er kan maximaal 1 persoon tegelijk eten bestellen\"\n" +
        "         \n" +
        "         }, ...\n" +
        "   ]\n" +
        "}";
}