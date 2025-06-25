const generalCards = [
    // Original cards translated to Czech
    {
        question: "Co by sis radši vybrala?",
        optionA: "🦋 Kouzelná motýlí křidélka",
        optionB: "👻 Neviditelnost na povel",
        resultA: "Jupí! Můžeš lítat jako víla, jen pozor na pavučiny! 🕸️",
        resultB: "Tichošlápek! Předběhneš každou frontu, ale občas zapomeneš, kam ses schovala. 🔍"
    },
    {
        question: "Co bys papala celý měsíc?",
        optionA: "🍕 Pizza každý den (s čímkoliv na ní)",
        optionB: "🍦 Hromadu zmrzliny všech chutí",
        resultA: "Pizza party nonstop! Kamarádky ti budou závidět, jen ta zelenina ti možná bude chybět. 🥬",
        resultB: "Zmrzlinové nebe! Ale připrav se na mrazivé mozkové bouře a hodně čištění zoubků! 🦷"
    },
    {
        question: "Kde by sis chtěla bydlet?",
        optionA: "🏰 Na kouzelném hradě v oblacích",
        optionB: "🌳 V super cool domku na stromě",
        resultA: "Královská paráda! Úžasný výhled, jen pizza delivery je fakt problém! 📦",
        resultB: "Přírodní ráj! Veverky jsou tvoji sousedé, ale WiFi signál je mizivý! 📶"
    },
    {
        question: "Jakou superschopnost bys chtěla?",
        optionA: "🗣️ Mluvit se všemi zvířátky",
        optionB: "🎨 Tvoje kresby ožijí",
        resultA: "Pejsci ti řeknou všechna svá tajemství! Kočky... no, ty jsou pořád nafoukaní. 🐦",
        resultB: "Úžasný výtvarný výtvor! Jen si dej pozor, abys nekreslila žádný monstrum! 👹"
    },
    {
        question: "Jakého mazlíčka bys chtěla?",
        optionA: "🐲 Malého přátelského draka",
        optionB: "🦄 Miniaturního jednorožce",
        resultA: "Tvůj drak ti opéká marshmallows! Ale pořád spouští požární hlásič! 🚨",
        resultB: "Duhová magie všude! Jen ti bude pořád sypat třpytky do batohu! ✨"
    },
    {
        question: "Jaké zaměstnání by bylo úžasné?",
        optionA: "🧙‍♀️ Profesionální čarodějka",
        optionB: "🍰 Majitelka cukrárny",
        resultA: "Abrakadbra! Domácí úkoly zmizí! Ale občas omylem proměníš ponožky v křečky! 🐹",
        resultB: "Nekonečný přístup k sladkostem! Děti se na tebe postaví fronta, ale musíš se rozdělit se zubařem! 🦷"
    },
    {
        question: "Jak bys chtěla cestovat?",
        optionA: "🌈 Klouzat po duhách",
        optionB: "☁️ Poskakovat po mračnech",
        resultA: "Barevné a rychlé! Ale vždycky dorazíš pokrytá duhovým prachem a totálně závratě! 🌀",
        resultB: "Měkké a pružné! Super na spaní, ale někdy poskočíš moc vysoko a vystrašíš letadla! ✈️"
    },
    {
        question: "Co bys chtěla najít na zahradě?",
        optionA: "🏴‍☠️ Pokladnici plnou hraček",
        optionB: "🌸 Zahradu, kde rostou bonbóny",
        resultA: "X označuje místo! Nejlepší hračky ever, ale teď všechny děti z okolí chtějí kopat ve vaší zahradě! ⛏️",
        resultB: "Sladká úroda! Gumový medvídci rostou na stromech, ale mravenci si myslí, že je to jejich osobní bufet! 🐜"
    },
    {
        question: "V čem bys byla nejlepší?",
        optionA: "🎪 Úžasné cirkusové kousky",
        optionB: "🎵 Hrát na jakýkoliv nástroj perfektně",
        resultA: "Jsi hvězda každého hřiště! Ale už neumíš chodit rovně! 🤸‍♀️",
        resultB: "Každá písnička zní úžasně! Ale nemůžeš přestat hrát hudbu, ani v době klidu! 🤫"
    },
    {
        question: "Co bys chtěla umět?",
        optionA: "🧠 Znát odpověď na každou otázku ve škole",
        optionB: "😂 Rozesmát každého svými vtipy",
        resultA: "Škola je super easy! Ale všichni chtějí opisovat domácí úkoly a učitelé si myslí, že podvádíš! 📚",
        resultB: "Jsi nejzábavnější člověk na světě! Ale nemůžeš přestat vtipkovat, ani v důležitých chvílích! 🤐"
    },
    {
        question: "Jak bys chtěla trávit víkendy?",
        optionA: "🏖️ Mít pláž na zahradě",
        optionB: "🎿 Mít sjezdovku na zahradě",
        resultA: "Surf kdy chceš! Ale písek je všude, dokonce i v müsli! 🥣",
        resultB: "Lyžování v pyžamu! Super cool, ale tučňáci, co se přistěhovali, ti pořád kradou rybí prsty! 🐧"
    },
    {
        question: "Co bys chtěla nosit?",
        optionA: "👑 Korunu, která plní přání",
        optionB: "👟 Boty, které tě nechají běžet super rychle",
        resultA: "Vaše královské výsosti! Každé přání se splní, ale musíš mluvit jako královna POŘÁD! 👸",
        resultB: "Zoom zoom! Jsi rychlejší než auta, ale nemůžeš zpomalit a pořád přeběhneš cíl! 🏃‍♀️"
    },
    {
        question: "Kdyby ses mohla stát na jeden den kýmkoli, kým bys byla?",
        optionA: "🎬 Slavnou herečkou",
        optionB: "🚀 Astronautkou",
        resultA: "Hvězda Hollywoodu! Všichni tě znají a milují, ale paparazzi tě pronásledují i na záchod! 📸",
        resultB: "Vesmírná průzkumnice! Nádherný výhled na Zemi, ale jídlo v tubičkách fakt nechutná! 🌍"
    },
    {
        question: "Jaké auto by bylo nejlepší?",
        optionA: "🚗 Auto, co jezdí na sladkosti",
        optionB: "🚙 Auto, co umí létat",
        resultA: "Sladká jízda! Nikdy nepotřebuješ benzínku, ale mravenci si udělali kolonie v motoru! 🍭",
        resultB: "Létající káravka! Žádné zácpy, ale řidičák na létání musíš dělat u orla! 🦅"
    },
    {
        question: "Jakou knihu bys si chtěla přečíst?",
        optionA: "📚 Knihu, která se čte sama nahlas",
        optionB: "📖 Knihu, do které se dá vstoupit",
        resultA: "Audiokniha deluxe! Úžasný hlas, ale někdy čte i v noci a neustně tě budí! 😴",
        resultB: "Literární dobrodružství! Žiješ v příběhu, ale občas se zasekneš v nudném odstavci o počasí! 🌧️"
    },
    {
        question: "Kterou superschopnost bys chtěla?",
        optionA: "🕰️ Zastavit čas",
        optionB: "🔄 Vrátit čas zpátky",
        resultA: "Vládkyně času! Máš na všechno spoustu času, ale občas zapomeneš čas znovu spustit! ⏰",
        resultB: "Časová cestovatelka! Můžeš opravit každou chybu, ale změníš náhodou historii! 📜"
    },
    {
        question: "Jaký dům by byl nejúžasnější?",
        optionA: "🏠 Dům z perníku",
        optionB: "🏰 Dům ve stromě",
        resultA: "Sladký domov! Vždycky máš co sníst, ale v létě se dům rozpouští a v zimě je tvrdý jak kámen! 🌡️",
        resultB: "Stromový palác! Úžasné výhledy, ale na podzim padají listy přímo do pokoje! 🍂"
    },
    {
        question: "Co by bylo nejlepší najít na půdě?",
        optionA: "🗝️ Klíč od tajné místnosti",
        optionB: "📦 Krabici plnou starých hraček",
        resultA: "Tajemná místnost! Plná pokladů, ale někdy se dveře zamknou zevnitř! 🚪",
        resultB: "Poklad z dětství! Úžasné retro hračky, ale baterie už dávno vytekly! 🔋"
    },
    {
        question: "Jaký telefon by byl nejlepší?",
        optionA: "📱 Telefon, který nikdy nevybije",
        optionB: "📞 Telefon, který volá do budoucnosti",
        resultA: "Věčná baterie! Nikdy se o ni nemusíš starat, ale všichni ti chtějí půjčit nabíječku! 🔌",
        resultB: "Futuristický telefon! Mluvíš se svým budoucím já, ale většinou si stěžuje na domácí úkoly! 📞"
    },
    {
        question: "Jaký dort by byl nejlepší na narozeniny?",
        optionA: "🎂 Dort, který se nikdy nedojedí",
        optionB: "🍰 Dort, který má každý kousek jinou chuť",
        resultA: "Nekonečný dort! Párty může trvat věčně, ale po týdnu už všichni křičí při pohledu na dort! 😵",
        resultB: "Překvapení dort! Každý kousek je dobrodružství, ale někdy narazíš na chuť brokolice! 🥦"
    },
    {
        question: "Jakého učitele bys chtěla mít?",
        optionA: "👩‍🏫 Učitelku, která nikdy nezadává domácí úkoly",
        optionB: "👨‍🏫 Učitele, který učí jen zajímavé věci",
        resultA: "Bezstarostná škola! Nikdy domácí úkoly, ale na střední tě nepřijmou, protože nic neumíš! 😅",
        resultB: "Super zábavná škola! Každý den něco cool, ale matiku se stejně musíš naučit někde jinde! 🔢"
    },
    {
        question: "Jaké oblečení by bylo nejpohodlnější?",
        optionA: "👔 Oblečení, které se nikdy nezašpiní",
        optionB: "👗 Oblečení, které se mění podle nálady",
        resultA: "Vždy čistá! Nikdy se nemusíš starat o skvrny, ale máma je bez práce a nudí se! 🧺",
        resultB: "Nálada outfit! Všichni vědí, jak se cítíš, ale ve škole to může být trapné! 😳"
    },
    {
        question: "Jaké zvíře bys chtěla jako nejlepšího kamaráda?",
        optionA: "🐧 Tučňáka, který umí tancovat",
        optionB: "🦒 Žirafu, která dosáhne všude",
        resultA: "Taneční parťák! Nejlepší na párty, ale potřebuje ledničku velkou jako pokoj! 🧊",
        resultB: "Vysoký pomocník! Dostaneš všechno z vysokých polic, ale neprochází dveřmi! 🚪"
    },
    {
        question: "Jaká by byla nejlepší snídaně?",
        optionA: "🥞 Palačinky, které se pekou samy",
        optionB: "🥣 Müsli, které zpívá písničky",
        resultA: "Automatické palačinky! Vždycky čerstvé, ale někdy se spletou a napečou příliš mnoho! 🥞",
        resultB: "Hudební snídaně! Veselé ráno, ale někdy zpívají příliš nahlas a budí celou rodinu! 🎵"
    },
    {
        question: "Jaký batoh by byl nejužitečnější?",
        optionA: "🎒 Batoh, který má uvnitř celý pokoj",
        optionB: "🌟 Batoh, který umí létat",
        resultA: "Nekonečný prostor! Můžeš si vzít všechno, ale pak hledáš věci celé hodiny! 🔍",
        resultB: "Létající batoh! Doprava zdarma, ale někdy tě vezme špatným směrem! 🧭"
    },
    {
        question: "Jakou hru bys chtěla vymyslet?",
        optionA: "🎮 Hru, kde vyhráváš vždycky",
        optionB: "🎲 Hru, která se nikdy neukončí",
        resultA: "Vždycky výhra! Super sebevědomí, ale přátelé s tebou nechtějí hrát! 😔",
        resultB: "Nekonečná hra! Nikdy se nenudíš, ale zapomínáš jíst a spát! 😴"
    },
    {
        question: "Jaké kino by bylo nejlepší?",
        optionA: "🍿 Kino s nekonečným popcornem",
        optionB: "🎬 Kino, kde můžeš ovlivňovat děj",
        resultA: "Popcornový ráj! Nikdy nedojde, ale pak už nemůžeš vidět popcorn! 🤢",
        resultB: "Interaktivní film! Ovlivňuješ příběh, ale ostatní diváci se na tebe zlobí! 😠"
    },
    {
        question: "Jaký park by byl nejzábavnější?",
        optionA: "🎢 Park s nekonečnými atrakcemi",
        optionB: "🎪 Park, kde jsou všechny atrakce zadarmo",
        resultA: "Nekonečná zábava! Vždycky něco nového, ale pak už nevíš, co zkusit dřív! 🤯",
        resultB: "Zadarmo zábava! Úžasné, ale fronty jsou tak dlouhé, že čekáš celý den! ⏳"
    },
    {
        question: "Jakou krabici bys chtěla najít?",
        optionA: "📦 Krabici, která plní přání",
        optionB: "🎁 Krabici s překvapeními",
        resultA: "Splněná přání! Všechno co chceš, ale někdy si přeješ něco hloupého! 🤦‍♀️",
        resultB: "Překvapení každý den! Vzrušující, ale někdy je tam něco, co nechceš! 😱"
    },
    {
        question: "Jakého robota bys chtěla?",
        optionA: "🤖 Robota, který dělá domácí práce",
        optionB: "🎭 Robota, který je tvůj dvojník",
        resultA: "Domácí pomocník! Nikdy neuklízíš, ale robot je pořád unavený a stěžuje si! 😩",
        resultB: "Dokonalý dvojník! Chodí za tebe do školy, ale někdy řekne něco, co bys nikdy neřekla! 🤐"
    },
    {
        question: "Jaká by byla nejlepší večeře?",
        optionA: "🍽️ Večeře, která se vaří sama",
        optionB: "🥗 Večeře, která je vždycky tvoje oblíbená",
        resultA: "Automatická kuchyně! Nikdy nevaříš, ale někdy se robot splete a uvaří mýdlo! 🧼",
        resultB: "Dokonalá večeře! Vždycky to co chceš, ale pak zapomeneš, jaká jiná jídla existují! 🤔"
    }
];

