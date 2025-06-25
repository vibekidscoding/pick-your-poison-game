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

    // Minecraft themed cards
    {
        question: "Co by sis v Minecraftu radši postavila?",
        optionA: "🏰 Mega hrad z diamantů",
        optionB: "🌋 Tajnou základnu pod lávou",
        resultA: "Diamantový palác! Všichni tě obdivují, ale Creeprům se tvůj hrad líbí k vyhazování. 💥",
        resultB: "Lávové doupě! Fakt husté, jen se někdy zapomeneš a skončíš jako opečený marshmallow. 🔥"
    },
    {
        question: "Jakého Minecraft mazlíčka by sis vybrala?",
        optionA: "🐺 Partu věrných vlků",
        optionB: "🐱 Deset kočiček všech barev",
        resultA: "Vlčí banda! Hlí­dají tě před monstry, ale pořád se rvou o kosti a dělají megahluk! 🦴",
        resultB: "Kočičí parta! Vyhání Creepry, jen ti zabere celý dům a mňouká celou noc! 😸"
    },
    {
        question: "Jakou minecraftovou superschopnost bys chtěla mít?",
        optionA: "⛏️ Bleskové těžení",
        optionB: "🏗️ Stavění bez bloků",
        resultA: "Těžíš jako raketa! Diamanty létají, ale vykopala jsi takové díry, že tam zabloudíš. 💎",
        resultB: "Stavíš cokoliv bez bloků! Jen občas nevíš, kde končí tvé stavby a kde začíná normální svět. 🧱"
    },
    {
        question: "Jaký minecraftový svět bys chtěla prozkoumat?",
        optionA: "🌈 Duhový les plný barevných oveček",
        optionB: "🍭 Sladký svět z bonbónů",
        resultA: "Duhová říše! Ovečky mění barvu každou chvíli, takže nikdy nevíš, jakou vlnu si ostříháš. 🐑",
        resultB: "Cukrový ráj! Všechno je sladké, jen se připrav na mravenčí invazi! 🐜"
    },
    {
        question: "Kterého Minecraft bosse bys chtěla porazit?",
        optionA: "🐉 Enderdraka s partou kamarádek",
        optionB: "💀 Withera úplně sama",
        resultA: "Týmová jízda! Drak padne, ale pak se handrkujete, kdo si vezme jeho vajíčko. 🥚",
        resultB: "Solo hrdinka! Legendární výkon, jenže Wither ti rozbije půl základny. 💣"
    },

    // Gaming themed cards
    {
        question: "Jakou herní konzoli bys chtěla mít?",
        optionA: "🎮 Konzoli se všemi hrami zadarmo",
        optionB: "🕹️ Retro konzoli s tisícem starých her",
        resultA: "Nekonečný výběr! Jen strávíš věčnost rozhodováním, co zkusit dřív. 🤔",
        resultB: "Retro paráda! Super klasiky, ale ovladače se pořád kazí a grafika je jako kostičky. 👾"
    },
    {
        question: "Jakou herní superschopnost bys chtěla?",
        optionA: "🏆 Nikdy nic neprohrát",
        optionB: "🎯 Být top streamerka světa",
        resultA: "Neporazitelná! Všichni se tě ale bojí vyzvat, protože vždycky vyhraješ. 😔",
        resultB: "Streamovací hvězda! Miliony followerů, ale musíš bavit lidi nonstop a někdy už fakt nevíš co říkat. 📹"
    },
    {
        question: "V jaké herní postavě by ses chtěla probudit?",
        optionA: "🦸‍♀️ Superhrdinka z akční hry",
        optionB: "🧙‍♀️ Kouzelnice z fantasy světa",
        resultA: "Akční hrdinka! Zachraňuješ svět každý den, ale záporáci ti pořád ničí oblíbenou cukrárnu. 🍔",
        resultB: "Mocná čarodějka! Kouzlíš neuvěřitelné věci, jen někdy zapomeneš zaklínadlo a proměníš čaj v žábu! ☕"
    },
    {
        question: "Jaký herní tým bys radši vedla?",
        optionA: "🚀 Partu, co dělá vesmírné hry",
        optionB: "🏠 Tým, co tvoří rodinné hry",
        resultA: "Vesmírná mise! Stavíte galaxie, ale všichni se hádají o černé díry. 🌌",
        resultB: "Rodinná pohoda! Hry milují i rodiče, ale testovat je musí i babička. 👵"
    },

    // Animal themed cards
    {
        question: "Jakého exotického mazlíčka by sis přála?",
        optionA: "🦜 Papouška, který umí 20 jazyků",
        optionB: "🐧 Tučňáka, který umí tancovat",
        resultA: "Ukecaný papoušek! Povídá si s každým, ale pořád opakuje tvoje tajnosti. 🙈",
        resultB: "Tancující tučňák! Skvělý parťák na party, jen potřebuje obří ledničku a spoustu ryb. 🐟"
    },
    {
        question: "Jaké zvíře bys chtěla umět kreslit úplně dokonale?",
        optionA: "🐅 Tygry s mega detaily",
        optionB: "🦋 Motýly se třpytivými křídly",
        resultA: "Tygrí mistryně! Všichni žasnou, jen učitelé se bojí, že tygr skočí z papíru. 😱",
        resultB: "Motýlí malířka! Obrázky nádherné, ale motýli se od nich nechtějí odlepit a poletují po třídě. 🎨"
    },
    {
        question: "Se kterými zvířátky bys chtěla umět mluvit?",
        optionA: "🐕 Všemi pejsky v okolí",
        optionB: "🐈 Všemi kočičkami ve městě",
        resultA: "Psí tlumočnice! Pejsci ti všechno vyštěkají, hlavně jak málo pamlsků dostávají. 🦴",
        resultB: "Kočičí šeptanda! Kočky sdílí svá tajemství, ale většinou komentují tvůj outfit a jídlo. 😼"
    },
    {
        question: "Jakého mořského tvora bys chtěla potkat?",
        optionA: "🐙 Přátelskou mega chobotnici",
        optionB: "🐬 Partu veselých delfínů",
        resultA: "Chobotnicový kámoš! Má osm paží na objetí, ale když se rozruší, zacáká tě inkoustem. 🖤",
        resultB: "Delfíní parta! Jsou chytré a hravé, ale pořád tě šplíchají vodou a smějí se svým vtipům. 💦"
    },

    // Friendship themed cards
    {
        question: "Jakého kamaráda bys chtěla mít?",
        optionA: "🤡 Kamaráda, co tě vždycky rozesměje",
        optionB: "🧠 Kamaráda, co zná odpověď na všechno",
        resultA: "Věčný vtipálek! Směješ se nonstop, ale někdy bys ráda chvíli klidu. 😂",
        resultB: "Chytrá hlava! Ví úplně vše, ale občas se vedle něj cítíš jako školka. 🤓"
    },
    {
        question: "Jakou skupinovou zábavu bys chtěla podniknout s kámoškami?",
        optionA: "🏕️ Táborák pod hvězdami",
        optionB: "🎳 Super bowlingový turnaj",
        resultA: "Hvězdný táborák! Romantika, ale kamarádka se bojí pavouků a jiná chrápe. 🕷️",
        resultB: "Bowlingový turnaj! Spousta legrace, jen někdo je profík a někdo netrefí ani kuželku. 🎳"
    },
    {
        question: "Jak bys nejradši pomohla kamarádce v nesnázích?",
        optionA: "🦸‍♀️ Superhrdinská záchrana",
        optionB: "🤗 Dlouhé povídání a objímání",
        resultA: "Hrdinská pomoc! Zachráníš situaci, ale pak všichni čekají, že spasíš úplně všechno. 🚑",
        resultB: "Emo podpora! Jsi nejlepší posluchačka, ale rozhovor trvá celou noc a další den máš školu. 💤"
    },
    {
        question: "Jaký dárek bys radši dostala od nejlepší kamarádky?",
        optionA: "🎁 Vlastnoručně vyrobený dárek",
        optionB: "💰 Něco fakt drahého",
        resultA: "Domácí poklad! Je od srdce, ale vypadá trošku divně... hlavně to neříkej nahlas! 😅",
        resultB: "Luxusní dárek! Paráda, ale teď máš pocit, že jí musíš koupit něco stejně drahého. 💸"
    },
    {
        question: "Jak bys nejradši prožila víkend s kámoškami?",
        optionA: "🏠 Přespávačka u někoho doma",
        optionB: "🎢 Výlet do zábavního parku",
        resultA: "Domácí párty! Pohoda, jen někdo pořád něco zapomíná doma a rodiče volají. 📞",
        resultB: "Zábavní park! Spousta adrenalinu, jenže fronty jsou nekonečné a někdo se bojí horských drah. 🎠"
    },

    // More creative cards mixing themes
    {
        question: "Kdyby tvoje nejlepší kámoška byla Pokémon, koho by sis vybrala?",
        optionA: "⚡ Pikachu, který umí vařit",
        optionB: "🔥 Charizard, co hraje videohry",
        resultA: "Kuchař Pikachu! Vaří božsky, jen občas zapomene na elektřinu a večeře shoří. ⚡",
        resultB: "Gamer Charizard! Nejlepší pařmen, ale když prohraje, spálí ti ovladač. 🎮"
    },
    {
        question: "Jakou superschopnost by měl mít tvůj domácí mazlíček?",
        optionA: "🐕 Pejsek, co se umí teleportovat",
        optionB: "🐱 Kočka, co čte myšlenky",
        resultA: "Teleportující pejsek! Nikdy se neztratí, ale občas skočí k sousedům a ukradne jim večeři. 🍖",
        resultB: "Telepatická kočka! Ví, co si myslíš, jen tě často soudí a ignoruje. 😒"
    },
    {
        question: "V jakém fantasy světě bys chtěla žít s kamarádkami?",
        optionA: "🧙‍♀️ Kouzelná škola jako Hogwarts",
        optionB: "🌳 Elfí les s magickými stromy",
        resultA: "Kouzelná škola! Učíš se čarovat, ale úkoly jsou těžké a klidně omylem proměníš učitele v žábu! 🐸",
        resultB: "Elfí les! Žiješ s přírodou, ale elfové mají pravidla na všechno a jsou dost přísní. 📜"
    },
    {
        question: "Jakou technologii by sis chtěla vymyslet s kamarádkami?",
        optionA: "🤖 Robota, který ti udělá domácí úkoly",
        optionB: "🚀 Stroj času na super výlety",
        resultA: "Úkolový robot! Máš hromadu volného času, ale robot dělá chyby v matice a učitelům je to podezřelé. 🤔",
        resultB: "Časostroj! Skvělá dobrodružství, ale pořád zapomínáte, do kterého století patříte. ⏰"
    },
    {
        question: "Kdyby zvířata mohla hrát videohry, které bys chtěla trénovat?",
        optionA: "🐒 Opice hrající Minecraft",
        optionB: "🐧 Tučňáky hrající fotbalové hry",
        resultA: "Opičí Minecraft tým! Staví super věci, ale pořád hází banány na klávesnici a ničí ti počítač. 🍌",
        resultB: "Tučňačí fotbal! Perfektní tým, ale potřebují ledovou arénu a rybí svačinku každých pět minut. 🐟"
    }
];

