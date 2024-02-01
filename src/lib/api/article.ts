import prisma from '@/lib/api/prisma';

const getArticleId = (id: number) => {
	return prisma.article.findUnique({
		where: {
			id
		},
		include: {
			children: {
				select: {
					children: true,
					image: true,
					title: true,
					parentID: true,
					author: true,
					createdAt: true,
					id: true
				}
			},
			content: true
		}
	});
};

const getLatest = () => {
	return prisma.article.findMany({
		take: 10,
		orderBy: {
			createdAt: 'desc'
		}
	});
};

const getRecommended = () => {
	return prisma.recommendedArticle.findMany({
		include: {
			article: true
		}
	});
};

const getCategories = () => {
	return prisma.article.findMany({
		where: {
			parentID: null
		},
		select: {
			title: true,
			id: true,
			children: {
				select: {
					title: true,
					id: true,
					children: {
						select: {
							title: true,
							id: true
						}
					}
				}
			}
		}
	});
};

const createArticle = () => {
	return prisma.article.create({
		data: {
			author: 'Stoian Anamaria',
			content: {
				create: {
					content: `  <p id="text_articol">
                <span style="display: inline-block; width: 3ch;">\t</span>Liviu Rebreanu, membru titular al Academiei
                Române, instituţie de rang înalt care se ocupă cu ştiinţa şi cultura română, a fost un romanicer,
                prozator
                şi dramaturg român, cunoscut ca întemeietor al romanului modern din literatura română, dar şi al celui
                psihologic.Nuvela „Hora morţii", apărută în 1921 la editura „Viaţa românească" în volumul „Catastrofa"
                alături de alte două nuvele şi anume „Iţic, ştrul, dezertor" şi „Catastrofa", este o operă dintr-o serie
                bazată pe tematica războiului care reflectă realitatea macabră a conflictelor armate.<br><br>
                <span style="display: inline-block; width: 3ch;">\t</span>Rebreanu reuşeşte să introducă în aceste
                nuvele elemente șocante din propria viaţă. Condamnarea fratelui său, Emil Rebreanu la moarte pentru
                tentativă de dezertare şi imaginea cutremurătoare a pădurii în care dezertorii cehi erau spânzuraţi
                devin subiecte în volumul „Catastrofa" şi ulterior scene cu încărcătură emoţională în romanul de analiză
                psihologică „Pădurea spânzuraţilor".<br><br>
                <span style="display: inline-block; width: 3ch;">\t</span>Creaţia începe cu imaginea demoralizantă a
                vagonului care îi duce pe soldaţi la război, motivul morţii fiind prezent încă din incipitul operei.
                Acţiunea nuvelei este construită în jurul celor doi protagonişti Haramu şi Boroiu. Neliniştea cauzată
                de frica morţii apare din primele rânduri ale operei „Am să mor în bătălie...Am să mor...Mor.", acestea
                sunt spusele lui Ion Haramu care copleşit de griji avea faţa gălbejită, „Mustăţile rari i s-au zbârlit
                speriate, ochii tulburi parcă opintesc mereu să iasă din orbite, nasul i s-a subţiat şi i s-a lungit,
                iar
                cutele în jurul gurii s-au adâncit şi s-au înmulţit". Pe de altă parte îl avem pe Boroiu care încercă să
                îl convingă pe Haramu că nu va muri, dar în acelaşi timp şi pe sine „Eu nu mor! murmură căprarul
                încruntat.
                N-am să mor!...De ce să mor?". Cei doi soldați sunt prinşi într-un triunghi amoros, astfel amândoi având
                ca interes romantic pe fata Paraschivei şi a lui Grigore Bulbuc, Ileana.<br><br>
                <span style="display: inline-block; width: 3ch;">\t</span>Cele două personaje se află în antiteză. Ion
                Haramu este un bărbat înstărit, însă laș și fricos, temându-se că va muri în război lăsându-și copiii și
                soția singuri pe lume, în timp ce Boroiu este un tânăr sărac dar plin de neînfricare, acesta neavând
                teamă
                nici măcar de moarte. Boroiu are grijă de Ion Haramu pe parcursul călătoriei întrucât înainte de a pleca
                la
                război îi promite fostei sale soții, Ileana că va avea grijă de tatăl copiilor ei. Războiul este
                prezentat
                ca un motiv prevestitor al morții, Haramu fiind conștient încă de la ordinul de prezență în armata țării
                că
                va muri pe front, repetând insistent și fără vlagă secvența „Am să mor”.br&gt;<br>
                <span style="display: inline-block; width: 3ch;">\t</span>Opera se termină tragic cu imaginea unei
                furtuni
                de gloanțe și cu asfințirea soarelui ce însângerează cerul și frontul de luptă. Privirea lui Boroiu se
                întunecă
                și cu mâna înțepenită pe armă și gura care i se umplea rapid de sânge se gândește cu speranță „Și Haramu
                poate
                că n-a murit...Poate...”.<br><br>
            </p>`
				}
			},
			image: 'https://literaria.info/img/articole/ana1.jpg',
			title: 'Hora Morții',
			parentID: 6
		}
	});
};

export {
	getArticleId,
	createArticle,
	getRecommended,
	getLatest,
	getCategories
};