const minecraftCards = [
    {
        question: "Co by sis chtěla postavit v Minecraftu?",
        optionA: "🏰 Obrovský hrad z diamantů",
        optionB: "🌋 Tajnou základnu pod lávou",
        resultA: "Diamantový palác! Všichni tě obdivují, ale Creepři se pořád snaží tvůj hrad vyhodit do vzduchu! 💥",
        resultB: "Lávová tajná základna! Super cool, ale občas zapomeneš vypnout koordináty a spadneš do lávy! 🔥"
    },
    {
        question: "Jakého Minecraft mazlíčka bys chtěla?",
        optionA: "🐺 Smečku věrných vlků",
        optionB: "🐱 Desítku koček různých barev",
        resultA: "Vlčí armáda! Chrání tě před všemi monstry, ale pořád se perou o kosti a dělají strašný hluk! 🦴",
        resultB: "Kočičí gang! Odhánějí Creepry, ale obsadily ti celý dům a mňoukají celou noc! 😸"
    },
    {
        question: "Jakou Minecraft sílu bys chtěla mít?",
        optionA: "⛏️ Nekonečně rychlé těžení",
        optionB: "🏗️ Stavět bez materiálů",
        resultA: "Super rychlé těžení! Máš hory diamantů, ale vykopala jsi tak velké díry, že se v nich ztrácíš! 💎",
        resultB: "Nekonečné stavění! Můžeš postavit cokoliv, ale zapomínáš, kde končí tvoje stavby a kde začíná skutečný svět! 🧱"
    },
    {
        question: "Jaký Minecraft biom bys chtěla objevit?",
        optionA: "🌈 Duhový les s barevnými ovečkami",
        optionB: "🍭 Sladký biom z cukrovinek",
        resultA: "Duhová říše! Krásné barvy všude, ale ovečky se pořád mění na různé barvy a nikdy nevíš, jakou vlnu dostaneš! 🐑",
        resultB: "Cukrovinkový ráj! Všechno je sladké, ale mravenci z celého serveru se sjeli na hostinu! 🐜"
    },
    {
        question: "Kterého Minecraft bosse bys chtěla porazit?",
        optionA: "🐉 Enderdraka s přáteli",
        optionB: "💀 Withera sama",
        resultA: "Týmová práce! Společně jste nepřemožitelní, ale kdo dostane dračí vajíčko je věčný problém! 🥚",
        resultB: "Sólová hrdinka! Jsi legenda serveru, ale Wither ti zničil polovinu základny a teď máš jen trosky! 💣"
    },
    {
        question: "Jaký Minecraft mod bys chtěla mít?",
        optionA: "🚀 Vesmírný mod s raketami",
        optionB: "🧚‍♀️ Víla mod s kouzly",
        resultA: "Kosmická dobrodružství! Můžeš létat na Mars, ale občas se ztratíš v kosmu a nevíš cestu domů! 🌌",
        resultB: "Magické kouzla! Můžeš čarovat, ale někdy se zaklínadlo pokazí a proměníš sebe v žábu! 🐸"
    },
    {
        question: "Jaké Minecraft jídlo bys chtěla, aby nikdy nedošlo?",
        optionA: "🍰 Nekonečný dort",
        optionB: "🥖 Magický chléb",
        resultA: "Dortový ráj! Vždy máš sladké, ale zubaři tě znají jménem a čekají tě s výčitkami! 🦷",
        resultB: "Chlebová pohoda! Nikdy nehladovíš, ale po čase ti chutná všechno jako toast! 🍞"
    },
    {
        question: "Jakou Minecraft výzvu bys chtěla zvládnout?",
        optionA: "🌙 Přežít 100 nocí bez umření",
        optionB: "🏔️ Postavit nejvyšší horu na serveru",
        resultA: "Survival expert! Jsi neporazitelná, ale po tolika nocích už máš strach z vlastního stínu! 👻",
        resultB: "Stavební mistryně! Tvoje hora se vidí z celého serveru, ale trvalo ti to půl roku! ⛰️"
    },
    {
        question: "Jaký Minecraft transport bys chtěla?",
        optionA: "🐴 Létající koně",
        optionB: "🚂 Mega rychlé minecart dráhy",
        resultA: "Nebeský kůň! Úžasné výhledy, ale někdy zapomene, že umí létat a spadnete z nebe! 🌤️",
        resultB: "Kolejová síť! Super rychlé, ale občas se rozjedou tak rychle, že proletíš celou mapu! 🎢"
    },
    {
        question: "Jaké Minecraft kouzlo bys chtěla na nástroje?",
        optionA: "⚡ Nekonečná energie",
        optionB: "🔮 Automatické opravy",
        resultA: "Věčná výdrž! Nástroje se nikdy nepokazí, ale zapomeneš, jak se vyrábějí nové! 🔧",
        resultB: "Samooprávky! Vše se opraví samo, ale nástroje začnou žít vlastním životem a někdy utečou! 🏃‍♂️"
    },
    {
        question: "Jaký Minecraft server bys chtěla vlastnit?",
        optionA: "🎪 Zábavní park server",
        optionB: "🏫 Škola kouzel server",
        resultA: "Minecraft Disneyland! Všichni se baví, ale musíš vymýšlet nové atrakce každý den! 🎠",
        resultB: "Hogwarts server! Učíš kouzelné Minecraft kouzla, ale někteří hráči proměňují ovečky v draky! 🐉"
    },
    {
        question: "Jakou Minecraft postavu bys chtěla být?",
        optionA: "👑 Královna villagerů",
        optionB: "🦸‍♀️ Superhrdinka proti monster",
        resultA: "Velliger royalty! Všichni tě poslouchají, ale pořád jen říkají 'Hmm' a 'Hrrr'! 🤔",
        resultB: "Monster hunter! Zachraňuješ všechny, ale Endermani se na tebe zlobí, že jim bereš práci! 👀"
    },
    {
        question: "Kdybys mohla změnit jeden blok v Minecraftu, který by to byl?",
        optionA: "🧱 Udělat dirt cenný jak diamant",
        optionB: "💎 Aby diamanty rostly jak tráva",
        resultA: "Bohatství z hlíny! Najednou jsi nejbohatší, но všichni si myslí, že podvádíš! 💰",
        resultB: "Diamantová louka! Celý svět plný diamantů, ale pak už nejsou vzácné! 💸"
    },
    {
        question: "Co bys nejradši postavila na spawn pointu?",
        optionA: "🏪 Obrovský obchod se vším",
        optionB: "🎪 Zábavní park pro nováčky",
        resultA: "Minecraft mall! Všichni nakupují, ale ty musíš pořád doplňovat zásoby! 📦",
        resultB: "Vítací zábava! Noví hráči milují spawn, но veteráni si stěžují na hluk! 🎢"
    },
    {
        question: "Jakého moba bys chtěla ochočit?",
        optionA: "🐉 Enderdraka jako létající koně",
        optionB: "💀 Withera jako mazlíčka",
        resultA: "Dračí taxi! Nejrychlejší doprava, але občas ti spálí dům! 🔥",
        resultB: "Ničivý mazlíček! Super ochrankář, ale občas něco vyhodí! 💥"
    },
    {
        question: "Kam bys postavila svou hlavní základnu?",
        optionA: "🌊 Pod oceánem v podmořské pevnosti",
        optionB: "☁️ Na obláku vysoko v nebi",
        resultA: "Podmořský palác! Krásný výhled, ale drowned ti chodí на návštěvu! 🧜‍♀️",
        resultB: "Nebeská vila! Úžasná výška, ale zásobování je problém! 📦"
    },
    {
        question: "Jakou technologii bys vymyslela?",
        optionA: "📱 Minecraft mobil pro chat",
        optionB: "🚗 Minecraft auto",
        resultA: "Blocky phone! Můžeš psát všem, ale text vypadá jak pixely! 📱",
        resultB: "Kostičkové auto! Rychlá doprava, ale jezdí jen ровно! 🛤️"
    },
    {
        question: "Co bys nejradši farmila?",
        optionA: "🌽 Obří farmu jídla pro celý server",
        optionB: "🐄 Farmu všech zvířat",
        resultA: "Minecraft farmářka! Nikdo nehladoví, але musíš sklízet celé dny! 🌾",
        resultB: "Zvířecí království! Máš všechna zvířata, но hluk je nesnesitelný! 🐮"
    },
    {
        question: "Jaká výzva by byla nejzábavnější?",
        optionA: "🏃‍♀️ Vyběhnout svět bez brnění",
        optionB: "🏠 Postavit dům jen z jednoho bloku",
        resultA: "Nahý běžec! Vzrušující, але každý monster tě zabije! ⚡",
        resultB: "Minimalist stavba! Kreativní, ale dům vypadá nudně! 😴"
    },
    {
        question: "Co bys nejradši našla v dungeonu?",
        optionA: "👑 Korunu s admin právy",
        optionB: "📚 Knihu se všemi recepty",
        resultA: "Minecraft vládkyně! Můžeš všechno, ale hra tě pak nebaví! 😐",
        resultB: "Kuchařská bible! Znáš všechny recepty, но už žádná překvapení! 🤷‍♀️"
    },
    {
        question: "Jak bys nejradši získávala XP?",
        optionA: "📖 Čtením knih v knihovně",
        optionB: "🎵 Poslechem hudby z jukebox",
        resultA: "Minecraft knihomolka! Vzděláváš se ve hře, ale ostatní tě považují за nudu! 📚",
        resultB: "Hudební leveling! Zábavné, але písničky se opakují! 🎶"
    },
    {
        question: "Jaký event bys uspořádala?",
        optionA: "🏁 Závody s prasátky",
        optionB: "🎨 Soutěž ve stavění sněhuláků",
        resultA: "Prasečí grand prix! Všichni se baví, ale prasátka utečou! 🐷",
        resultB: "Sněhulák festival! Krásné výtvory, v létě se roztají! ☀️"
    },
    {
        question: "Jaký blok bys změnila?",
        optionA: "🧽 Aby houby vyrostly všude",
        optionB: "🔥 Aby oheň svítil barevně",
        resultA: "Houbový svět! Všude houby, svět jak pohádka! 🍄",
        resultB: "Duhové plameny! Krásné světlo, но bolí oči! 🌈"
    },
    {
        question: "Kde bys hledala poklady?",
        optionA: "🗺️ V opuštěných lodích",
        optionB: "⚱️ V pyramidách v poušti",
        resultA: "Námořní poklad! Dobrodružství на vodě, ale narazíš на drowned! 🧟‍♂️",
        resultB: "Faraonovo bohatství! Starověké poklady, а̄ле pastí víc než peněz! 🕳️"
    },
    {
        question: "Jakou hudbu bys chtěla slyšet?",
        optionA: "🎼 Remixovanou Sweden",
        optionB: "🥁 Novou battle music",
        resultA: "Nostalgický remix! Krásné vzpomínky, po tisící-krát nudí! 😩",
        resultB: "Epická hudba! Cítíš se jak воїн, ale jen těžíš! ⛏️"
    },
    {
        question: "Jak bys překonala lávové jezero?",
        optionA: "🧊 Zmrazit ho vodou",
        optionB: "🌉 Postavit mega most",
        resultA: "Ledová cesta! Rychlé a cool, obsidian neproudí! 🌋",
        resultB: "Inženýrské dílo! Impozantní, но trvá to věčnost! ⏰"
    },
    {
        question: "Co bys automatizovala?",
        optionA: "🥖 Pečení chleba",
        optionB: "⚔️ Boj proti mobům",
        resultA: "Auto pekárna! Nikdy nehladovíš, nevíš jak vařit! 🍞",
        resultB: "Robot armáda! Mob farming deluxe, přijdeš о zábavu! 🤖"
    },
    {
        question: "Jaké enchantment bys vymyslela?",
        optionA: "✨ Magický úklid inventory",
        optionB: "🎭 Převlečení za jiného hráče",
        resultA: "Pořádek enchant! Vždycky uklizeno, ale ztratíš věci! 🗂️",
        resultB: "Kamufláž! Dokonalé maskování, zapomeneš kdo jsi! 🎭"
    },
    {
        question: "Jaký Minecraft youtuber bys byla?",
        optionA: "🎬 Stavařka mega projektů",
        optionB: "🎮 Speedrunnerka",
        resultA: "Stavební královna! Úžasné projekty, trvají měsíce! 🏗️",
        resultB: "Rychlostní legenda! Rekord за rekordem, nemáš čas si užít! ⚡"
    },
    {
        question: "Co bys udělala s nekonečným TNT?",
        optionA: "🎆 Největší ohňostroj v historii",
        optionB: "⛰️ Vyhloubit celou horu",
        resultA: "Explosive show! Úžasné efekty, server тебе banuje! 💥",
        resultB: "Ničivá těžba! Máš všechno, krajina jak měsíc! 🌙"
    },
    {
        question: "Jaká by byla tvoje signature stavba?",
        optionA: "🏰 Hrad měnící se podle počasí",
        optionB: "🎡 Funpark s funkčními atrakcemi",
        resultA: "Dynamický hrad! Vždycky jiný, механизmus se показuje! ⚙️",
        resultB: "Minecraft Disneyland! Všichni se baví, obsluha složitá! 🎢"
    }
];