const minecraftCards = [
    {
        "question": "Minecraft volba 1?",
        "optionA": "🧱 možnost A 1",
        "optionB": "⚔️ možnost B 1",
        "resultA": "Výsledek A 1",
        "resultB": "Výsledek B 1"
    },
    {
        "question": "Minecraft volba 2?",
        "optionA": "🧱 možnost A 2",
        "optionB": "⚔️ možnost B 2",
        "resultA": "Výsledek A 2",
        "resultB": "Výsledek B 2"
    },
    {
        "question": "Minecraft volba 3?",
        "optionA": "🧱 možnost A 3",
        "optionB": "⚔️ možnost B 3",
        "resultA": "Výsledek A 3",
        "resultB": "Výsledek B 3"
    },
    {
        "question": "Minecraft volba 4?",
        "optionA": "🧱 možnost A 4",
        "optionB": "⚔️ možnost B 4",
        "resultA": "Výsledek A 4",
        "resultB": "Výsledek B 4"
    },
    {
        "question": "Minecraft volba 5?",
        "optionA": "🧱 možnost A 5",
        "optionB": "⚔️ možnost B 5",
        "resultA": "Výsledek A 5",
        "resultB": "Výsledek B 5"
    },
    {
        "question": "Minecraft volba 6?",
        "optionA": "🧱 možnost A 6",
        "optionB": "⚔️ možnost B 6",
        "resultA": "Výsledek A 6",
        "resultB": "Výsledek B 6"
    },
    {
        "question": "Minecraft volba 7?",
        "optionA": "🧱 možnost A 7",
        "optionB": "⚔️ možnost B 7",
        "resultA": "Výsledek A 7",
        "resultB": "Výsledek B 7"
    },
    {
        "question": "Minecraft volba 8?",
        "optionA": "🧱 možnost A 8",
        "optionB": "⚔️ možnost B 8",
        "resultA": "Výsledek A 8",
        "resultB": "Výsledek B 8"
    },
    {
        "question": "Minecraft volba 9?",
        "optionA": "🧱 možnost A 9",
        "optionB": "⚔️ možnost B 9",
        "resultA": "Výsledek A 9",
        "resultB": "Výsledek B 9"
    },
    {
        "question": "Minecraft volba 10?",
        "optionA": "🧱 možnost A 10",
        "optionB": "⚔️ možnost B 10",
        "resultA": "Výsledek A 10",
        "resultB": "Výsledek B 10"
    },
    {
        "question": "Minecraft volba 11?",
        "optionA": "🧱 možnost A 11",
        "optionB": "⚔️ možnost B 11",
        "resultA": "Výsledek A 11",
        "resultB": "Výsledek B 11"
    },
    {
        "question": "Minecraft volba 12?",
        "optionA": "🧱 možnost A 12",
        "optionB": "⚔️ možnost B 12",
        "resultA": "Výsledek A 12",
        "resultB": "Výsledek B 12"
    },
    {
        "question": "Minecraft volba 13?",
        "optionA": "🧱 možnost A 13",
        "optionB": "⚔️ možnost B 13",
        "resultA": "Výsledek A 13",
        "resultB": "Výsledek B 13"
    },
    {
        "question": "Minecraft volba 14?",
        "optionA": "🧱 možnost A 14",
        "optionB": "⚔️ možnost B 14",
        "resultA": "Výsledek A 14",
        "resultB": "Výsledek B 14"
    },
    {
        "question": "Minecraft volba 15?",
        "optionA": "🧱 možnost A 15",
        "optionB": "⚔️ možnost B 15",
        "resultA": "Výsledek A 15",
        "resultB": "Výsledek B 15"
    },
    {
        "question": "Minecraft volba 16?",
        "optionA": "🧱 možnost A 16",
        "optionB": "⚔️ možnost B 16",
        "resultA": "Výsledek A 16",
        "resultB": "Výsledek B 16"
    },
    {
        "question": "Minecraft volba 17?",
        "optionA": "🧱 možnost A 17",
        "optionB": "⚔️ možnost B 17",
        "resultA": "Výsledek A 17",
        "resultB": "Výsledek B 17"
    },
    {
        "question": "Minecraft volba 18?",
        "optionA": "🧱 možnost A 18",
        "optionB": "⚔️ možnost B 18",
        "resultA": "Výsledek A 18",
        "resultB": "Výsledek B 18"
    },
    {
        "question": "Minecraft volba 19?",
        "optionA": "🧱 možnost A 19",
        "optionB": "⚔️ možnost B 19",
        "resultA": "Výsledek A 19",
        "resultB": "Výsledek B 19"
    },
    {
        "question": "Minecraft volba 20?",
        "optionA": "🧱 možnost A 20",
        "optionB": "⚔️ možnost B 20",
        "resultA": "Výsledek A 20",
        "resultB": "Výsledek B 20"
    },
    {
        "question": "Minecraft volba 21?",
        "optionA": "🧱 možnost A 21",
        "optionB": "⚔️ možnost B 21",
        "resultA": "Výsledek A 21",
        "resultB": "Výsledek B 21"
    },
    {
        "question": "Minecraft volba 22?",
        "optionA": "🧱 možnost A 22",
        "optionB": "⚔️ možnost B 22",
        "resultA": "Výsledek A 22",
        "resultB": "Výsledek B 22"
    },
    {
        "question": "Minecraft volba 23?",
        "optionA": "🧱 možnost A 23",
        "optionB": "⚔️ možnost B 23",
        "resultA": "Výsledek A 23",
        "resultB": "Výsledek B 23"
    },
    {
        "question": "Minecraft volba 24?",
        "optionA": "🧱 možnost A 24",
        "optionB": "⚔️ možnost B 24",
        "resultA": "Výsledek A 24",
        "resultB": "Výsledek B 24"
    },
    {
        "question": "Minecraft volba 25?",
        "optionA": "🧱 možnost A 25",
        "optionB": "⚔️ možnost B 25",
        "resultA": "Výsledek A 25",
        "resultB": "Výsledek B 25"
    },
    {
        "question": "Minecraft volba 26?",
        "optionA": "🧱 možnost A 26",
        "optionB": "⚔️ možnost B 26",
        "resultA": "Výsledek A 26",
        "resultB": "Výsledek B 26"
    },
    {
        "question": "Minecraft volba 27?",
        "optionA": "🧱 možnost A 27",
        "optionB": "⚔️ možnost B 27",
        "resultA": "Výsledek A 27",
        "resultB": "Výsledek B 27"
    },
    {
        "question": "Minecraft volba 28?",
        "optionA": "🧱 možnost A 28",
        "optionB": "⚔️ možnost B 28",
        "resultA": "Výsledek A 28",
        "resultB": "Výsledek B 28"
    },
    {
        "question": "Minecraft volba 29?",
        "optionA": "🧱 možnost A 29",
        "optionB": "⚔️ možnost B 29",
        "resultA": "Výsledek A 29",
        "resultB": "Výsledek B 29"
    },
    {
        "question": "Minecraft volba 30?",
        "optionA": "🧱 možnost A 30",
        "optionB": "⚔️ možnost B 30",
        "resultA": "Výsledek A 30",
        "resultB": "Výsledek B 30"
    },
    {
        "question": "Minecraft volba 31?",
        "optionA": "🧱 možnost A 31",
        "optionB": "⚔️ možnost B 31",
        "resultA": "Výsledek A 31",
        "resultB": "Výsledek B 31"
    },
    {
        "question": "Minecraft volba 32?",
        "optionA": "🧱 možnost A 32",
        "optionB": "⚔️ možnost B 32",
        "resultA": "Výsledek A 32",
        "resultB": "Výsledek B 32"
    },
    {
        "question": "Minecraft volba 33?",
        "optionA": "🧱 možnost A 33",
        "optionB": "⚔️ možnost B 33",
        "resultA": "Výsledek A 33",
        "resultB": "Výsledek B 33"
    },
    {
        "question": "Minecraft volba 34?",
        "optionA": "🧱 možnost A 34",
        "optionB": "⚔️ možnost B 34",
        "resultA": "Výsledek A 34",
        "resultB": "Výsledek B 34"
    },
    {
        "question": "Minecraft volba 35?",
        "optionA": "🧱 možnost A 35",
        "optionB": "⚔️ možnost B 35",
        "resultA": "Výsledek A 35",
        "resultB": "Výsledek B 35"
    },
    {
        "question": "Minecraft volba 36?",
        "optionA": "🧱 možnost A 36",
        "optionB": "⚔️ možnost B 36",
        "resultA": "Výsledek A 36",
        "resultB": "Výsledek B 36"
    },
    {
        "question": "Minecraft volba 37?",
        "optionA": "🧱 možnost A 37",
        "optionB": "⚔️ možnost B 37",
        "resultA": "Výsledek A 37",
        "resultB": "Výsledek B 37"
    },
    {
        "question": "Minecraft volba 38?",
        "optionA": "🧱 možnost A 38",
        "optionB": "⚔️ možnost B 38",
        "resultA": "Výsledek A 38",
        "resultB": "Výsledek B 38"
    },
    {
        "question": "Minecraft volba 39?",
        "optionA": "🧱 možnost A 39",
        "optionB": "⚔️ možnost B 39",
        "resultA": "Výsledek A 39",
        "resultB": "Výsledek B 39"
    },
    {
        "question": "Minecraft volba 40?",
        "optionA": "🧱 možnost A 40",
        "optionB": "⚔️ možnost B 40",
        "resultA": "Výsledek A 40",
        "resultB": "Výsledek B 40"
    },
    {
        "question": "Minecraft volba 41?",
        "optionA": "🧱 možnost A 41",
        "optionB": "⚔️ možnost B 41",
        "resultA": "Výsledek A 41",
        "resultB": "Výsledek B 41"
    },
    {
        "question": "Minecraft volba 42?",
        "optionA": "🧱 možnost A 42",
        "optionB": "⚔️ možnost B 42",
        "resultA": "Výsledek A 42",
        "resultB": "Výsledek B 42"
    },
    {
        "question": "Minecraft volba 43?",
        "optionA": "🧱 možnost A 43",
        "optionB": "⚔️ možnost B 43",
        "resultA": "Výsledek A 43",
        "resultB": "Výsledek B 43"
    },
    {
        "question": "Minecraft volba 44?",
        "optionA": "🧱 možnost A 44",
        "optionB": "⚔️ možnost B 44",
        "resultA": "Výsledek A 44",
        "resultB": "Výsledek B 44"
    },
    {
        "question": "Minecraft volba 45?",
        "optionA": "🧱 možnost A 45",
        "optionB": "⚔️ možnost B 45",
        "resultA": "Výsledek A 45",
        "resultB": "Výsledek B 45"
    },
    {
        "question": "Minecraft volba 46?",
        "optionA": "🧱 možnost A 46",
        "optionB": "⚔️ možnost B 46",
        "resultA": "Výsledek A 46",
        "resultB": "Výsledek B 46"
    },
    {
        "question": "Minecraft volba 47?",
        "optionA": "🧱 možnost A 47",
        "optionB": "⚔️ možnost B 47",
        "resultA": "Výsledek A 47",
        "resultB": "Výsledek B 47"
    },
    {
        "question": "Minecraft volba 48?",
        "optionA": "🧱 možnost A 48",
        "optionB": "⚔️ možnost B 48",
        "resultA": "Výsledek A 48",
        "resultB": "Výsledek B 48"
    },
    {
        "question": "Minecraft volba 49?",
        "optionA": "🧱 možnost A 49",
        "optionB": "⚔️ možnost B 49",
        "resultA": "Výsledek A 49",
        "resultB": "Výsledek B 49"
    },
    {
        "question": "Minecraft volba 50?",
        "optionA": "🧱 možnost A 50",
        "optionB": "⚔️ možnost B 50",
        "resultA": "Výsledek A 50",
        "resultB": "Výsledek B 50"
    }
];

