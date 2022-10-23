import React from "react";
import "../styles/main.scss";
import {Box, Heading, Text} from "@primer/react";
import {LAYOUT_WIDTH} from "../Constants";
import Disclaimer from "../components/Disclaimer";

export default class Terms extends React.Component {

  render() {
    return <main>
      <Box
          borderWidth={[0, 0, 1]}
          borderStyle="solid" borderColor="border.default"
          borderRadius={[0, 0, 2]}
          boxShadow="shadows.medium" bg="canvas.default" mx="auto" p={[0, 0, 3]}
          maxWidth={LAYOUT_WIDTH}>
        <Heading as="h1">Algemene verkoopsvoorwaarden</Heading>
        <Text as="p">Onderhavige voorwaarden maken integraal deel uit van de
          overeenkomst
          met uitsluiting van de eigen voorwaarden van de klant. Er kan alleen
          schriftelijk worden afgeweken.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Aanvaarding</Heading>
        <Text as="p">Behoudens voorafgaandelijk en schriftelijk akkoord van
          onzentwege zal
          het feit dat de cliënt ons een bestelling, een werk of een dienst
          toevertrouwt, op zich inhouden dat hij al onze hierna vermelde
          verkoopsvoorwaarden aanvaardt. De algemene verkoopsvoorwaarden die
          voorkomen op de stukken van onze cliënten zijn ons niet tegenstelbaar.
          De algemene inkoopvoorwaarden van de afnemer gelden niet, tenzij wij
          een schriftelijke overeenkomst sturen met onze instemming. De
          aanvaarding van bestelformulieren of het zenden van een
          orderbevestiging houden nooit in dat wij de inkoopvoorwaarden van de
          afnemer aanvaarden.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Offertes</Heading>
        <Text as="p">Tenzij vooraf door ons ingetrokken zijn onze offertes
          slechts geldig
          gedurende de daarin vermelde periode, of wanneer geen periode
          aangeduid werd, gedurende 14 dagen na hun dagtekening. Enkel de
          wettige vertegenwoordigers kunnen onze firma geldig verbinden. De
          goederen en diensten worden geleverd zoals omschreven op de factuur of
          bestelbon. Bovendien kunnen wij steeds gelijksoortige materialen van
          een ander merk leveren zonder dat dit aanleiding kan geven tot
          prijsvermindering.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Levering- en
          uitvoeringstermijnen</Heading>
        <Text as="p">De levering gebeurt bij de verkoper, behoudens ander
          sluitende
          schriftelijke afspraak. Alle opgegeven levering- en
          uitvoeringstermijnen zijn steeds richtinggevend en zullen waar
          mogelijk door ons aangehouden worden. Een eventuele overschrijding van
          deze termijnen geeft in geen geval recht op schadevergoeding of boete.
          Tevens zal de klant niet het recht hebben om de overeenkomst of
          bestelling te annuleren, te verbreken en/of om de ontvangst van de
          goederen en/of uitvoering der werken en/of de betaling te
          weigeren.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Overmacht</Heading>
        <Text as="p">De bestellingen worden zo spoedig mogelijk naargelang van
          de beschikbare voorraden en de verwerking- en productiemogelijkheden
          uitgevoerd. Indien wij wegens omstandigheden, die zich buiten onze
          schuld voordoen, verhinderd worden onze verplichtingen na te komen,
          dan hebben wij de keuze om de uitvoering van de overeenkomst op te
          schorten zolang de omstandigheden voortduren, dan wel de overeenkomst
          door middel van schriftelijke mededeling aan de afnemers te
          beëindigen. Volgende omstandigheden worden beschouwd als geval van
          overmacht: staking, uitsluiting, opstootjes, revolutie, mobilisatie,
          oorlog, epidemieën, overheidsmaatregelen, transportmoeilijkheden,
          machinestoringen, brand, overstroming, in gebreke blijven van
          leveranciers of andere gelijksoortige of ongelijksoortige
          omstandigheden.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Kosten en risico</Heading>
        <Text as="p">Van zodra de goederen onze firma verlaten, is elk risico
          voor de klant, die tevens instaat voor alle kosten van verpakking,
          verzekering, transport en belastingen van welke aard ook.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Klachten</Heading>
        <Text as="p">Geen enkele klacht betreffende onze goederen, diensten of
          facturen is ontvankelijk, indien deze niet schriftelijk bij ter post
          aangetekende brief aan onze firma is gericht kan binnen de zeven
          kalenderdagen na de dag der levering of uitvoering, respectievelijk na
          de factuurdatum. Bovendien moet de klacht betreffende de aard,
          hoeveelheden, kwaliteiten en uiterlijke toestand van de goederen ons
          gericht worden op het ogenblik van de levering en ook uitdrukkelijk
          vermeld worden op het origineel van het vervoerdocument, leveringsbon
          en/of servicerapport in het bezit van ons of onze transporteur.
          Verborgen gebreken dienen onmiddellijk na ontdekking ervan gemeld te
          worden op de wijze zoals in dit artikel uiteengezet. Behoudens
          schriftelijk akkoord van onzentwege zal geen enkele terugzending
          rechtsgevolgen kunnen hebben; de loutere aanvaarding van teruggezonden
          goederen geschiedt steeds onder alle voorbehoud, en impliceert nooit
          ons akkoord met de terugzending. Het bestaan van klachten ontheft de
          klant niet van zijn verplichting onze facturen te betalen op hun
          vervaldag. Bij akkoord voor terugzending dienen de goederen binnen de
          8 kalenderdagen behoudens in het geval van beschadiging, in
          ongeschonden staat en in de originele onbeschadigde verpakking te
          worden teruggezonden.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Betaling</Heading>
        <Text as="p">Tenzij anders schriftelijk overeengekomen, zijn al onze
          facturen op hun datum betaalbaar door middel van overboeking ten
          gunste van een door de opdrachtnemer aan te wijzen bankrekening,
          waarbij als betaling slechts zal gelden de mededeling van de
          betreffende bankinstelling dat het factuurbedrag is bijgeschreven op
          de aangewezen rekening. Bij niet betaling van het gehele factuurbedrag
          op de vervaldag, zal van rechtswege en zonder voorafgaande
          ingebrekestelling, een intrest verschuldigd zijn van: in relatie B2B
          (business to business): intrestvoet conform de wet van 2 augustus 2002
          betreffende de betalingsachterstand bij handelstransacties.In relatie
          B2C (business to consumer) : intrestvoet van 12 % Bovendien zal bij
          niet tijdige betaling, automatisch zonder ingebrekestelling en van
          rechtswege de opdrachtgever een forfaitaire schadevergoeding
          verschuldigd zijn aan de opdrachtnemer ten belope van 10 % van de
          hoofdsom met een minimum van 75,00 euro.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Eigendomsvoorbehoud</Heading>
        <Text as="p">De opdrachtnemer is bevoegd om zaken van de opdrachtgever
          die hij onder zicht heeft, alsmede de zaken die door de opdrachtnemer
          zijn samengesteld of opgesteld in opdracht van de opdrachtgever niet
          aan de opdrachtgever of aan derden af te geven, totdat de
          opdrachtgever aan al zijn verplichtingen jegens de opdrachtnemer heeft
          voldaan. Het volledige eigendomsrecht op door de opdrachtnemer aan de
          opdrachtgever geleverde zaken blijft onvoorwaardelijk bij de
          opdrachtnemer, totdat de opdrachtgever aan al zijn verplichtingen
          jegens de opdrachtnemer die voortvloeien uit de opdracht, heeft
          voldaan. Tot dit ogenblik zal de opdrachtgever geen enkele daad van
          beschikking over genoemde zaken stellen.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Ontbinding</Heading>
        <Text as="p">Wanneer de klant nalaat één of meer verbintenissen uit te
          voeren, zullen wij het recht hebben om ofwel de gedwongen uitvoering
          te eisen met toepassing van huidige algemene voorwaarden, ofwel om de
          overeenkomst van rechtswege en zonder ingebrekestelling ontbonden te
          verklaren, onder meer per ter post aangetekende brief of telefax aan
          de klant. In dit laatste geval zal de klant gehouden zijn tot betaling
          van hetgeen reeds geleverd en uitgevoerd werd, en bovendien tot
          vergoeding van al onze schade, met een absoluut forfaitair minimum van
          30% van de overeengekomen prijs inclusief BTW, of minstens het
          maximale wettelijk toegelaten.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Solvabiliteit</Heading>
        <Text as="p">Wij zullen steeds het recht hebben om vóór een levering of
          werk voorschotten te vragen. Onverminderd ons het recht in voormeld
          artikel, zullen wij ook volledig waarborgen of zelfs volledige
          betaling kunnen eisen, indien het vertrouwen in de kredietwaardigheid
          van de klant geschokt wordt, zoals door de niet-tijdige betaling van
          een factuur, door zijn weigering een wisselbrief te accepteren of door
          een protest van een wisselbrief, door het vragen van termijnen, door
          het aanvragen van een gerechtelijk akkoord, door daden van
          gerechtelijke acties tegen de klant en/of door elke andere aanwijsbare
          gebeurtenis. In alle gevallen zullen wij tevens een retentierecht
          hebben op alle goederen die eigendom zijn van de klant, zulks tot onze
          algehele betaling.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Geen schuldvernieuwing</Heading>
        <Text as="p">De uitgifte van handelspapieren en/of van al dan niet
          geaccepteerde wisselbrieven voor gehele of gedeeltelijke betaling van
          facturen of om deze betaling te waarborgen, en/of het toestaan van
          betalingsmodaliteiten, zullen nooit een schuldvernieuwing en/of een
          afstand van huidige algemene voorwaarden met zich meebrengen. In alle
          gevallen zullen al onze algemene voorwaarden volledig van toepassing
          blijven.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Garantie</Heading>
        <Text as="p">Wij verlenen uitsluitend waarborg op door ons geleverde
          producten. Deze waarborg is in ieder geval beperkt tot de waarborg
          verleend door de fabrikant of leverancier. Bovendien is de waarborg
          beperkt tot gebreken die rechtstreeks te wijten zijn aan een ontwerp-,
          productie- of componentenfout, en tevens tot de terbeschikkingstelling
          van vervangingsgoederen of onderdelen, met uitsluiting van alle kosten
          van welk danige aard, zoals verplaatsingen, uurlonen, enz. De klant
          dient de goederen in onze werkplaats af te leveren en er weer op te
          halen, tenzij hij de verzending vraagt op zijn kosten en risico. In
          geval van export is de garantie steeds beperkt tot de verzending, op
          kosten en risico van de klant, van de vervangingsonderdelen voor de
          door de klant aan ons binnen de garantietermijn opgestuurde defecte
          onderdelen. Alle bijkomende kosten, zoals wettelijke heffingen op
          wisselstukken, invoerrechten, BTW en verzendingskosten zijn ten laste
          van de klant. Alle in garantie vervangen goederen of onderdelen worden
          steeds onze eigendom. Wij zullen de door ons verkochte goederen voor
          zover daarvoor geen hierna vermelde bijzondere regeling geldt,
          vervangen door goederen voor zover mogelijk van dezelfde soort, in
          gelijke hoeveelheden en / of formaten, indien de afnemer ons in staat
          gesteld heeft een deugdelijk onderzoek in te stellen en bij dat
          onderzoek gebleken is dat de goederen, binnen de geldende
          waarborgtermijn, niet hebben voldaan aan de eisen die redelijkerwijs
          gesteld mogen worden.
          Elke garantie aanspraak vervalt:<br/>
          <ul>
            <li>bij oneerkundig gebruik, misbruik of gebruik van een apparatuur
              die afwijkt van de voorschriften van het product;
            </li>
            <li>ingeval van gebrek aan toezicht of onderhoud, van vochtigheid,
              corrosie, bevuiling en andere externe oorzaken zoals blikseminslag
              of overspanning;
            </li>
            <li>ingeval van reparaties, wijziging, vervanging of toevoeging van
              onderdelen, of van andere ingrepen, zoals het openen van de
              apparatuur, die niet door ons personeel uitgevoerd zijn;
            </li>
            <li>ingeval van verkoop of verhuur van de apparatuur aan derden;
            </li>
            <li>ingeval van niet nakoming van betalingsverplichtingen tegenover
              ons. Ook zullen wij nooit gehouden zijn tot vergoeding van de
              enige indirecte schade, noch van schade in de exploitatie of van
              winstderving, en evenmin tot vergoeding van de schade of verliezen
              geleden door derden.
            </li>
          </ul>
        </Text>

        <Heading sx={{fontSize: 3}} as="h2">Werken</Heading>
        <Text as="p">Ook voor werken en herstellingen is onze garantie beperkt
          tot het vervangen of herstellen van de door haar uitgevoerde werken.
          Alle schade aan constructies, gebouwen en/of de inrichting valt nooit
          onder onze verantwoordelijkheid. Alle aanpassingen, vervangingen,
          herstellingen, uitbreidingen en/of andere werken die niet
          uitdrukkelijk opgesomd zijn in de overeenkomst, zijn nooit in onze
          prijzen inbegrepen. Indien zij aan ons worden opgedragen, zullen zij
          in regie aangerekend worden.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Auteursrechten</Heading>
        <Text as="p">De klant is gehouden tot een strikte naleving van de
          wetgeving betreffende de auteursrechten m.b.t. de door ons geleverde
          software en van alle voorwaarden van de fabrikant en/of leverancier
          ervan.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Oplevering</Heading>
        <Text as="p">Wij zullen ten allen tijde het recht hebben om voor iedere
          gehele of gedeeltelijke levering, prestatie en/of herstelling een
          bestelbon, leveringsbon of servicerapport te doen ondertekenen door de
          klant of diens aangestelde. De oplevering der werken wordt steeds
          geacht geschied te zijn bij de beëindiging der werken en in ieder
          geval bij een ingebruikname.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Aansprakelijkheid
          terreinen</Heading>
        <Text as="p">Het betreden van onze gebouwen en terreinen gebeurt op
          eigen risico. Bijgevolg kunnen wij ook niet aansprakelijk worden
          gesteld voor letsels of schade als gevolg van ongevallen die zich op
          onze terreinen of in onze gebouwen voordoen. Ook niet als die gevolgen
          pas later zichtbaar worden.</Text>

        <Heading sx={{fontSize: 3}} as="h2">Geschillen</Heading>
        <Text as="p">Op alle opdrachten en overeenkomsten en op daaruit
          voortvloeiende geschillen is uitsluitend het Belgisch recht van
          toepassing. Bevoegd tot het kennisnemen van geschillen zijn
          uitsluitend de rechtbanken en hoven van het arrondissement
          Oost-Vlaanderen, afdeling Dendermonde.</Text>

      </Box>
      <Disclaimer/>
    </main>;
  }
}