const harryPotterCards = [
    {
        question: "Do kterého bradavického koleji bys chtěla?",
        optionA: "🦁 Nebelvír s odvážnými",
        optionB: "🐍 Zmijozel s mazanými",
        resultA: "Nebelvírská lvice! Jsi statečná a všichni tě obdivují, ale pořád se dostáváš do problémů! ⚔️",
        resultB: "Zmijozelo mazanost! Jsi chytrá a strategická, ale všichni si myslí, že plánuješ něco zlého! 🐍"
    },
    {
        question: "Jaké kouzlo bys chtěla umět nejlépe?",
        optionA: "✨ Wingardium Leviosa",
        optionB: "🔥 Expelliarmus",
        resultA: "Levitační mistryně! Můžeš létat s čímkoliv, ale občas ti uletí talíř s večeří ke stropu! 🍽️",
        resultB: "Odzbrojovací expert! Nikdo na tebe nevytáhne hůlku, ale někdy odzbrojíš lidi i s vidličkou! 🍴"
    },
    {
        question: "Jakého magického tvora bys chtěla jako mazlíčka?",
        optionA: "🦉 Sovu pro doručování pošty",
        optionB: "🐱 Kouzelnou kočku",
        resultA: "Sova pošťačka! Nejrychlejší pošta na světě, ale občas ti donese dopisy určené pro někoho jiného! 📮",
        resultB: "Magická kočka! Umí kouzlit, ale je to pořád kočka, takže tě ignoruje a dělá si co chce! 😼"
    },
    {
        question: "Jaký magický předmět bys chtěla vlastnit?",
        optionA: "🧙‍♀️ Neviditelný plášť",
        optionB: "🪄 Nejsilnější kouzelnou hůlku",
        resultA: "Neviditelnost on demand! Můžeš se schovat kdykoli, ale občas zapomeneš, že jsi neviditelná a strašíš lidi! 👻",
        resultB: "Mega mocná hůlka! Nejsilnější čarodějka ever, ale hůlka má vlastní hlavu a někdy nekouzelí co chceš! ⚡"
    },
    {
        question: "Jaký kouzelný sport bys chtěla hrát?",
        optionA: "🧹 Famfrpál na koštěti",
        optionB: "🎯 Kouzelné šipky",
        resultA: "Famfrpál hvězda! Létat a hrát je úžasné, ale bludgery se pořád snaží tě srazit z koštěte! 💥",
        resultB: "Magické šipky šampionka! Vždy trefíš terč, ale šipky létají samy a někdy trefí špatný cíl! 🎪"
    },
    {
        question: "Jakou kouzelnou schopnost bys chtěla?",
        optionA: "🔮 Vidět do budoucnosti",
        optionB: "📖 Číst myšlenky",
        resultA: "Věštkyně! Víš, co se stane, ale někdy vidíš věci, které nechceš vědět, jako zítrašní zkouška! 😱",
        resultB: "Telepat! Slyšíš myšlenky všech, ale zjistíš, že většina lidí myslí na jídlo a blbosti! 🤯"
    },
    {
        question: "Kde bys chtěla studovat kouzelnictví?",
        optionA: "🏰 Bradavice v Anglii",
        optionB: "🗼 Beauxbatons ve Francii",
        resultA: "Bradavice legend! Nejslavnější škola kouzel, ale pořád se něco děje a školní rok se často ruší! 📚",
        resultB: "Francouzská elegance! Krásná škola a skvělé jídlo, ale všechno musíš dělat s grácií! 💃"
    },
    {
        question: "Jaký kouzelný nápoj bys chtěla uvařit?",
        optionA: "🧪 Mnohotvárný lektvar",
        optionB: "❤️ Lektvar lásky",
        resultA: "Metamorfosa expertka! Můžeš vypadat jako kdokoli, ale někdy zapomeneš, jak vypadáš doopravdy! 🪞",
        resultB: "Láska v láhvi! Všichni tě milují, ale není to opravdová láska a když lektvar přestane účinkovat, je to trapné! 💔"
    },
    {
        question: "Jakého kouzelného učitele bys chtěla mít?",
        optionA: "🧙‍♂️ Albus Brumbál",
        optionB: "🦅 Profesorka McGonagallová",
        resultA: "Brumbálova moudrost! Naučíš se všechno o kouzlech, ale mluví v hádankách a nikdy nechápeš pointu! 🤔",
        resultB: "McGonagall přísnost! Budeš úžasná v proměnách, ale pokud uděláš chybu, budeš mít takový pohled, že se propadneš zemí! 😤"
    },
    {
        question: "Jaké kouzelné místo bys chtěla navštívit?",
        optionA: "🛍️ Diagon Alley pro nákupy",
        optionB: "🌲 Zakázaný les pro dobrodružství",
        resultA: "Nákupní ráj! Všechny kouzelné věci na jednom místě, ale utratíš všechny galleony za sladkosti! 🍭",
        resultB: "Zakázané dobrodružství! Potkáš úžasné bytosti, ale některé z nich tě chtějí sežrat! 🕷️"
    },
    {
        question: "Jakou kouzelnou knihu bys chtěla číst?",
        optionA: "📚 Dějiny Bradavic",
        optionB: "🐉 Fantastická zvířata",
        resultA: "Historická expertka! Znáš všechny tajnosti školy, ale kniha je tak tlustá, že ti padá na nohy! 📖",
        resultB: "Magizoložka! Víš všechno o kouzelných tvorech, ale někteří z nich vyskočí z knihy a pobíhají po pokoji! 🦄"
    },
    {
        question: "Jaký kouzelný transport bys chtěla používat?",
        optionA: "🚗 Létající auto",
        optionB: "🔥 Floo Network",
        resultA: "Nebeské auto! Můžeš létat kamkoli, ale občas se pokazí motor a spadneš na vrbu mlátičku! 🌳",
        resultB: "Krb teleport! Instantní cestování, ale vždycky dorazíš pokrytá sazemi a kašleš zelený prach! 💚"
    },
    {
        question: "Kdybys byla na Bradavicích jen jeden den, co bys dělala?",
        optionA: "🎓 Zkusila všechny předměty",
        optionB: "🗺️ Prozkoumala všechny tajné chodby",
        resultA: "Školní maratón! Za den ses naučila kouzlit, ale hlava ti praskne z toho množství informací! 🤯",
        resultB: "Tajná expedice! Našla jsi spoustu skrytých míst, ale ztratila ses a museli tě hledat! 🔍"
    },
    {
        question: "Jaký předmět by ses chtěla naučit úplně nejlíp?",
        optionA: "🧪 Lektvarovarství s profesorem Snapem",
        optionB: "🌿 Herbologii s profesorkou Prýtovou",
        resultA: "Lektvarová expertka! Umíš uvařit všechno, ale Snape na tebe pořád frčí! 😤",
        resultB: "Botanická čarodějka! Rostliny tě milují, ale občas tě pokousají! 🌱"
    },
    {
        question: "Kde bys nejradši bydlela?",
        optionA: "🏰 V některé z věží Bradavic",
        optionB: "🏡 V chaloupce v Prasinkách",
        resultA: "Věžová princezna! Úžasný výhled, ale schody nahoru tě zabijou! 🪜",
        resultB: "Vesničanka! Klidný život, ale občas se objeví nějaký černokněžník! 🧙‍♂️"
    },
    {
        question: "Co bys nejradši koupila v Příčné ulici?",
        optionA: "🍭 Všechny sladkosti od Zonka",
        optionB: "📚 Všechny knihy z Rozkvětu a Skvrn",
        resultA: "Sladký ráj! Máš nejlepší cukrovinky, ale zuby ti odpadají! 🦷",
        resultB: "Knihomolka! Víš všechno o kouzlech, ale taška váží jak kámen! 📖"
    },
    {
        question: "Jakého kouzelného tvora bys chtěla vidět?",
        optionA: "🦄 Jednorožce v Zakázaném lese",
        optionB: "🐲 Draka zblízka",
        resultA: "Jednorožčí setkání! Nádherné a čisté, ale jen ty ho vidíš a nikdo ti nevěří! ✨",
        resultB: "Dračí dobrodružství! Impozantní bestie, ale málem tě smaží! 🔥"
    },
    {
        question: "Jakou roli bys chtěla mít ve famfrpálu?",
        optionA: "🥅 Brankářka chytající zlatonku",
        optionB: "🏏 Palkařka mlátící bludgery",
        resultA: "Zlatonková hvězda! Rozhoduješ zápasy, ale tlak je obrovský! 😰",
        resultB: "Bludgerová bojovnice! Silná a fearless, ale občas někoho omylem praštíš! 💥"
    },
    {
        question: "Co bys dělala o prázdninách?",
        optionA: "🏖️ Jela na čarodějnické prázdniny",
        optionB: "🏠 Zůstala doma a cvičila kouzla",
        resultA: "Magické léto! Úžasné zážitky s čarodějnými rodinami, ale pak jsi na normální svět nepřipravená! 🌍",
        resultB: "Domácí čarodějka! Perfektně připravená na školu, ale kamarádi tě zapomnou! 😢"
    },
    {
        question: "Jakou věc bys chtěla mít zase úplně novou?",
        optionA: "🪄 Hůlku přímo od Olivandera",
        optionB: "🧙‍♀️ Klobouk přímo z Madam Malkin",
        resultA: "Nová hůlka! Perfektně ti sedí, ale musíš si na ni zvyknout! ⚡",
        resultB: "Nový outfit! Vypadáš jak z časopisu, ale stojí to majlant! 💰"
    },
    {
        question: "Kam bys šla na první rande?",
        optionA: "☕ Do Tří košťat na máslové pivo",
        optionB: "🎭 Na představení do čarodějného divadla",
        resultA: "Klasické rande! Romantické a tradiční, ale všichni z školy vás tam vidí! 👀",
        resultB: "Kulturní večer! Elegantní a zajímavé, ale představení trvá 4 hodiny! ⏰"
    },
    {
        question: "Jaký by byl tvůj nejoblíbenější kouzelný sladký?",
        optionA: "🍫 Čokoládové žáby",
        optionB: "🍬 Bertieho fazole",
        resultA: "Skokanské čokolády! Sbíráš kartičky, ale žáby ti utíkají! 🐸",
        resultB: "Překvapení fazole! Vzrušující ruleta, ale někdy narazíš na zvratky! 🤢"
    },
    {
        question: "Co bys dělala, kdyby ses dostala do časové pasti?",
        optionA: "⏰ Opravila všechny svoje chyby",
        optionB: "🎭 Žila několik životů najednou",
        resultA: "Perfektní život! Všechno je správně, ale už nevíš, co je realita! 🌀",
        resultB: "Mnohonásobný život! Spoustu zkušeností, ale pletou se ti vzpomínky! 🧠"
    },
    {
        question: "Jakého temného kouzelníka bys nejtěžsí porazila?",
        optionA: "🐍 Voldemorta silou lásky",
        optionB: "💀 Bellatrix chytrostí",
        resultA: "Láska vítězí! Nejsilnější magie, ale musíš obětovat hodně! ❤️",
        resultB: "Mozková hra! Přelstíš šílenku, ale skoro se z toho zblázníš! 🧩"
    },
    {
        question: "Jaký kouzelný lektvar bys chtěla umět uvařit?",
        optionA: "💕 Amortentia - lektvar lásky",
        optionB: "🍀 Felix Felicis - tekuté štěstí",
        resultA: "Láska v lahvičce! Romantic, ale není to pravá láska! 💔",
        resultB: "Tekuté štěstí! Všechno se daří, ale pak je život nudný! 😐"
    },
    {
        question: "Co bys dělala s mapou Pobertů?",
        optionA: "🕵️ Špehovala všechny učitele",
        optionB: "🏃‍♀️ Plánovala dokonalé útěky",
        resultA: "Špionážní mise! Víš všechna tajemství, ale někdy vidíš věci, které nechceš! 🙈",
        resultB: "Útěková mistryně! Nikdy tě nechytí, ale pořád se schovávăš! 🏃‍♀️"
    },
    {
        question: "Kterou část Bradavic bys nejradši obnovila?",
        optionA: "🏰 Věž Nebelvíru",
        optionB: "🌿 Skleníky pro herbologii",
        resultA: "Nebelvírská rekonstrukce! Máš nejhezčí věž, ale ostatní koleje ti závidí! 😒",
        resultB: "Botanické centrum! Krásné rostliny, ale občas se nějaká rostlina vzepře! 🌵"
    },
    {
        question: "Jakou práci bys chtěla mít po škole?",
        optionA: "⚗️ Aurорка chytající černokněžníky",
        optionB: "🐲 Dračí specialistka",
        resultA: "Čarodějná policie! Zachraňuješ svět, ale pořád jsi v nebezpečí! ⚔️",
        resultB: "Dračí whisperka! Úžasná zvířata, ale insurance je hrozně drahé! 💸"
    },
    {
        question: "Co bys udělala s neviditelným pláštěm?",
        optionA: "🎭 Objevovala školní tajemství",
        optionB: "🍰 Kradla jídlo z kuchyní",
        resultA: "Tajemná detektivka! Odhaluješ všechno, ale někdy narazíš na něco scary! 👻",
        resultB: "Neviditelná zlodějka! Nikdy nehladovíš, ale trochu přibereš! 🍖"
    },
    {
        question: "Jaký předmět bys chtěla vyučovat?",
        optionA: "🔮 Věšteckařství",
        optionB: "⚡ Obranu proti černé magii",
        resultA: "Věštecká profesorka! Předpovídáš budoucnost, ale nikdo ti nevěří! 🔮",
        resultB: "OOČM učitelka! Připravuješ další generaci, ale každý rok střídáš! 🎯"
    },
    {
        question: "Jakého děkana bys chtěla mít?",
        optionA: "🦅 Profesorku McGonagallovou",
        optionB: "🐍 Profesora Snapea",
        resultA: "McGonagall mama! Přísná ale spravedlivá, občas tě promění v kočku! 🐱",
        resultB: "Snape tátinka! Náročný ale chytrý, ale jeho sarkasmus tě zničí! 😵"
    }
];