const harryPotterCards = [
    {
        "question": "Harry Potter volba 1?",
        "optionA": "🪄 možnost A 1",
        "optionB": "🧹 možnost B 1",
        "resultA": "Výsledek A 1",
        "resultB": "Výsledek B 1"
    },
    {
        "question": "Harry Potter volba 2?",
        "optionA": "🪄 možnost A 2",
        "optionB": "🧹 možnost B 2",
        "resultA": "Výsledek A 2",
        "resultB": "Výsledek B 2"
    },
    {
        "question": "Harry Potter volba 3?",
        "optionA": "🪄 možnost A 3",
        "optionB": "🧹 možnost B 3",
        "resultA": "Výsledek A 3",
        "resultB": "Výsledek B 3"
    },
    {
        "question": "Harry Potter volba 4?",
        "optionA": "🪄 možnost A 4",
        "optionB": "🧹 možnost B 4",
        "resultA": "Výsledek A 4",
        "resultB": "Výsledek B 4"
    },
    {
        "question": "Harry Potter volba 5?",
        "optionA": "🪄 možnost A 5",
        "optionB": "🧹 možnost B 5",
        "resultA": "Výsledek A 5",
        "resultB": "Výsledek B 5"
    },
    {
        "question": "Harry Potter volba 6?",
        "optionA": "🪄 možnost A 6",
        "optionB": "🧹 možnost B 6",
        "resultA": "Výsledek A 6",
        "resultB": "Výsledek B 6"
    },
    {
        "question": "Harry Potter volba 7?",
        "optionA": "🪄 možnost A 7",
        "optionB": "🧹 možnost B 7",
        "resultA": "Výsledek A 7",
        "resultB": "Výsledek B 7"
    },
    {
        "question": "Harry Potter volba 8?",
        "optionA": "🪄 možnost A 8",
        "optionB": "🧹 možnost B 8",
        "resultA": "Výsledek A 8",
        "resultB": "Výsledek B 8"
    },
    {
        "question": "Harry Potter volba 9?",
        "optionA": "🪄 možnost A 9",
        "optionB": "🧹 možnost B 9",
        "resultA": "Výsledek A 9",
        "resultB": "Výsledek B 9"
    },
    {
        "question": "Harry Potter volba 10?",
        "optionA": "🪄 možnost A 10",
        "optionB": "🧹 možnost B 10",
        "resultA": "Výsledek A 10",
        "resultB": "Výsledek B 10"
    },
    {
        "question": "Harry Potter volba 11?",
        "optionA": "🪄 možnost A 11",
        "optionB": "🧹 možnost B 11",
        "resultA": "Výsledek A 11",
        "resultB": "Výsledek B 11"
    },
    {
        "question": "Harry Potter volba 12?",
        "optionA": "🪄 možnost A 12",
        "optionB": "🧹 možnost B 12",
        "resultA": "Výsledek A 12",
        "resultB": "Výsledek B 12"
    },
    {
        "question": "Harry Potter volba 13?",
        "optionA": "🪄 možnost A 13",
        "optionB": "🧹 možnost B 13",
        "resultA": "Výsledek A 13",
        "resultB": "Výsledek B 13"
    },
    {
        "question": "Harry Potter volba 14?",
        "optionA": "🪄 možnost A 14",
        "optionB": "🧹 možnost B 14",
        "resultA": "Výsledek A 14",
        "resultB": "Výsledek B 14"
    },
    {
        "question": "Harry Potter volba 15?",
        "optionA": "🪄 možnost A 15",
        "optionB": "🧹 možnost B 15",
        "resultA": "Výsledek A 15",
        "resultB": "Výsledek B 15"
    },
    {
        "question": "Harry Potter volba 16?",
        "optionA": "🪄 možnost A 16",
        "optionB": "🧹 možnost B 16",
        "resultA": "Výsledek A 16",
        "resultB": "Výsledek B 16"
    },
    {
        "question": "Harry Potter volba 17?",
        "optionA": "🪄 možnost A 17",
        "optionB": "🧹 možnost B 17",
        "resultA": "Výsledek A 17",
        "resultB": "Výsledek B 17"
    },
    {
        "question": "Harry Potter volba 18?",
        "optionA": "🪄 možnost A 18",
        "optionB": "🧹 možnost B 18",
        "resultA": "Výsledek A 18",
        "resultB": "Výsledek B 18"
    },
    {
        "question": "Harry Potter volba 19?",
        "optionA": "🪄 možnost A 19",
        "optionB": "🧹 možnost B 19",
        "resultA": "Výsledek A 19",
        "resultB": "Výsledek B 19"
    },
    {
        "question": "Harry Potter volba 20?",
        "optionA": "🪄 možnost A 20",
        "optionB": "🧹 možnost B 20",
        "resultA": "Výsledek A 20",
        "resultB": "Výsledek B 20"
    },
    {
        "question": "Harry Potter volba 21?",
        "optionA": "🪄 možnost A 21",
        "optionB": "🧹 možnost B 21",
        "resultA": "Výsledek A 21",
        "resultB": "Výsledek B 21"
    },
    {
        "question": "Harry Potter volba 22?",
        "optionA": "🪄 možnost A 22",
        "optionB": "🧹 možnost B 22",
        "resultA": "Výsledek A 22",
        "resultB": "Výsledek B 22"
    },
    {
        "question": "Harry Potter volba 23?",
        "optionA": "🪄 možnost A 23",
        "optionB": "🧹 možnost B 23",
        "resultA": "Výsledek A 23",
        "resultB": "Výsledek B 23"
    },
    {
        "question": "Harry Potter volba 24?",
        "optionA": "🪄 možnost A 24",
        "optionB": "🧹 možnost B 24",
        "resultA": "Výsledek A 24",
        "resultB": "Výsledek B 24"
    },
    {
        "question": "Harry Potter volba 25?",
        "optionA": "🪄 možnost A 25",
        "optionB": "🧹 možnost B 25",
        "resultA": "Výsledek A 25",
        "resultB": "Výsledek B 25"
    },
    {
        "question": "Harry Potter volba 26?",
        "optionA": "🪄 možnost A 26",
        "optionB": "🧹 možnost B 26",
        "resultA": "Výsledek A 26",
        "resultB": "Výsledek B 26"
    },
    {
        "question": "Harry Potter volba 27?",
        "optionA": "🪄 možnost A 27",
        "optionB": "🧹 možnost B 27",
        "resultA": "Výsledek A 27",
        "resultB": "Výsledek B 27"
    },
    {
        "question": "Harry Potter volba 28?",
        "optionA": "🪄 možnost A 28",
        "optionB": "🧹 možnost B 28",
        "resultA": "Výsledek A 28",
        "resultB": "Výsledek B 28"
    },
    {
        "question": "Harry Potter volba 29?",
        "optionA": "🪄 možnost A 29",
        "optionB": "🧹 možnost B 29",
        "resultA": "Výsledek A 29",
        "resultB": "Výsledek B 29"
    },
    {
        "question": "Harry Potter volba 30?",
        "optionA": "🪄 možnost A 30",
        "optionB": "🧹 možnost B 30",
        "resultA": "Výsledek A 30",
        "resultB": "Výsledek B 30"
    },
    {
        "question": "Harry Potter volba 31?",
        "optionA": "🪄 možnost A 31",
        "optionB": "🧹 možnost B 31",
        "resultA": "Výsledek A 31",
        "resultB": "Výsledek B 31"
    },
    {
        "question": "Harry Potter volba 32?",
        "optionA": "🪄 možnost A 32",
        "optionB": "🧹 možnost B 32",
        "resultA": "Výsledek A 32",
        "resultB": "Výsledek B 32"
    },
    {
        "question": "Harry Potter volba 33?",
        "optionA": "🪄 možnost A 33",
        "optionB": "🧹 možnost B 33",
        "resultA": "Výsledek A 33",
        "resultB": "Výsledek B 33"
    },
    {
        "question": "Harry Potter volba 34?",
        "optionA": "🪄 možnost A 34",
        "optionB": "🧹 možnost B 34",
        "resultA": "Výsledek A 34",
        "resultB": "Výsledek B 34"
    },
    {
        "question": "Harry Potter volba 35?",
        "optionA": "🪄 možnost A 35",
        "optionB": "🧹 možnost B 35",
        "resultA": "Výsledek A 35",
        "resultB": "Výsledek B 35"
    },
    {
        "question": "Harry Potter volba 36?",
        "optionA": "🪄 možnost A 36",
        "optionB": "🧹 možnost B 36",
        "resultA": "Výsledek A 36",
        "resultB": "Výsledek B 36"
    },
    {
        "question": "Harry Potter volba 37?",
        "optionA": "🪄 možnost A 37",
        "optionB": "🧹 možnost B 37",
        "resultA": "Výsledek A 37",
        "resultB": "Výsledek B 37"
    },
    {
        "question": "Harry Potter volba 38?",
        "optionA": "🪄 možnost A 38",
        "optionB": "🧹 možnost B 38",
        "resultA": "Výsledek A 38",
        "resultB": "Výsledek B 38"
    },
    {
        "question": "Harry Potter volba 39?",
        "optionA": "🪄 možnost A 39",
        "optionB": "🧹 možnost B 39",
        "resultA": "Výsledek A 39",
        "resultB": "Výsledek B 39"
    },
    {
        "question": "Harry Potter volba 40?",
        "optionA": "🪄 možnost A 40",
        "optionB": "🧹 možnost B 40",
        "resultA": "Výsledek A 40",
        "resultB": "Výsledek B 40"
    },
    {
        "question": "Harry Potter volba 41?",
        "optionA": "🪄 možnost A 41",
        "optionB": "🧹 možnost B 41",
        "resultA": "Výsledek A 41",
        "resultB": "Výsledek B 41"
    },
    {
        "question": "Harry Potter volba 42?",
        "optionA": "🪄 možnost A 42",
        "optionB": "🧹 možnost B 42",
        "resultA": "Výsledek A 42",
        "resultB": "Výsledek B 42"
    },
    {
        "question": "Harry Potter volba 43?",
        "optionA": "🪄 možnost A 43",
        "optionB": "🧹 možnost B 43",
        "resultA": "Výsledek A 43",
        "resultB": "Výsledek B 43"
    },
    {
        "question": "Harry Potter volba 44?",
        "optionA": "🪄 možnost A 44",
        "optionB": "🧹 možnost B 44",
        "resultA": "Výsledek A 44",
        "resultB": "Výsledek B 44"
    },
    {
        "question": "Harry Potter volba 45?",
        "optionA": "🪄 možnost A 45",
        "optionB": "🧹 možnost B 45",
        "resultA": "Výsledek A 45",
        "resultB": "Výsledek B 45"
    },
    {
        "question": "Harry Potter volba 46?",
        "optionA": "🪄 možnost A 46",
        "optionB": "🧹 možnost B 46",
        "resultA": "Výsledek A 46",
        "resultB": "Výsledek B 46"
    },
    {
        "question": "Harry Potter volba 47?",
        "optionA": "🪄 možnost A 47",
        "optionB": "🧹 možnost B 47",
        "resultA": "Výsledek A 47",
        "resultB": "Výsledek B 47"
    },
    {
        "question": "Harry Potter volba 48?",
        "optionA": "🪄 možnost A 48",
        "optionB": "🧹 možnost B 48",
        "resultA": "Výsledek A 48",
        "resultB": "Výsledek B 48"
    },
    {
        "question": "Harry Potter volba 49?",
        "optionA": "🪄 možnost A 49",
        "optionB": "🧹 možnost B 49",
        "resultA": "Výsledek A 49",
        "resultB": "Výsledek B 49"
    },
    {
        "question": "Harry Potter volba 50?",
        "optionA": "🪄 možnost A 50",
        "optionB": "🧹 možnost B 50",
        "resultA": "Výsledek A 50",
        "resultB": "Výsledek B 50"
    }
];

