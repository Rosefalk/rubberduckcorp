var config = {
    locales: [
        {
            language: 'da',
            flag: 'da-dk'
        },
        {
            language: 'en',
            flag: 'en-gb'
        }
    ]
};

var daDk = {
    navigation: [{
        name: 'Bestil',
        url: 'order.html'
    }],
    pages: {
        home: {
            image: `assets/images/badeand.jpg`,
            sections: {
                welcome: {
                    title: `Velkommen til RubberduckCorp`,
                    text: `Vi er et firma der specialicerer os i produktionen af badeænder. Det er det vi brænder for og vi er specialister.<br />
                    Ingen producerer bedre badeænder end os. Spørg hvem som helst; De vil være enige!`
                },
                superiority: {
                    title: `Vores badeænder er fænomenale`,
                    titleJest: `Du har alligevel intet valg`,
                    text: `Badeænder er ikke bare søde, de er også beroligende når du bader i badekar eller tager dig en bruser.<br />
                    De er elskede af unge og gamle og er nærmest garanteret også elsket af dig!
                    Uanset hvilken badeand du er efter - har vi den!*`,
                    textJest: `*Så længe du vælger fra vores sortiment`
                },
                superiorityBullets: {
                    title: `Seks hurtige`,
                    bullets: [
                        `Vores badeænder er udelukkende lavet af lokale materialer.`,
                        `Hver badeand er økologisk og kréeret af mænd med fuldskæg.`,
                        `Barbara Moleko ville vælge os hvis hun anede vi eksisterer*`,
                        `Hver ælling er certificeret fri for ondskab.`,
                        `Vores ænder kommer i 10 smagsvarianter og 100 farver.`,
                        `Hvis du ikke køber en and så græder en baby - monster.`
                    ],
                    bulletsJest: `*overhørt af vores erstattelige praktikant henover frokost`
                },
                callToAction: {
                    title: `Overbevist?`,
                    buttonText: `Køb nu!`
                }
            }
        },
        order: {
            image: `assets/images/badeand2.jpg`,
            sections: {
                welcome: {
                    title: `Klar til at bestille din badeand?`,
                    text: `Brug formularen nedenfor og badeanden vil være din inden du kan nå at sige "rap".`
                },
                orderForm: {
                    name: `Navn`,
                    lastName: `Efternavn`,
                    telephone: `Telefon`,
                    email: `Email`,
                    submit: `Indsend`,
                    errorName: `Indtast venligst dit navn.`,
                    errorLastName: `Indtast venligst dit efternavn.`,
                    errorTelephone: `Indtast venligst et telefonnummer`,
                    errorEmail: `Indtast venligst en gyldig email`,
                    submitOk: `Af hjertet tak!`
                }
            }
        }
    }
}

var enGb = {
    navigation: [{
        name: 'Order',
        url: '#'
    }],
    pages: {
        home: {
            image: `assets/images/badeand.jpg`,
            sections: {
                welcome: {
                    title: `Welcome to Rubberduck-Corp`,
                    text: `We're a company that specializes in the production of rubber ducks. It is all we do and we do it well.
                            No-one makes better rubber ducks than us. Ask anyone; they'll aggree!`
                },
                superiority: {
                    title: `Our product is superior`,
                    titleJest: `We are basically your only choice`,
                    text: `Ducks are not only cute, they instill calmness when you're in a bathtub or showering.<br />
                            They're equally loved by the young and old and practically guaranteed to be loved by you as well!
                            It doesn't matter what kind of rubber duck you're after - we got it!*`,
                    textJest: `*As long as you choose within our collection of ducks.`
                },
                superiorityBullets: {
                    title: `Six fast ones`,
                    bullets: [
                        `Our rubber ducks are made of premium locally sourced material.`,
                        `Each rubber duck is organic and hand crafted by men with beards.`,
                        `Barbara Moleko would choose us if she had any idea we existed.*`,
                        `Every duckling has been certifiably checked for evil.`,
                        `Our ducks come in 10 flavours and 100 colours`,
                        `If you don't buy a duck; A baby cries - You monster.`
                    ],
                    bulletsJest: `*this was overheard by our replaceable intern over lunch.`
                },
                callToAction: {
                    title: `Heard enough?`,
                    buttonText: `Buy now!`
                }
            }
        },
        order: {
            image: `assets/images/badeand2.jpg`,
            sections: {
                welcome: {
                    title: `Ready to order your very own duck?`,
                    text: `Use the form below and it will be with you before you can say "quack".`
                },
                orderForm: {
                    name: `Name`,
                    lastName: `Last Name`,
                    telephone: `Telephone`,
                    email: `Email`,
                    submit: `Submit`,
                    errorName: `Please enter your name`,
                    errorLastName: `Please enter your last name`,
                    errorTelephone: `Please enter a telephone number`,
                    errorEmail: `Please enter a valid email`,
                    submitOk: `Thank you!`
                }
            }
        }
    }
}