const tocaWorldCards = [
    {
        question: "Jaké Toca Boca místo bys chtěla navštívit?",
        optionA: "🏠 Toca Life World dům",
        optionB: "🏫 Toca School",
        resultA: "Domácí pohoda! Můžeš dělat co chceš, ale občas se ztratíš v tolika pokojích! 🛏️",
        resultB: "Školní zábava! Učení je super cool, ale někteří spolužáci pořád dělají neplechu! 📝"
    },
    {
        question: "Jakou Toca Boca postavu bys chtěla být?",
        optionA: "👩‍🍳 Šéfkuchařka v restauraci",
        optionB: "👩‍⚕️ Doktorka v nemocnici",
        resultA: "Kuchařská hvězda! Vaříš nejlepší jídla, ale někdy se ti úplně popálí a hosté utíkají! 🔥",
        resultB: "Lékařská expertka! Zachraňuješ všechny, ale někteří pacienti jsou hypochondři a přijdou kvůli každé škrábance! 🩹"
    },
    {
        question: "Jaké Toca zvířátko bys chtěla mít?",
        optionA: "🐱 Roztomilou kočičku",
        optionB: "🐶 Hravého pejska",
        resultA: "Kočičí kamarádka! Je roztomilá a nezávislá, ale někdy zmizí na celý den a pak se objeví v ledničce! 😹",
        resultB: "Psí parťák! Vždy věrný a hravý, ale rozžvýká ti všechno oblečení a boty! 👟"
    },
    {
        question: "Jakou Toca Boca aktivitu bys chtěla dělat?",
        optionA: "🎨 Malování v art studiu",
        optionB: "🍳 Vaření v kuchyni",
        resultA: "Umělecká duše! Tvoříš krásné obrazy, ale vždycky se umazáš barvami od hlavy k patě! 🎭",
        resultB: "Kuchyňská čarodějka! Vaříš úžasné jídla, ale někdy se ti splete sůl s cukrem! 🧂"
    },
    {
        question: "Kde bys chtěla pracovat v Toca světě?",
        optionA: "🏪 V obchodě s hračkami",
        optionB: "💇‍♀️ V kadeřnictví",
        resultA: "Hračková královna! Obklopena nejlepšími hračkami, ale zákazníci ti všechno rozházejí! 🧸",
        resultB: "Kadeřnický styling! Děláš úžasné účesy, ale někdy se ti povede trochu moc kreativní střih! ✂️"
    },
    {
        question: "Jaký Toca Boca výlet bys chtěla podniknout?",
        optionA: "🏖️ Na pláž",
        optionB: "🏕️ Do kempu",
        resultA: "Plážová pohoda! Slunce, písek a vlny, ale občas tě píchne medúza nebo krab! 🦀",
        resultB: "Kempování pro pokročilé! Krásná příroda a táborák, ale v noci slyšíš divné zvuky z lesů! 🐺"
    },
    {
        question: "Jaké Toca Boca jídlo bys chtěla ochutnat?",
        optionA: "🍰 Obří duhový dort",
        optionB: "🍕 Pizza s čímkoliv",
        resultA: "Dortový ráj! Nejsladší věc na světě, ale po snězení máš takovou cukrovou horečku, že poskakuješ! 🌈",
        resultB: "Pizza extravaganza! Jakákoliv chuť, ale někdy si dáš moc divnou kombinaci a pak litujž! 🤢"
    },
    {
        question: "Jaký Toca Boca pokojík bys chtěla mít?",
        optionA: "🌟 Pokojík princezny",
        optionB: "🚀 Vesmírný pokojík",
        resultA: "Královská nádhera! Všechno růžové a třpytivé, ale občas se ztratíš v tolika saténových polštářích! 👑",
        resultB: "Galaktická základna! Super cool vesmírné věci, ale někdy se ti spustí raketa a proletíš stropem! 🌌"
    },
    {
        question: "Jakou Toca Boca párty bys chtěla uspořádat?",
        optionA: "🎂 Narozeninovou oslavu",
        optionB: "🕺 Taneční večírek",
        resultA: "Mega narozeniny! Všichni přátelé, dárky a dort, ale někdo vždycky převrátí nápoje! 🎁",
        resultB: "Dance floor fire! Všichni tančí jako šílení, ale někdo vždycky šlápne na nohy! 💃"
    },
    {
        question: "Jaký Toca Boca obchod bys chtěla vlastnit?",
        optionA: "🍬 Obchod se sladkostmi",
        optionB: "👗 Obchod s oblečením",
        resultA: "Sladký biznis! Děti milují tvój obchod, ale ty sama nemůžeš přestat ochutnávat! 🍭",
        resultB: "Fashion guru! Všichni chtějí tvoje oblečení, ale někdy se pleteš a prodáš kostým místo šatů! 👘"
    },
    {
        question: "Jaký Toca Boca dopravní prostředek bys chtěla?",
        optionA: "🚗 Roztomilé auto",
        optionB: "🚁 Malý vrtulník",
        resultA: "Auto snů! Pojedeš všude stylově, ale občas zaparkuješ v kašně! 🌊",
        resultB: "Helicopter ride! Můžeš létat nad městem, ale občas přistaneš na špatné střeše! 🏠"
    },
    {
        question: "Jakou Toca Boca sezonu bys chtěla zažít?",
        optionA: "❄️ Sněhovou zimu",
        optionB: "🌻 Slunečné léto",
        resultA: "Zimní pohádka! Sníh, sněhuláci a lyže, ale pořád máš studené nosy a prsty! ☃️",
        resultB: "Letní vibes! Pláže, zmrzlina a volno, ale některý dny jsou tak horké, že se roztekáš! 🌡️"
    },
    {
        question: "Kde bys nejradši slavila narozeniny?",
        optionA: "🎂 Doma s celou rodinou",
        optionB: "🎪 V zábavním parku s přáteli",
        resultA: "Rodinná oslava! Všichni tě milují a je to útulné, ale někdo vždycky zapomene dárek! 🎁",
        resultB: "Zábavní narozeniny! Super atrakce a zábava, но pan je tak drahá! 💸"
    },
    {
        question: "Jaký pokoj bys si nejradši zařídila?",
        optionA: "👑 Princeznovský pokoj plný růžové",
        optionB: "🌈 Duhový pokoj s barvami",
        resultA: "Růžový ráj! Cítíš se jako princezna, ale návštěvy potřebují sluneční brýle! 😎",
        resultB: "Barevná exploze! Každý den jiná nálada, ale máma má migrénu! 🤯"
    },
    {
        question: "Co bys nejradši dělala ve volném čase?",
        optionA: "🎨 Tvořila a malovala obrázky",
        optionB: "🎵 Zpívala a tančila",
        resultA: "Umělecká duše! Tvoříš krásné věci, ale pak máš barvy úplně všude! 🎭",
        resultB: "Hudební hvězda! Všichni tě obdivují, ale sousedi si stěžují na hluk! 🔊"
    },
    {
        question: "Jakého domácího mazlíčka bys si přála?",
        optionA: "🐹 Roztomilého křečka",
        optionB: "🐰 Plyšového králíčka",
        resultA: "Křečkový kámoš! Malý a roztomilý, ale v noci běhá v kolečku a buzí tě! 🏃‍♂️",
        resultB: "Králičí parťák! Nadýchaný a mazlivý, ale žere všechnu mrkev v lednici! 🥕"
    },
    {
        question: "Jakou hru bys nejradši hrála s kamarádkami?",
        optionA: "🏠 Přehrávání rodinného života",
        optionB: "🎭 Divadlo a představování",
        resultA: "Family roleplay! Všichni mají svoje role, někdo ale chce být pořád maminka! 👩",
        resultB: "Theatrical show! Nádherné představení, ale někdo má trému! 😰"
    },
    {
        question: "Kde bys nejradši trávila víkendy?",
        optionA: "🏖️ Na pláži stavění hradů z písku",
        optionB: "🌲 V lese hledání pokladů",
        resultA: "Plážová architektka! Stavíš úžasné hrady, ale vlny je smýkají! 🌊",
        resultB: "Lesní průzkumnice! Najdeš zajímavé věci, ale občas se ztratíš! 🗺️"
    },
    {
        question: "Jakou práci by ses chtěla naučit?",
        optionA: "👩‍⚕️ Být doktorkou a léčit lidi",
        optionB: "👩‍🍳 Být kuchařkou a vařit",
        resultA: "Dětská doktorka! Zachraňuješ všechny, ale někteří pacienti se bojí injekce! 💉",
        resultB: "Mini šéfkuchařka! Vaříš úžasná jídla, ale občas přepálíš! 🔥"
    },
    {
        question: "Co bys nejradši dostala k Vánocům?",
        optionA: "🧸 Nového velkého plyšáka",
        optionB: "🚲 Nové kolo či koloběžku",
        resultA: "Plyšákový přítel! Máš super kámoša na mazlení, ale už se nevejde do postele! 🛏️",
        resultB: "Rychlá kola! Jedeš všude stylovë, ale máma se bojí, že spadneš! 😨"
    },
    {
        question: "Jakou outfitku bys nejradši nosila?",
        optionA: "👗 Třpytivé šaty na každý den",
        optionB: "👕 Pohodlné tepláky a tričko",
        resultA: "Třpytivá princezna! Vypadáš úžasně, но všichni se na tebe dívají! ✨",
        resultB: "Comfortable style! Pohoda a pohodlí, ale nekdy vypadáš jak z pyžama! 😴"
    },
    {
        question: "Jakým dopravem bys nejradši jezdila do školy?",
        optionA: "🚌 Školním autobusem s přáteli",
        optionB: "🚗 Autem s rodiči",
        resultA: "Školní autobus party! Zábava s přáteli each day, но je to hlučné! 📢",
        resultB: "VIP doprava! Pohodlí a klid, někdy zapomeneš na domácí úkoly v autě! 📚"
    },
    {
        question: "Co bys nejradši jedla k snídani?",
        optionA: "🥞 Palačinky s ovocem",
        optionB: "🍞 Toast s džemem",
        resultA: "Palačinkové ráno! Sladké a výživné, но trvá to dlouho připravit! ⏰",
        resultB: "Toastová rychlost! Rychlé a dobré, але někdy se toast připálí! 🔥"
    },
    {
        question: "Jaký film bys nejradši sledovala?",
        optionA: "🎬 Rodinnou komedii",
        optionB: "🦄 Pohádku о princezné",
        resultA: "Comedy time! Všichni se smějí a baví, но někteří vtipy nechápeš! 😅",
        resultB: "Fairy tale magic! Krásný příběh a zázraky, aлe někdy je to moc predictable! 👸"
    },
    {
        question: "Jakou hračku bys si nejradší vzala на výlet?",
        optionA: "🧸 Oblíbeného plyšáka",
        optionB: "📖 Knihu s obrázky",
        resultA: "Plyšákový společník! Nikdy nejsi sama, но můžeš ho ztratit! 😢",
        resultB: "Čítací zábava! Nikdy se nenudíš, ale někdy je tma na čtení! 🌙"
    },
    {
        question: "Kde bys nejradši pořádala piknik?",
        optionA: "🌳 V parku pod velkým stromem",
        optionB: "🏖️ Na pláži u moře",
        resultA: "Parkový piknik! Stín a klid, ale občas spadne něco ze stromu! 🍃",
        resultB: "Plážový feast! Krásný výhled, но písek se dostává do jídla! 🏖️"
    },
    {
        question: "Jaký druh zábavy bys nejradši měla doma?",
        optionA: "🎮 Počítačové hry",
        optionB: "🧩 Puzzle a hlavolamy",
        resultA: "Gaming time! Super grafika a zábava, але oči tě bolí! 👀",
        resultB: "Puzzle mistryně! Trénuješ mozek, ale některé puzzle jsou mega těžké! 🧠"
    },
    {
        question: "Co bys nejradši dělala в дождливý день?",
        optionA: "📚 Čtení књиг v posteli",
        optionB: "🏠 Stavění fortů z polštářů",
        resultA: "Bookworm day! Úžasné příběhy a dobrodružství, ale občas usneš s knihou! 😴",
        resultB: "Fort builder! Kreativní stavění, ale pak musíš uklidit! 🧹"
    },
    {
        question: "Jakou barvu bys nejradši měla všude?",
        optionA: "💖 Růžovou jako princezny",
        optionB: "💜 Fialovou jako jednorožci",
        resultA: "Pink princess world! Všechno je cute, ale некоторые lidi říkají, že je to moc! 🎀",
        resultB: "Purple unicorn life! Magické а mystické, ale občas to vypadá spooky! 🔮"
    },
    {
        question: "Jakého učitele bys nejradši měla?",
        optionA: "😊 Veselého, který se pořád směje",
        optionB: "📖 Chytrého, který vysvětluje zajímavě",
        resultA: "Funny teacher! Škola je zábava, но někdy se víc smějete než učíte! 😂",
        resultB: "Smart educator! Naučíš se spoustu věcí, ale домашние úkoly jsou сложные! 📝"
    },
    {
        question: "Co bys nejradši našla в своем batohu?",
        optionA: "🍬 Tajnou zásobu sladkostí",
        optionB: "📝 Lístek od best friend",
        resultA: "Secret candy stash! Vždycky máš něco dobrého, но zuby se ti kazí! 🦷",
        resultB: "Friendship note! Cítíš se milovaná, але někdy ti text rozteče! 💧"
    }
];