const tocaWorldCards = [
    {
        "question": "Toca World volba 1?",
        "optionA": "🏙️ možnost A 1",
        "optionB": "🎉 možnost B 1",
        "resultA": "Výsledek A 1",
        "resultB": "Výsledek B 1"
    },
    {
        "question": "Toca World volba 2?",
        "optionA": "🏙️ možnost A 2",
        "optionB": "🎉 možnost B 2",
        "resultA": "Výsledek A 2",
        "resultB": "Výsledek B 2"
    },
    {
        "question": "Toca World volba 3?",
        "optionA": "🏙️ možnost A 3",
        "optionB": "🎉 možnost B 3",
        "resultA": "Výsledek A 3",
        "resultB": "Výsledek B 3"
    },
    {
        "question": "Toca World volba 4?",
        "optionA": "🏙️ možnost A 4",
        "optionB": "🎉 možnost B 4",
        "resultA": "Výsledek A 4",
        "resultB": "Výsledek B 4"
    },
    {
        "question": "Toca World volba 5?",
        "optionA": "🏙️ možnost A 5",
        "optionB": "🎉 možnost B 5",
        "resultA": "Výsledek A 5",
        "resultB": "Výsledek B 5"
    },
    {
        "question": "Toca World volba 6?",
        "optionA": "🏙️ možnost A 6",
        "optionB": "🎉 možnost B 6",
        "resultA": "Výsledek A 6",
        "resultB": "Výsledek B 6"
    },
    {
        "question": "Toca World volba 7?",
        "optionA": "🏙️ možnost A 7",
        "optionB": "🎉 možnost B 7",
        "resultA": "Výsledek A 7",
        "resultB": "Výsledek B 7"
    },
    {
        "question": "Toca World volba 8?",
        "optionA": "🏙️ možnost A 8",
        "optionB": "🎉 možnost B 8",
        "resultA": "Výsledek A 8",
        "resultB": "Výsledek B 8"
    },
    {
        "question": "Toca World volba 9?",
        "optionA": "🏙️ možnost A 9",
        "optionB": "🎉 možnost B 9",
        "resultA": "Výsledek A 9",
        "resultB": "Výsledek B 9"
    },
    {
        "question": "Toca World volba 10?",
        "optionA": "🏙️ možnost A 10",
        "optionB": "🎉 možnost B 10",
        "resultA": "Výsledek A 10",
        "resultB": "Výsledek B 10"
    },
    {
        "question": "Toca World volba 11?",
        "optionA": "🏙️ možnost A 11",
        "optionB": "🎉 možnost B 11",
        "resultA": "Výsledek A 11",
        "resultB": "Výsledek B 11"
    },
    {
        "question": "Toca World volba 12?",
        "optionA": "🏙️ možnost A 12",
        "optionB": "🎉 možnost B 12",
        "resultA": "Výsledek A 12",
        "resultB": "Výsledek B 12"
    },
    {
        "question": "Toca World volba 13?",
        "optionA": "🏙️ možnost A 13",
        "optionB": "🎉 možnost B 13",
        "resultA": "Výsledek A 13",
        "resultB": "Výsledek B 13"
    },
    {
        "question": "Toca World volba 14?",
        "optionA": "🏙️ možnost A 14",
        "optionB": "🎉 možnost B 14",
        "resultA": "Výsledek A 14",
        "resultB": "Výsledek B 14"
    },
    {
        "question": "Toca World volba 15?",
        "optionA": "🏙️ možnost A 15",
        "optionB": "🎉 možnost B 15",
        "resultA": "Výsledek A 15",
        "resultB": "Výsledek B 15"
    },
    {
        "question": "Toca World volba 16?",
        "optionA": "🏙️ možnost A 16",
        "optionB": "🎉 možnost B 16",
        "resultA": "Výsledek A 16",
        "resultB": "Výsledek B 16"
    },
    {
        "question": "Toca World volba 17?",
        "optionA": "🏙️ možnost A 17",
        "optionB": "🎉 možnost B 17",
        "resultA": "Výsledek A 17",
        "resultB": "Výsledek B 17"
    },
    {
        "question": "Toca World volba 18?",
        "optionA": "🏙️ možnost A 18",
        "optionB": "🎉 možnost B 18",
        "resultA": "Výsledek A 18",
        "resultB": "Výsledek B 18"
    },
    {
        "question": "Toca World volba 19?",
        "optionA": "🏙️ možnost A 19",
        "optionB": "🎉 možnost B 19",
        "resultA": "Výsledek A 19",
        "resultB": "Výsledek B 19"
    },
    {
        "question": "Toca World volba 20?",
        "optionA": "🏙️ možnost A 20",
        "optionB": "🎉 možnost B 20",
        "resultA": "Výsledek A 20",
        "resultB": "Výsledek B 20"
    },
    {
        "question": "Toca World volba 21?",
        "optionA": "🏙️ možnost A 21",
        "optionB": "🎉 možnost B 21",
        "resultA": "Výsledek A 21",
        "resultB": "Výsledek B 21"
    },
    {
        "question": "Toca World volba 22?",
        "optionA": "🏙️ možnost A 22",
        "optionB": "🎉 možnost B 22",
        "resultA": "Výsledek A 22",
        "resultB": "Výsledek B 22"
    },
    {
        "question": "Toca World volba 23?",
        "optionA": "🏙️ možnost A 23",
        "optionB": "🎉 možnost B 23",
        "resultA": "Výsledek A 23",
        "resultB": "Výsledek B 23"
    },
    {
        "question": "Toca World volba 24?",
        "optionA": "🏙️ možnost A 24",
        "optionB": "🎉 možnost B 24",
        "resultA": "Výsledek A 24",
        "resultB": "Výsledek B 24"
    },
    {
        "question": "Toca World volba 25?",
        "optionA": "🏙️ možnost A 25",
        "optionB": "🎉 možnost B 25",
        "resultA": "Výsledek A 25",
        "resultB": "Výsledek B 25"
    },
    {
        "question": "Toca World volba 26?",
        "optionA": "🏙️ možnost A 26",
        "optionB": "🎉 možnost B 26",
        "resultA": "Výsledek A 26",
        "resultB": "Výsledek B 26"
    },
    {
        "question": "Toca World volba 27?",
        "optionA": "🏙️ možnost A 27",
        "optionB": "🎉 možnost B 27",
        "resultA": "Výsledek A 27",
        "resultB": "Výsledek B 27"
    },
    {
        "question": "Toca World volba 28?",
        "optionA": "🏙️ možnost A 28",
        "optionB": "🎉 možnost B 28",
        "resultA": "Výsledek A 28",
        "resultB": "Výsledek B 28"
    },
    {
        "question": "Toca World volba 29?",
        "optionA": "🏙️ možnost A 29",
        "optionB": "🎉 možnost B 29",
        "resultA": "Výsledek A 29",
        "resultB": "Výsledek B 29"
    },
    {
        "question": "Toca World volba 30?",
        "optionA": "🏙️ možnost A 30",
        "optionB": "🎉 možnost B 30",
        "resultA": "Výsledek A 30",
        "resultB": "Výsledek B 30"
    },
    {
        "question": "Toca World volba 31?",
        "optionA": "🏙️ možnost A 31",
        "optionB": "🎉 možnost B 31",
        "resultA": "Výsledek A 31",
        "resultB": "Výsledek B 31"
    },
    {
        "question": "Toca World volba 32?",
        "optionA": "🏙️ možnost A 32",
        "optionB": "🎉 možnost B 32",
        "resultA": "Výsledek A 32",
        "resultB": "Výsledek B 32"
    },
    {
        "question": "Toca World volba 33?",
        "optionA": "🏙️ možnost A 33",
        "optionB": "🎉 možnost B 33",
        "resultA": "Výsledek A 33",
        "resultB": "Výsledek B 33"
    },
    {
        "question": "Toca World volba 34?",
        "optionA": "🏙️ možnost A 34",
        "optionB": "🎉 možnost B 34",
        "resultA": "Výsledek A 34",
        "resultB": "Výsledek B 34"
    },
    {
        "question": "Toca World volba 35?",
        "optionA": "🏙️ možnost A 35",
        "optionB": "🎉 možnost B 35",
        "resultA": "Výsledek A 35",
        "resultB": "Výsledek B 35"
    },
    {
        "question": "Toca World volba 36?",
        "optionA": "🏙️ možnost A 36",
        "optionB": "🎉 možnost B 36",
        "resultA": "Výsledek A 36",
        "resultB": "Výsledek B 36"
    },
    {
        "question": "Toca World volba 37?",
        "optionA": "🏙️ možnost A 37",
        "optionB": "🎉 možnost B 37",
        "resultA": "Výsledek A 37",
        "resultB": "Výsledek B 37"
    },
    {
        "question": "Toca World volba 38?",
        "optionA": "🏙️ možnost A 38",
        "optionB": "🎉 možnost B 38",
        "resultA": "Výsledek A 38",
        "resultB": "Výsledek B 38"
    },
    {
        "question": "Toca World volba 39?",
        "optionA": "🏙️ možnost A 39",
        "optionB": "🎉 možnost B 39",
        "resultA": "Výsledek A 39",
        "resultB": "Výsledek B 39"
    },
    {
        "question": "Toca World volba 40?",
        "optionA": "🏙️ možnost A 40",
        "optionB": "🎉 možnost B 40",
        "resultA": "Výsledek A 40",
        "resultB": "Výsledek B 40"
    },
    {
        "question": "Toca World volba 41?",
        "optionA": "🏙️ možnost A 41",
        "optionB": "🎉 možnost B 41",
        "resultA": "Výsledek A 41",
        "resultB": "Výsledek B 41"
    },
    {
        "question": "Toca World volba 42?",
        "optionA": "🏙️ možnost A 42",
        "optionB": "🎉 možnost B 42",
        "resultA": "Výsledek A 42",
        "resultB": "Výsledek B 42"
    },
    {
        "question": "Toca World volba 43?",
        "optionA": "🏙️ možnost A 43",
        "optionB": "🎉 možnost B 43",
        "resultA": "Výsledek A 43",
        "resultB": "Výsledek B 43"
    },
    {
        "question": "Toca World volba 44?",
        "optionA": "🏙️ možnost A 44",
        "optionB": "🎉 možnost B 44",
        "resultA": "Výsledek A 44",
        "resultB": "Výsledek B 44"
    },
    {
        "question": "Toca World volba 45?",
        "optionA": "🏙️ možnost A 45",
        "optionB": "🎉 možnost B 45",
        "resultA": "Výsledek A 45",
        "resultB": "Výsledek B 45"
    },
    {
        "question": "Toca World volba 46?",
        "optionA": "🏙️ možnost A 46",
        "optionB": "🎉 možnost B 46",
        "resultA": "Výsledek A 46",
        "resultB": "Výsledek B 46"
    },
    {
        "question": "Toca World volba 47?",
        "optionA": "🏙️ možnost A 47",
        "optionB": "🎉 možnost B 47",
        "resultA": "Výsledek A 47",
        "resultB": "Výsledek B 47"
    },
    {
        "question": "Toca World volba 48?",
        "optionA": "🏙️ možnost A 48",
        "optionB": "🎉 možnost B 48",
        "resultA": "Výsledek A 48",
        "resultB": "Výsledek B 48"
    },
    {
        "question": "Toca World volba 49?",
        "optionA": "🏙️ možnost A 49",
        "optionB": "🎉 možnost B 49",
        "resultA": "Výsledek A 49",
        "resultB": "Výsledek B 49"
    },
    {
        "question": "Toca World volba 50?",
        "optionA": "🏙️ možnost A 50",
        "optionB": "🎉 možnost B 50",
        "resultA": "Výsledek A 50",
        "resultB": "Výsledek B 50"
    }
];

