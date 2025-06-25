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
    }
];