import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store.ts';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';
import articleCountFormatter from '../../../Formatters/articleCountFormatter.ts';

const html = `
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">Literatura veche a reprezentat piatra de temelie a literaturii române în forma actuală. Încă din acele timpuri, oamenii scriau texte, fie pentru că aveau ceva important de transmis, fie din dorința de a lăsa moștenire generațiilor următoare diverse
        părți ale istoriei ce vor ajunge să le fie utile.</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">Aceasta își are începuturile in prima jumătate a secolului al XVI-lea, mai exact la 1521, odată cu scrisoarea lui Neacșu de la Câmpulung adresată junelui de la Brașov, Hans Benkner, in care junele era anunțat de venirea otomanilor. Aceasta scrisoare
        a fost descoperită în Arhivele Brașovului 373 de ani mai târziu, de către Friedrich Wilhelm Stenner.</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">De la această scriere, literatura română veche a alternat prin texte ce aveau 2 tematici principale: religia și istoria.</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">Din punct de vedere religios, ar trebui amintite câteva opere de o foarte mare însemnătate istorică literara:</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;La 1547, Dimitrie Liubavici, împreună cu ucenicii Oprea și Petre, tipărește ,,Apostolul", având poruncă de la Iliașcu-voievod</span>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;Între 1559 și 1583, Diaconul Coresi publică 9 cărți în limba română: ,,Întrebare creștinească", ,,Evangheliarul", ,,Praxiul", ,,Cazania I", ,,Molitvenicul", ,,Psaltirea", ,,Cazania II", ,,Liturghierul", ,,Pravila Sfinților Apostoli", cărți de
        o valoare religioasă importantă, o parte fiind actuale și în ziua de azi, adaptate la limba literară curentă</span>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;La 1582 se publică ,,Palia de la Orăștie", o scriere ce cuprinde primele 2 cărți ale Vechiului Testament(Facerea și Exodul). In această scriere apare pentru prima dată cuvântul ,,român" in locul arhaicului ,,rumân".</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">Ca și literatură istorică, este necesar să fie menționate:</span>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;,,Letopisețul Tarii Moldovei, de când s-au descălecat țara și de cursul anilor și de viața domnilor careia scrie de la Dragoș vodă până la Aron vodă" scris între anii 1642-1647 de Grigore Ureche</span>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;,,Letopisețul Țării Moldovei de la Aron Vodă încoace" publicat de Miron Costin la 1675, fiind o continuare istorică a Letopisețulul lui Grigore Ureche</span>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;,,O samă de cuvinte. Letopisețul Tarii Moldovei, de la Dabija Voda până la a doua domnie a lui Constantin Voda Mavrocordat" publicat de Ion Neculce în 1733, fiind o continuare a Letopisețulul lui Miron Costin, evenimentele istorice fiind precedate
        de 42 de legende intitulate ,,O samă de cuvinte".</span>
</p>
<p>
    <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">&nbsp;Mai merită menționată și opera ,,Viiața lumii" a lui Miron Costin, publicată la 1672, fiind primul poem filozofic din literatura română.</span>
</p>
<p>
    <br>
</p>
<ul>
    <li>
        <span style="font-size: 16px; font-family: &quot;Hanken Grotesk&quot;, sans-serif; background-color: rgb(255, 255, 255);">Perioada literară veche a durat până la 1780, când a început perioada de tranziție spre literatura română modernă.</span>
    </li>
</ul>
<pre spellcheck="false">&lt;script&gt;
</pre>`;

const Description = () => {
	const { categoryID } = useParams();

	const directory = useAppSelector(selectDirectory(+categoryID!));

	return (
		<div style={{
			height: '200vh'
		}} className='landing section top-section'>
			<div className='thumbnail-side'>
				<h1 className='main-title'>{directory.name}</h1>
				<div className='description' dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(html)
				}}>

				</div>
			</div>
			<div className='navigation-side'>
				<SpotlightCard article={directory.articles![0]} />
				<NextSectionCard
					text={articleCountFormatter(directory.articles?.length ?? 0)}
					image={directory.articles![0]?.image}
				/>
			</div>
		</div>
	);
};

export default Description;