const pokemonCards = [
    {
        "question": "Pokémon volba 1?",
        "optionA": "🐾 možnost A 1",
        "optionB": "⭐ možnost B 1",
        "resultA": "Výsledek A 1",
        "resultB": "Výsledek B 1"
    },
    {
        "question": "Pokémon volba 2?",
        "optionA": "🐾 možnost A 2",
        "optionB": "⭐ možnost B 2",
        "resultA": "Výsledek A 2",
        "resultB": "Výsledek B 2"
    },
    {
        "question": "Pokémon volba 3?",
        "optionA": "🐾 možnost A 3",
        "optionB": "⭐ možnost B 3",
        "resultA": "Výsledek A 3",
        "resultB": "Výsledek B 3"
    },
    {
        "question": "Pokémon volba 4?",
        "optionA": "🐾 možnost A 4",
        "optionB": "⭐ možnost B 4",
        "resultA": "Výsledek A 4",
        "resultB": "Výsledek B 4"
    },
    {
        "question": "Pokémon volba 5?",
        "optionA": "🐾 možnost A 5",
        "optionB": "⭐ možnost B 5",
        "resultA": "Výsledek A 5",
        "resultB": "Výsledek B 5"
    },
    {
        "question": "Pokémon volba 6?",
        "optionA": "🐾 možnost A 6",
        "optionB": "⭐ možnost B 6",
        "resultA": "Výsledek A 6",
        "resultB": "Výsledek B 6"
    },
    {
        "question": "Pokémon volba 7?",
        "optionA": "🐾 možnost A 7",
        "optionB": "⭐ možnost B 7",
        "resultA": "Výsledek A 7",
        "resultB": "Výsledek B 7"
    },
    {
        "question": "Pokémon volba 8?",
        "optionA": "🐾 možnost A 8",
        "optionB": "⭐ možnost B 8",
        "resultA": "Výsledek A 8",
        "resultB": "Výsledek B 8"
    },
    {
        "question": "Pokémon volba 9?",
        "optionA": "🐾 možnost A 9",
        "optionB": "⭐ možnost B 9",
        "resultA": "Výsledek A 9",
        "resultB": "Výsledek B 9"
    },
    {
        "question": "Pokémon volba 10?",
        "optionA": "🐾 možnost A 10",
        "optionB": "⭐ možnost B 10",
        "resultA": "Výsledek A 10",
        "resultB": "Výsledek B 10"
    },
    {
        "question": "Pokémon volba 11?",
        "optionA": "🐾 možnost A 11",
        "optionB": "⭐ možnost B 11",
        "resultA": "Výsledek A 11",
        "resultB": "Výsledek B 11"
    },
    {
        "question": "Pokémon volba 12?",
        "optionA": "🐾 možnost A 12",
        "optionB": "⭐ možnost B 12",
        "resultA": "Výsledek A 12",
        "resultB": "Výsledek B 12"
    },
    {
        "question": "Pokémon volba 13?",
        "optionA": "🐾 možnost A 13",
        "optionB": "⭐ možnost B 13",
        "resultA": "Výsledek A 13",
        "resultB": "Výsledek B 13"
    },
    {
        "question": "Pokémon volba 14?",
        "optionA": "🐾 možnost A 14",
        "optionB": "⭐ možnost B 14",
        "resultA": "Výsledek A 14",
        "resultB": "Výsledek B 14"
    },
    {
        "question": "Pokémon volba 15?",
        "optionA": "🐾 možnost A 15",
        "optionB": "⭐ možnost B 15",
        "resultA": "Výsledek A 15",
        "resultB": "Výsledek B 15"
    },
    {
        "question": "Pokémon volba 16?",
        "optionA": "🐾 možnost A 16",
        "optionB": "⭐ možnost B 16",
        "resultA": "Výsledek A 16",
        "resultB": "Výsledek B 16"
    },
    {
        "question": "Pokémon volba 17?",
        "optionA": "🐾 možnost A 17",
        "optionB": "⭐ možnost B 17",
        "resultA": "Výsledek A 17",
        "resultB": "Výsledek B 17"
    },
    {
        "question": "Pokémon volba 18?",
        "optionA": "🐾 možnost A 18",
        "optionB": "⭐ možnost B 18",
        "resultA": "Výsledek A 18",
        "resultB": "Výsledek B 18"
    },
    {
        "question": "Pokémon volba 19?",
        "optionA": "🐾 možnost A 19",
        "optionB": "⭐ možnost B 19",
        "resultA": "Výsledek A 19",
        "resultB": "Výsledek B 19"
    },
    {
        "question": "Pokémon volba 20?",
        "optionA": "🐾 možnost A 20",
        "optionB": "⭐ možnost B 20",
        "resultA": "Výsledek A 20",
        "resultB": "Výsledek B 20"
    },
    {
        "question": "Pokémon volba 21?",
        "optionA": "🐾 možnost A 21",
        "optionB": "⭐ možnost B 21",
        "resultA": "Výsledek A 21",
        "resultB": "Výsledek B 21"
    },
    {
        "question": "Pokémon volba 22?",
        "optionA": "🐾 možnost A 22",
        "optionB": "⭐ možnost B 22",
        "resultA": "Výsledek A 22",
        "resultB": "Výsledek B 22"
    },
    {
        "question": "Pokémon volba 23?",
        "optionA": "🐾 možnost A 23",
        "optionB": "⭐ možnost B 23",
        "resultA": "Výsledek A 23",
        "resultB": "Výsledek B 23"
    },
    {
        "question": "Pokémon volba 24?",
        "optionA": "🐾 možnost A 24",
        "optionB": "⭐ možnost B 24",
        "resultA": "Výsledek A 24",
        "resultB": "Výsledek B 24"
    },
    {
        "question": "Pokémon volba 25?",
        "optionA": "🐾 možnost A 25",
        "optionB": "⭐ možnost B 25",
        "resultA": "Výsledek A 25",
        "resultB": "Výsledek B 25"
    },
    {
        "question": "Pokémon volba 26?",
        "optionA": "🐾 možnost A 26",
        "optionB": "⭐ možnost B 26",
        "resultA": "Výsledek A 26",
        "resultB": "Výsledek B 26"
    },
    {
        "question": "Pokémon volba 27?",
        "optionA": "🐾 možnost A 27",
        "optionB": "⭐ možnost B 27",
        "resultA": "Výsledek A 27",
        "resultB": "Výsledek B 27"
    },
    {
        "question": "Pokémon volba 28?",
        "optionA": "🐾 možnost A 28",
        "optionB": "⭐ možnost B 28",
        "resultA": "Výsledek A 28",
        "resultB": "Výsledek B 28"
    },
    {
        "question": "Pokémon volba 29?",
        "optionA": "🐾 možnost A 29",
        "optionB": "⭐ možnost B 29",
        "resultA": "Výsledek A 29",
        "resultB": "Výsledek B 29"
    },
    {
        "question": "Pokémon volba 30?",
        "optionA": "🐾 možnost A 30",
        "optionB": "⭐ možnost B 30",
        "resultA": "Výsledek A 30",
        "resultB": "Výsledek B 30"
    },
    {
        "question": "Pokémon volba 31?",
        "optionA": "🐾 možnost A 31",
        "optionB": "⭐ možnost B 31",
        "resultA": "Výsledek A 31",
        "resultB": "Výsledek B 31"
    },
    {
        "question": "Pokémon volba 32?",
        "optionA": "🐾 možnost A 32",
        "optionB": "⭐ možnost B 32",
        "resultA": "Výsledek A 32",
        "resultB": "Výsledek B 32"
    },
    {
        "question": "Pokémon volba 33?",
        "optionA": "🐾 možnost A 33",
        "optionB": "⭐ možnost B 33",
        "resultA": "Výsledek A 33",
        "resultB": "Výsledek B 33"
    },
    {
        "question": "Pokémon volba 34?",
        "optionA": "🐾 možnost A 34",
        "optionB": "⭐ možnost B 34",
        "resultA": "Výsledek A 34",
        "resultB": "Výsledek B 34"
    },
    {
        "question": "Pokémon volba 35?",
        "optionA": "🐾 možnost A 35",
        "optionB": "⭐ možnost B 35",
        "resultA": "Výsledek A 35",
        "resultB": "Výsledek B 35"
    },
    {
        "question": "Pokémon volba 36?",
        "optionA": "🐾 možnost A 36",
        "optionB": "⭐ možnost B 36",
        "resultA": "Výsledek A 36",
        "resultB": "Výsledek B 36"
    },
    {
        "question": "Pokémon volba 37?",
        "optionA": "🐾 možnost A 37",
        "optionB": "⭐ možnost B 37",
        "resultA": "Výsledek A 37",
        "resultB": "Výsledek B 37"
    },
    {
        "question": "Pokémon volba 38?",
        "optionA": "🐾 možnost A 38",
        "optionB": "⭐ možnost B 38",
        "resultA": "Výsledek A 38",
        "resultB": "Výsledek B 38"
    },
    {
        "question": "Pokémon volba 39?",
        "optionA": "🐾 možnost A 39",
        "optionB": "⭐ možnost B 39",
        "resultA": "Výsledek A 39",
        "resultB": "Výsledek B 39"
    },
    {
        "question": "Pokémon volba 40?",
        "optionA": "🐾 možnost A 40",
        "optionB": "⭐ možnost B 40",
        "resultA": "Výsledek A 40",
        "resultB": "Výsledek B 40"
    },
    {
        "question": "Pokémon volba 41?",
        "optionA": "🐾 možnost A 41",
        "optionB": "⭐ možnost B 41",
        "resultA": "Výsledek A 41",
        "resultB": "Výsledek B 41"
    },
    {
        "question": "Pokémon volba 42?",
        "optionA": "🐾 možnost A 42",
        "optionB": "⭐ možnost B 42",
        "resultA": "Výsledek A 42",
        "resultB": "Výsledek B 42"
    },
    {
        "question": "Pokémon volba 43?",
        "optionA": "🐾 možnost A 43",
        "optionB": "⭐ možnost B 43",
        "resultA": "Výsledek A 43",
        "resultB": "Výsledek B 43"
    },
    {
        "question": "Pokémon volba 44?",
        "optionA": "🐾 možnost A 44",
        "optionB": "⭐ možnost B 44",
        "resultA": "Výsledek A 44",
        "resultB": "Výsledek B 44"
    },
    {
        "question": "Pokémon volba 45?",
        "optionA": "🐾 možnost A 45",
        "optionB": "⭐ možnost B 45",
        "resultA": "Výsledek A 45",
        "resultB": "Výsledek B 45"
    },
    {
        "question": "Pokémon volba 46?",
        "optionA": "🐾 možnost A 46",
        "optionB": "⭐ možnost B 46",
        "resultA": "Výsledek A 46",
        "resultB": "Výsledek B 46"
    },
    {
        "question": "Pokémon volba 47?",
        "optionA": "🐾 možnost A 47",
        "optionB": "⭐ možnost B 47",
        "resultA": "Výsledek A 47",
        "resultB": "Výsledek B 47"
    },
    {
        "question": "Pokémon volba 48?",
        "optionA": "🐾 možnost A 48",
        "optionB": "⭐ možnost B 48",
        "resultA": "Výsledek A 48",
        "resultB": "Výsledek B 48"
    },
    {
        "question": "Pokémon volba 49?",
        "optionA": "🐾 možnost A 49",
        "optionB": "⭐ možnost B 49",
        "resultA": "Výsledek A 49",
        "resultB": "Výsledek B 49"
    },
    {
        "question": "Pokémon volba 50?",
        "optionA": "🐾 možnost A 50",
        "optionB": "⭐ možnost B 50",
        "resultA": "Výsledek A 50",
        "resultB": "Výsledek B 50"
    }
];