const pokemonCards = [
    {
        question: "Jakého startovního Pokémona bys si vybrala?",
        optionA: "🔥 Ohňového typu",
        optionB: "💧 Vodního typu",
        resultA: "Ohnivý parťák! Super silný v boji, ale občas ti spálí oblíbené tričko! 🔥",
        resultB: "Vodní kamarád! Skvělý na horké dny, ale děláni malé potopy v domě! 💦"
    },
    {
        question: "Jakou Pokémon schopnost bys chtěla mít?",
        optionA: "⚡ Elektrické útoky",
        optionB: "🌿 Bylinné léčení",
        resultA: "Elektrická síla! Můžeš nabíjet telefon rukama, ale občas dostaneš šok z kliky! ⚡",
        resultB: "Přírodní léčitelka! Dokážeš vyléčit každé poranění, ale přitahuješ k sobě všechny nemocné! 🏥"
    },
    {
        question: "Kterého legendárního Pokémona bys chtěla potkat?",
        optionA: "🌈 Ho-oh",
        optionB: "🌊 Lugia",
        resultA: "Duhový Fénix! Vidět ho je neuvěřitelný zážitek, ale jeho krásné peří vyvolává u všech závist! 🦅",
        resultB: "Oceánský strážce! Mocný a majestátní, ale jeho křik způsobuje tsunami v každé vaně! 🌊"
    },
    {
        question: "V jaké Pokémon oblasti bys chtěla žít?",
        optionA: "🗾 Kanto region",
        optionB: "🌋 Hoenn region",
        resultA: "Klasická volba! Birthplace všech dobrodružství, ale pořád tam potkáváš Team Rocket! 😤",
        resultB: "Tropický ráj! Krásné pláže a vulkány, ale občas tě pronásleduje gigantický Wailord! 🐋"
    },
    {
        question: "Jaký Pokémon typ bys chtěla trénovat?",
        optionA: "👻 Ghost typy",
        optionB: "🧚‍♀️ Fairy typy",
        resultA: "Duchová trenérka! Spooky a cool, ale tvoji Pokémoni se občas ztratí v stěnách! 👻",
        resultB: "Víla trenérka! Roztomilí a magičtí, ale všichni jsou tak cute, že se nemůžeš rozhodnout! ✨"
    },
    {
        question: "Jakou Pokémon evoluci bys chtěla vidět?",
        optionA: "🦋 Caterpie → Butterfree",
        optionB: "🐲 Dratini → Dragonite",
        resultA: "Motýlí transformace! Od housenky k nádhernému motýlu, ale trvá to věčnost! 🐛",
        resultB: "Dračí síla! Z malého dragon do mega beast, ale pak je moc velký na tvůj pokoj! 🏠"
    },
    {
        question: "Jaký Pokémon contest bys chtěla vyhrát?",
        optionA: "💃 Beauty contest",
        optionB: "💪 Tough contest",
        resultA: "Krása vítězí! Tvůj Pokémon je nejkrásnější, ale ostatní jsou žárlivý a mrzutý! 👸",
        resultB: "Síla řeší! Nejsilnější Pokémon v soutěži, ale pak všichni chtějí s tebou bojovat! ⚔️"
    },
    {
        question: "Jakou Pokémon gym bys chtěla vést?",
        optionA: "⚡ Electric gym",
        optionB: "🌸 Grass gym",
        resultA: "Elektrická arena! Shocking battles, ale občas ti vypadne elektřina v celém městě! 💡",
        resultB: "Přírodní gym! Krásné rostliny všude, ale občas se jim příliš daří a přerostou tě! 🌿"
    },
    {
        question: "Jakého Pokémon parťáka bys chtěla na cesty?",
        optionA: "🔥 Growlithe",
        optionB: "💧 Vaporeon",
        resultA: "Ohnivý psík! Věrný a ochranářský, ale když se vzruší, zapaluje trávu! 🐕",
        resultB: "Vodní elegance! Krásný a klidný, ale potřebuje hodně vody a koupelen! 🛁"
    },
    {
        question: "Jaký Pokémon item bys chtěla mít?",
        optionA: "⭐ Master Ball",
        optionB: "🍓 Poffin case",
        resultA: "Ultimate Pokéball! Chytíš každého Pokémona, ale máš jen jednu a máš strach ji použít! 😰",
        resultB: "Sladký case! Tvoji Pokémoni jsou vždy šťastní, ale ty taky pořád jíš sladkosti! 🍰"
    },
    {
        question: "Jakou Pokémon schopnost bys chtěla v reálném životě?",
        optionA: "🚀 Teleport",
        optionB: "😴 Sleep powder",
        resultA: "Instant cestování! Žádné dopravní zácpy, ale občas se teleportuješ na špatné místo! 🌀",
        resultB: "Power nap expert! Všichni kolem tebe usnou, ale někdy usneš taky a probudíš se ve škole! 💤"
    },
    {
        question: "Jaký Pokémon festival bys chtěla navštívit?",
        optionA: "🎆 Pokémon fireworks festival",
        optionB: "🍃 Grass festival",
        resultA: "Ohňostroj extravaganza! Úžasné světelné show s Fire types, ale občas něco chytne! 🎇",
        resultB: "Zelený ráj! Peaceful a relaxing, ale někdy se ztratíš v příliš hustém lese! 🌳"
    },
    {
        question: "Kdybys mohla být jakýkoli Pokémon, který bys byla?",
        optionA: "🦋 Butterfree létající nad loukami",
        optionB: "⚡ Pikachu běhající po světě",
        resultA: "Motýlí svoboda! Krásně lítáš, ale v zimě musíš hibernovat! 😴",
        resultB: "Elektrická hvězda! Všichni tě milují, ale musíš být pořád roztomilá! 😊"
    },
    {
        question: "Jak bys nejradši chytala Pokémony?",
        optionA: "🎣 Klidným přesvědčováním",
        optionB: "⚔️ Epicými souboji",
        resultA: "Pokémon šeptačka! Všichni k tobě přijdou sami, ale trvá to věčnost! ⏰",
        resultB: "Bojovná trenérka! Rychle a efektně, ale někdy poškodíš Pokémona! 🤕"
    },
    {
        question: "Jaký Pokémon den by byl nejlepší?",
        optionA: "🌅 Ráno s Pokémony v přírodě",
        optionB: "🌙 Noc hledání nočních Pokémonů",
        resultA: "Ranní dobrodružka! Krásné svítání a zpěv Pokémonů, ale musíš vstávat v 5! 🌄",
        resultB: "Noční lovkyně! Najdeš vzácné Pokémony, ale rodiče se bojí! 😰"
    },
    {
        question: "Co bys nejradši dělala se svým partnerským Pokémonem?",
        optionA: "🏃‍♀️ Cestovala po celém světě",
        optionB: "🏠 Žila klidný život doma",
        resultA: "Světová cestovatělka! Úžasná dobrodružství, ale občas se ztratíte! 🗺️",
        resultB: "Domácí pohoda! Klid a bezpečí, ale život je trochu nudný! 😐"
    },
    {
        question: "Jaké Pokémon jídlo bys nejradši zkusila?",
        optionA: "🍯 Miltank mléko s Pecha bobulemi",
        optionB: "🥘 Slowpoke ocas kari",
        resultA: "Zdravé mléčko! Výživné a zdravé, ale chutná trochu divně! 🥛",
        resultB: "Exotické kari! Úžasná chuť, ale je to trochu weird jíst Pokémona! 😅"
    },
    {
        question: "Kde bys nejradši založila Pokémon centrum?",
        optionA: "🏔️ Vysoko v horách",
        optionB: "🏖️ Na tropické pláži",
        resultA: "Horské centrum! Čistý vzduch a klid, ale zásobování je problém! 📦",
        resultB: "Plážová klinika! Krásné prostředí, ale písek je všude! 🏖️"
    },
    {
        question: "Jakou Pokémon schopnost bys použila ve škole?",
        optionA: "🧠 Psychic na přemístění věcí",
        optionB: "💨 Quick Attack na rychlý pohyb",
        resultA: "Telekinetická školačka! Nemusíš vstávat z lavice, ale učitelé si myslí, že podvádíš! 🪄",
        resultB: "Rychlostní studentka! Všude dorazíš první, ale občas narazíš do zdi! 💥"
    },
    {
        question: "Jakého Pokémon trenéra bys nejradši porazila?",
        optionA: "👑 Champion regionu",
        optionB: "🚀 Team Rocket",
        resultA: "Šampionka šampionek! Nejlepší trenérka světa, ale pak už nemáš koho vyzvat! 🏆",
        resultB: "Rocket hunter! Zachraňuješ Pokémony, ale oni se pořád vracejí! 🔄"
    },
    {
        question: "Co bys dělala, kdyby tvůj Pokémon nchtěl poslouchat?",
        optionA: "🍬 Namlouvala mu sladkostmi",
        optionB: "🎮 Hrála si s ním hry",
        resultA: "Cukrová motivace! Pokémon tě poslouchá, ale pak má cukrovku! 🍭",
        resultB: "Herní trenérka! Zábavné tréninky, ale někdy zapomínáte na cíl! 🎯"
    },
    {
        question: "Jaký Pokémon předmět bys nejradši vynalezla?",
        optionA: "📱 Pokédex s AI asistentem",
        optionB: "👟 Boty pro chození po vodě",
        resultA: "Smart Pokédex! Ví všechno o Pokémonech, ale je to trochu namyšlený! 🤖",
        resultB: "Vodní boty! Můžeš chodit po vodě, ale někdy se pokazí a potopíš se! 🌊"
    },
    {
        question: "Kde bys nejradši potkala legendárního Pokémona?",
        optionA: "🏔️ Na vrcholu nejvyšší hory",
        optionB: "🌊 V hlubinách oceánu",
        resultA: "Horská legenda! Epické setkání na vrcholu, ale výstup tě skoro zabil! 🥵",
        resultB: "Oceánská mystika! Nádherné setkání pod vodou, ale máš problém s dýcháním! 🫧"
    },
    {
        question: "Jaký Pokémon battle style by byl tvůj?",
        optionA: "🛡️ Obranná strategie",
        optionB: "⚡ Rychlé útoky",
        resultA: "Tankový styl! Pokémoni ti vydrží navěky, ale souboje trvají hodiny! ⏳",
        resultB: "Blitzkrieg trenérka! Rychlé a efektní vítězství, ale když to nevyjde, prohraješ! 💨"
    },
    {
        question: "Co bys udělala s Team Rocket, kdyby tě přepadli?",
        optionA: "🎭 Předstírala, že ses k nim chceš přidat",
        optionB: "⚔️ Okamžitě je vyzvala na souboj",
        resultA: "Undercover agentka! Geniální plán, ale někdy zapomeneš, že předstíráš! 🕵️‍♀️",
        resultB: "Přímý útok! Rychlé řešení, ale oni mají obvykle nějaký trik! 🪤"
    },
    {
        question: "Jaké Pokémon evoluci bys nejradši viděla?",
        optionA: "🐛 Caterpie → Butterfree",
        optionB: "🗿 Geodude → Golem",
        resultA: "Motýlí transformace! Nádherná proměna, ale trvá to dlouho! 🦋",
        resultB: "Kamenná evoluce! Impozantní síla, ale pak se tvůj Pokémon nevejde do domu! 🏠"
    },
    {
        question: "Jaký by byl tvůj Pokémon research projekt?",
        optionA: "🔬 Studium Pokémon DNA",
        optionB: "🎵 Pokémon komunikace a řeč",
        resultA: "Vědecká průkopnice! Objevíš úžasné věci, ale laboratoř vypadá jak po výbuchu! 💥",
        resultB: "Pokémon lingvistka! Rozumíš všem Pokémonům, ale pak už nemluvíš normálně! 🗣️"
    },
    {
        question: "Kde bys nejradši měla svou Pokémon farmu?",
        optionA: "🌾 Na rozsáhlých loukách",
        optionB: "🌺 V tropické džungli",
        resultA: "Loukový ráj! Pokémoni mají spoustu místa, ale občas se ztratí! 🐄",
        resultB: "Džunglový domov! Exotické prostředí, ale každý den objevíš nového divoký Pokémona! 🌿"
    },
    {
        question: "Jaký Pokémon turnaj bys nejradši vyhrála?",
        optionA: "🏆 Oficiální Pokémon ligu",
        optionB: "🎪 Pokémon talent show",
        resultA: "Liga šampionka! Oficiální uznání, ale pak musíš bránit titul! 👑",
        resultB: "Talent hvězda! Tvoji Pokémoni jsou umělci, ale někdy zapomínají výkon! 🎭"
    },
    {
        question: "Co bys nejradši našla v opuštěné Pokémon laboratoři?",
        optionA: "🧪 Vzácný experimentální Pokémon",
        optionB: "📚 Ztracené vědecké poznámky",
        resultA: "Experimentální objevy! Unikátní Pokémon, ale možná je trochu nestabilní! ⚗️",
        resultB: "Vědecké poklady! Cenné informace, ale některé experimenty jsou nebezpečné! ⚠️"
    },
    {
        question: "Jaký život bys nejradši žila s Pokémony?",
        optionA: "🏘️ V malém městečku jako gym leader",
        optionB: "🚀 Jako nomádka cestující světem",
        resultA: "Městská vůdkyně! Všichni tě respektují, ale každý den máš výzvy! 🏛️",
        resultB: "Svobodná cestovatelka! Nekonečná dobrodružství, ale občas jsi hrozně osamělá! 🌍"
    }
];