const robloxCards = [
    {
        "question": "Roblox volba 1?",
        "optionA": "🎮 možnost A 1",
        "optionB": "🏗️ možnost B 1",
        "resultA": "Výsledek A 1",
        "resultB": "Výsledek B 1"
    },
    {
        "question": "Roblox volba 2?",
        "optionA": "🎮 možnost A 2",
        "optionB": "🏗️ možnost B 2",
        "resultA": "Výsledek A 2",
        "resultB": "Výsledek B 2"
    },
    {
        "question": "Roblox volba 3?",
        "optionA": "🎮 možnost A 3",
        "optionB": "🏗️ možnost B 3",
        "resultA": "Výsledek A 3",
        "resultB": "Výsledek B 3"
    },
    {
        "question": "Roblox volba 4?",
        "optionA": "🎮 možnost A 4",
        "optionB": "🏗️ možnost B 4",
        "resultA": "Výsledek A 4",
        "resultB": "Výsledek B 4"
    },
    {
        "question": "Roblox volba 5?",
        "optionA": "🎮 možnost A 5",
        "optionB": "🏗️ možnost B 5",
        "resultA": "Výsledek A 5",
        "resultB": "Výsledek B 5"
    },
    {
        "question": "Roblox volba 6?",
        "optionA": "🎮 možnost A 6",
        "optionB": "🏗️ možnost B 6",
        "resultA": "Výsledek A 6",
        "resultB": "Výsledek B 6"
    },
    {
        "question": "Roblox volba 7?",
        "optionA": "🎮 možnost A 7",
        "optionB": "🏗️ možnost B 7",
        "resultA": "Výsledek A 7",
        "resultB": "Výsledek B 7"
    },
    {
        "question": "Roblox volba 8?",
        "optionA": "🎮 možnost A 8",
        "optionB": "🏗️ možnost B 8",
        "resultA": "Výsledek A 8",
        "resultB": "Výsledek B 8"
    },
    {
        "question": "Roblox volba 9?",
        "optionA": "🎮 možnost A 9",
        "optionB": "🏗️ možnost B 9",
        "resultA": "Výsledek A 9",
        "resultB": "Výsledek B 9"
    },
    {
        "question": "Roblox volba 10?",
        "optionA": "🎮 možnost A 10",
        "optionB": "🏗️ možnost B 10",
        "resultA": "Výsledek A 10",
        "resultB": "Výsledek B 10"
    },
    {
        "question": "Roblox volba 11?",
        "optionA": "🎮 možnost A 11",
        "optionB": "🏗️ možnost B 11",
        "resultA": "Výsledek A 11",
        "resultB": "Výsledek B 11"
    },
    {
        "question": "Roblox volba 12?",
        "optionA": "🎮 možnost A 12",
        "optionB": "🏗️ možnost B 12",
        "resultA": "Výsledek A 12",
        "resultB": "Výsledek B 12"
    },
    {
        "question": "Roblox volba 13?",
        "optionA": "🎮 možnost A 13",
        "optionB": "🏗️ možnost B 13",
        "resultA": "Výsledek A 13",
        "resultB": "Výsledek B 13"
    },
    {
        "question": "Roblox volba 14?",
        "optionA": "🎮 možnost A 14",
        "optionB": "🏗️ možnost B 14",
        "resultA": "Výsledek A 14",
        "resultB": "Výsledek B 14"
    },
    {
        "question": "Roblox volba 15?",
        "optionA": "🎮 možnost A 15",
        "optionB": "🏗️ možnost B 15",
        "resultA": "Výsledek A 15",
        "resultB": "Výsledek B 15"
    },
    {
        "question": "Roblox volba 16?",
        "optionA": "🎮 možnost A 16",
        "optionB": "🏗️ možnost B 16",
        "resultA": "Výsledek A 16",
        "resultB": "Výsledek B 16"
    },
    {
        "question": "Roblox volba 17?",
        "optionA": "🎮 možnost A 17",
        "optionB": "🏗️ možnost B 17",
        "resultA": "Výsledek A 17",
        "resultB": "Výsledek B 17"
    },
    {
        "question": "Roblox volba 18?",
        "optionA": "🎮 možnost A 18",
        "optionB": "🏗️ možnost B 18",
        "resultA": "Výsledek A 18",
        "resultB": "Výsledek B 18"
    },
    {
        "question": "Roblox volba 19?",
        "optionA": "🎮 možnost A 19",
        "optionB": "🏗️ možnost B 19",
        "resultA": "Výsledek A 19",
        "resultB": "Výsledek B 19"
    },
    {
        "question": "Roblox volba 20?",
        "optionA": "🎮 možnost A 20",
        "optionB": "🏗️ možnost B 20",
        "resultA": "Výsledek A 20",
        "resultB": "Výsledek B 20"
    },
    {
        "question": "Roblox volba 21?",
        "optionA": "🎮 možnost A 21",
        "optionB": "🏗️ možnost B 21",
        "resultA": "Výsledek A 21",
        "resultB": "Výsledek B 21"
    },
    {
        "question": "Roblox volba 22?",
        "optionA": "🎮 možnost A 22",
        "optionB": "🏗️ možnost B 22",
        "resultA": "Výsledek A 22",
        "resultB": "Výsledek B 22"
    },
    {
        "question": "Roblox volba 23?",
        "optionA": "🎮 možnost A 23",
        "optionB": "🏗️ možnost B 23",
        "resultA": "Výsledek A 23",
        "resultB": "Výsledek B 23"
    },
    {
        "question": "Roblox volba 24?",
        "optionA": "🎮 možnost A 24",
        "optionB": "🏗️ možnost B 24",
        "resultA": "Výsledek A 24",
        "resultB": "Výsledek B 24"
    },
    {
        "question": "Roblox volba 25?",
        "optionA": "🎮 možnost A 25",
        "optionB": "🏗️ možnost B 25",
        "resultA": "Výsledek A 25",
        "resultB": "Výsledek B 25"
    },
    {
        "question": "Roblox volba 26?",
        "optionA": "🎮 možnost A 26",
        "optionB": "🏗️ možnost B 26",
        "resultA": "Výsledek A 26",
        "resultB": "Výsledek B 26"
    },
    {
        "question": "Roblox volba 27?",
        "optionA": "🎮 možnost A 27",
        "optionB": "🏗️ možnost B 27",
        "resultA": "Výsledek A 27",
        "resultB": "Výsledek B 27"
    },
    {
        "question": "Roblox volba 28?",
        "optionA": "🎮 možnost A 28",
        "optionB": "🏗️ možnost B 28",
        "resultA": "Výsledek A 28",
        "resultB": "Výsledek B 28"
    },
    {
        "question": "Roblox volba 29?",
        "optionA": "🎮 možnost A 29",
        "optionB": "🏗️ možnost B 29",
        "resultA": "Výsledek A 29",
        "resultB": "Výsledek B 29"
    },
    {
        "question": "Roblox volba 30?",
        "optionA": "🎮 možnost A 30",
        "optionB": "🏗️ možnost B 30",
        "resultA": "Výsledek A 30",
        "resultB": "Výsledek B 30"
    },
    {
        "question": "Roblox volba 31?",
        "optionA": "🎮 možnost A 31",
        "optionB": "🏗️ možnost B 31",
        "resultA": "Výsledek A 31",
        "resultB": "Výsledek B 31"
    },
    {
        "question": "Roblox volba 32?",
        "optionA": "🎮 možnost A 32",
        "optionB": "🏗️ možnost B 32",
        "resultA": "Výsledek A 32",
        "resultB": "Výsledek B 32"
    },
    {
        "question": "Roblox volba 33?",
        "optionA": "🎮 možnost A 33",
        "optionB": "🏗️ možnost B 33",
        "resultA": "Výsledek A 33",
        "resultB": "Výsledek B 33"
    },
    {
        "question": "Roblox volba 34?",
        "optionA": "🎮 možnost A 34",
        "optionB": "🏗️ možnost B 34",
        "resultA": "Výsledek A 34",
        "resultB": "Výsledek B 34"
    },
    {
        "question": "Roblox volba 35?",
        "optionA": "🎮 možnost A 35",
        "optionB": "🏗️ možnost B 35",
        "resultA": "Výsledek A 35",
        "resultB": "Výsledek B 35"
    },
    {
        "question": "Roblox volba 36?",
        "optionA": "🎮 možnost A 36",
        "optionB": "🏗️ možnost B 36",
        "resultA": "Výsledek A 36",
        "resultB": "Výsledek B 36"
    },
    {
        "question": "Roblox volba 37?",
        "optionA": "🎮 možnost A 37",
        "optionB": "🏗️ možnost B 37",
        "resultA": "Výsledek A 37",
        "resultB": "Výsledek B 37"
    },
    {
        "question": "Roblox volba 38?",
        "optionA": "🎮 možnost A 38",
        "optionB": "🏗️ možnost B 38",
        "resultA": "Výsledek A 38",
        "resultB": "Výsledek B 38"
    },
    {
        "question": "Roblox volba 39?",
        "optionA": "🎮 možnost A 39",
        "optionB": "🏗️ možnost B 39",
        "resultA": "Výsledek A 39",
        "resultB": "Výsledek B 39"
    },
    {
        "question": "Roblox volba 40?",
        "optionA": "🎮 možnost A 40",
        "optionB": "🏗️ možnost B 40",
        "resultA": "Výsledek A 40",
        "resultB": "Výsledek B 40"
    },
    {
        "question": "Roblox volba 41?",
        "optionA": "🎮 možnost A 41",
        "optionB": "🏗️ možnost B 41",
        "resultA": "Výsledek A 41",
        "resultB": "Výsledek B 41"
    },
    {
        "question": "Roblox volba 42?",
        "optionA": "🎮 možnost A 42",
        "optionB": "🏗️ možnost B 42",
        "resultA": "Výsledek A 42",
        "resultB": "Výsledek B 42"
    },
    {
        "question": "Roblox volba 43?",
        "optionA": "🎮 možnost A 43",
        "optionB": "🏗️ možnost B 43",
        "resultA": "Výsledek A 43",
        "resultB": "Výsledek B 43"
    },
    {
        "question": "Roblox volba 44?",
        "optionA": "🎮 možnost A 44",
        "optionB": "🏗️ možnost B 44",
        "resultA": "Výsledek A 44",
        "resultB": "Výsledek B 44"
    },
    {
        "question": "Roblox volba 45?",
        "optionA": "🎮 možnost A 45",
        "optionB": "🏗️ možnost B 45",
        "resultA": "Výsledek A 45",
        "resultB": "Výsledek B 45"
    },
    {
        "question": "Roblox volba 46?",
        "optionA": "🎮 možnost A 46",
        "optionB": "🏗️ možnost B 46",
        "resultA": "Výsledek A 46",
        "resultB": "Výsledek B 46"
    },
    {
        "question": "Roblox volba 47?",
        "optionA": "🎮 možnost A 47",
        "optionB": "🏗️ možnost B 47",
        "resultA": "Výsledek A 47",
        "resultB": "Výsledek B 47"
    },
    {
        "question": "Roblox volba 48?",
        "optionA": "🎮 možnost A 48",
        "optionB": "🏗️ možnost B 48",
        "resultA": "Výsledek A 48",
        "resultB": "Výsledek B 48"
    },
    {
        "question": "Roblox volba 49?",
        "optionA": "🎮 možnost A 49",
        "optionB": "🏗️ možnost B 49",
        "resultA": "Výsledek A 49",
        "resultB": "Výsledek B 49"
    },
    {
        "question": "Roblox volba 50?",
        "optionA": "🎮 možnost A 50",
        "optionB": "🏗️ možnost B 50",
        "resultA": "Výsledek A 50",
        "resultB": "Výsledek B 50"
    }
];