const robloxCards = [
    {
        question: "Jakou Roblox hru bys chtěla hrát?",
        optionA: "🏃‍♀️ Obby parkour",
        optionB: "🏠 Adopt Me!",
        resultA: "Parkour queen! Překonáváš každou překážku, ale občas spadneš a musíš začít znovu! 😅",
        resultB: "Pet collecting! Máš nejroztomilejší mazlíčky, ale nemůžeš se rozhodnout, kterého si necháš! 🐾"
    },
    {
        question: "Jakou Roblox avatara bys chtěla mít?",
        optionA: "👑 Luxusní s Robux oblečením",
        optionB: "🎨 Kreativní vlastní design",
        resultA: "Premium style! Vypadáš jako milionářka, ale utratila jsi všechny kapesné za virtuální oblečení! 💎",
        resultB: "Artistic soul! Jedinečný look, ale někdy vypadáš tak divně, že tě lidé nedokážou identifikovat! 🎭"
    },
    {
        question: "Jaký Roblox gamepass bys chtěla mít?",
        optionA: "🚀 VIP přístup",
        optionB: "💰 Double coins",
        resultA: "VIP treatment! Přístup všude first, ale ostatní hráči jsou na tebe žárliví! 👸",
        resultB: "Money maker! Coins tečou jako voda, ale pak si nemáš co koupit, protože máš všechno! 🤑"
    },
    {
        question: "Jakou Roblox výzvu bys chtěla splnit?",
        optionA: "🏆 Vyhrát všechny trofeje",
        optionB: "👫 Najít nejlepší přátele",
        resultA: "Trophy hunter! Sbírka je imprézní, ale trávíš tolik času hraním, že zapomínáš jíst! 🥇",
        resultB: "Social butterfly! Úžasní kamarádi všude, ale někdy jsou moc hlučný v chatu! 💬"
    },
    {
        question: "Jaký Roblox simulator bys chtěla hrát?",
        optionA: "🍕 Pizza simulator",
        optionB: "🌟 Star simulator",
        resultA: "Pizza master! Děláš nejlepší pizzy v Robloxu, ale pak chceš pizza i v reálném životě! 🍕",
        resultB: "Cosmic collector! Sbíráš hvězdy a planety, ale někdy se ztratíš v galaxii! 🌌"
    },
    {
        question: "Jakou Roblox roli bys chtěla mít?",
        optionA: "👩‍🏫 Učitelka v school RP",
        optionB: "👮‍♀️ Policistka v city RP",
        resultA: "Virtuální učitelka! Vzdělávás malé Robloxáky, ale někteří jsou rebels a neutíkají z hodin! 📚",
        resultB: "Cyber policistka! Chráníš město před zločinai, ale někteří \"zločinci\" jsou tak roztomilí! 🚔"
    },
    {
        question: "Jaký Roblox mode bys chtěla vyzkoušet?",
        optionA: "🧟‍♀️ Zombie apocalypse",
        optionB: "🏰 Medieval kingdom",
        resultA: "Zombie fighter! Adrenalinová jízda, ale pak se bojíš i vlastního stínu! 🧟‍♀️",
        resultB: "Medieval princess! Žiješ jako ve fairy tale, ale WiFi ve středověku je terrible! 📶"
    },
    {
        question: "Jaký Roblox event bys chtěla navštívit?",
        optionA: "🎃 Halloween event",
        optionB: "❄️ Winter event",
        resultA: "Spooky celebration! Costume soutěže a candy, ale některé kostýmy jsou až moc scary! 🕷️",
        resultB: "Winter wonderland! Sněhové království a gifts, ale všichni chtějí tu same limited edition item! ⛄"
    },
    {
        question: "Jaký Roblox building bys chtěla postavit?",
        optionA: "🏝️ Tropický resort",
        optionB: "🎢 Zábavní park",
        resultA: "Paradise island! Relaxation zone, ale návštěvníci ti pořád žádají więcej cocktails! 🍹",
        resultB: "Theme park empire! Everybody loves fun rides, ale občas se nějaká atrakce pokazí! 🎪"
    },
    {
        question: "Jaký Roblox achievement bys chtěla unlock?",
        optionA: "⭐ 1000 days played",
        optionB: "👥 1000 friends",
        resultA: "Veteran player! Znáš každý easter egg, ale realizuješ, kolik času jsi strávila online! ⏰",
        resultB: "Social butterfly! Friends list je mega long, ale někdy se ztratíš v tolika conversation! 📱"
    },
    {
        question: "Jakou Roblox group bys chtěla založit?",
        optionA: "🎨 Art a design group",
        optionB: "🎮 Gaming tournament group",
        resultA: "Creative collective! Všichni vytváří amazing art, ale někdy jsou příliš perfectionist! 🖌️",
        resultB: "Competitive gaming! Tournaments každý týden, ale někteří hráči jsou sore losers! 🏅"
    },
    {
        question: "Jaký Roblox lifestyle bys chtěla žít?",
        optionA: "💎 Rich luxury life",
        optionB: "🌈 Creative artistic life",
        resultA: "Diamond lifestyle! Všechno gold a glitter, ale musíš tvrdě farmit na každý Robux! 💰",
        resultB: "Artistic soul! Creative freedom everywhere, ale někdy jsi tak absorbed v art, že zapomínáš real world! 🎪"
    },
    {
        question: "Jakou Roblox trading strategii bys používala?",
        optionA: "📈 Investovat do limiteds",
        optionB: "🔄 Rychlé trade flipping",
        resultA: "Investment guru! Portfolio roste, ale někdy čekáš roky, než se item zhodnotí! 📊",
        resultB: "Trade master! Rychlé zisky každý den, ale občas uděláš bad deal pod tlakem! ⚡"
    },
    {
        question: "Jaký Roblox stream bys chtěla dělat?",
        optionA: "🎥 Gaming livestream",
        optionB: "🎪 Fashion show stream",
        resultA: "Pro gamer! Chat tě miluje za skills, ale někdy musíš hrát hry, co tě nebaví! 🎮",
        resultB: "Fashion icon! Všichni chtějí tvoje outfit tips, ale modní trendy se mění každý týden! 👗"
    },
    {
        question: "Jaký Roblox skill bys chtěla mít?",
        optionA: "⚡ Speed running rekord",
        optionB: "🏗️ Professional building",
        resultA: "Speed demon! Dokončíš každou hru v rekordním čase, ale pak nemáš čas si ji užít! 🏃‍♀️",
        resultB: "Master builder! Tvoje stavby jsou incredible, ale trvá ti věčnost dokončit projekt! 🔨"
    },
    {
        question: "Jaké Roblox pets bys chtěla mít?",
        optionA: "🐉 Mythical legendary pets",
        optionB: "🐱 Armádu cute kočiček",
        resultA: "Dragon tamer! Nejspešší pets ever, ale všichni chtějí trade a nepustí tě na pokoji! 🔥",
        resultB: "Cat lady! Roztomilá kočičí invaze, ale občas se mezi nimi ztratíš! 😸"
    },
    {
        question: "Jaký Roblox transport bys používala?",
        optionA: "🚁 VIP helicopter",
        optionB: "🦄 Létající unicorn",
        resultA: "Sky captain! Rychlé cestování všude, ale fuel je mega expensive! 🚁",
        resultB: "Magical rider! Rainbow trails everywhere, ale unicorn má vlastní hlavu a létá kam chce! 🌈"
    },
    {
        question: "Jaký Roblox contest bys chtěla vyhrát?",
        optionA: "🏆 Building competition",
        optionB: "🎤 Talent show contest",
        resultA: "Architecture champion! Trophy cabinet je full, ale competitors ti pořád kopírují style! 🏗️",
        resultB: "Stage star! Spotlight je tvoje passion, ale stage fright někdy zabíjí performance! 🌟"
    },
    {
        question: "Jaké Roblox místo bys chtěla vlastnit?",
        optionA: "🏖️ Privátní beach resort",
        optionB: "🎮 Gaming arcade centrum",
        resultA: "Beach boss! Paradise vibes denně, ale písek se dostává do počítače! 🏄‍♀️",
        resultB: "Arcade owner! Všechny top games na jednom místě, ale hluk je sometimes overwhelming! 🕹️"
    },
    {
        question: "Jakou Roblox superschopnost bys chtěla?",
        optionA: "🚀 Teleportation anywhere",
        optionB: "🎭 Perfect roleplay acting",
        resultA: "Teleport master! Instant travel všude, ale občas se teleportuješ do wrong place! ⚡",
        resultB: "Acting legend! Každá role je believable, ale občas zapomeneš, kdo opravdu jsi! 🎪"
    },
    {
        question: "Jaký Roblox team bys chtěla vést?",
        optionA: "⚔️ Elite PvP squad",
        optionB: "🎨 Creative building crew",
        resultA: "Warrior leader! Vyhráváš každou battle, ale team drama is sometimes too much! 🛡️",
        resultB: "Creative director! Amazing projects vznikají, ale každý má jiný artistic vision! 🖼️"
    },
    {
        question: "Jaký Roblox mystery bys chtěla vyřešit?",
        optionA: "🕵️‍♀️ Murder mystery case",
        optionB: "👻 Haunted mansion secrets",
        resultA: "Detective master! Cases are solved quickly, ale někdy suspects jsou too scary! 🔍",
        resultB: "Ghost hunter! Paranormal activity je exciting, ale někdy se bojíš vlastního shadow! 🕯️"
    },
    {
        question: "Jakou Roblox collaboraci bys chtěla udělat?",
        optionA: "🌟 S famous YouTuber",
        optionB: "🎯 S top developer",
        resultA: "Internet celebrity! Millions of views, ale pressure být funny all the time je exhausting! 📹",
        resultB: "Developer partnership! Amazing games vznikají, ale coding je sometimes over your head! 💻"
    },
    {
        question: "Jaký Roblox upgrade bys chtěla pro avatar?",
        optionA: "✨ Glow effect permanent",
        optionB: "🌪️ Special walk animation",
        resultA: "Glowing goddess! Everybody notices you, ale někdy je glow too bright pro oči! 💡",
        resultB: "Style walker! Unique movement všude, ale někdy dance moves jsou inappropriate! 🕺"
    },
    {
        question: "Jakou Roblox memory bys chtěla zachytit?",
        optionA: "📸 Epic victory moment",
        optionB: "👫 Perfect friend hangout",
        resultA: "Victory photographer! Všechny wins jsou documented, ale někdy jsi busy s fotěním místo hraní! 📱",
        resultB: "Friendship documenter! Beautiful memories everywhere, ale sometimes you live více through camera než reality! 💝"
    },
    {
        question: "Jaké Roblox collection bys chtěla mít?",
        optionA: "👑 Všechny crown accessories",
        optionB: "🎮 Každý gamepass ever",
        resultA: "Crown collector! Royal look always, ale crown storage je chaotic mess! 👸",
        resultB: "Gamepass hoarder! VIP everywhere, ale nikdy nevíš, which perks máš kde! 🎫"
    },
    {
        question: "Jaký Roblox seasonal event bys nikdy nečekala?",
        optionA: "🦃 Thanksgiving turkey hunt",
        optionB: "🌸 Cherry blossom festival",
        resultA: "Turkey hunter! Unexpected pero fun, ale všichni vegetariáni jsou upset! 🍗",
        resultB: "Blossom photographer! Pink paradise everywhere, ale seasonal allergy symptoms online! 🌺"
    },
    {
        question: "Jakou Roblox innovaci bys chtěla přinést?",
        optionA: "🎵 Music creation studio",
        optionB: "🎨 3D art gallery system",
        resultA: "Music pioneer! Players compose amazing songs, ale copyright issues jsou nightmare! 🎶",
        resultB: "Art revolutionary! Virtual galleries se amazing art, ale some pieces jsou inappropriate! 🖌️"
    },
    {
        question: "Jaký Roblox achievement badge bys chtěla navrhnout?",
        optionA: "🤝 'Ultimate Helpfulness'",
        optionB: "🎯 'Perfect Precision'",
        resultA: "Helping saint! Everybody loves you, ale někdy helpful actions take whole day! 😇",
        resultB: "Precision master! Every move is flawless, ale perfection pressure je sometimes overwhelming! 🎯"
    },
    {
        question: "Jaký Roblox crossover event bys nejvíc chtěla?",
        optionA: "🚀 Space adventure se Star Wars",
        optionB: "🏰 Fantasy quest s Lord of the Rings",
        resultA: "Jedi master! Force powers everywhere, ale dark side temptation je strong! ⚔️",
        resultB: "Fellowship member! Epic quests daily, ale walking to Mordor takes forever! 🧙‍♀️"
    },
    {
        question: "Jakou Roblox legacy bys chtěla zanechat?",
        optionA: "📚 Educational game empire",
        optionB: "🎊 Party game paradise",
        resultA: "Education pioneer! Learning je fun again, ale někdy serious topics jsou hard to gamify! 🎓",
        resultB: "Party legend! Everyone has fun always, ale organizing celebrations is full-time job! 🎉"
    },
    {
        question: "Jaký Roblox easter egg bys chtěla objevit?",
        optionA: "💎 Secret diamond mine",
        optionB: "🚪 Portal do hidden dimension",
        resultA: "Treasure hunter! Infinite diamonds, ale secret je too good to keep! 💰",
        resultB: "Dimension explorer! New worlds to discover, ale getting back home je sometimes problem! 🌌"
    }
];