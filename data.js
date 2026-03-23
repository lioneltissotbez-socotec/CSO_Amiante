// Données complètes de l'analyse
const analyseData = {
    metadata: {
        personne: "TISSOT BEZ Lionel",
        reference: "2409CGEDI - BI11440000001421",
        evaluateur: "Agent IA d'analyse SOCOTEC"
    },
    
    reperages: [
        // FORME DOCUMENTAIRE
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.1. Organisme, intervenant et signature",
            items: [
                {
                    code: "A0",
                    description: "Désignation de l'intervenant insuffisante (nom et/ou prénom manquant(s))",
                    evaluation: "C",
                    observation: "L'intervenant est clairement identifié : \"Lionel TISSOT BEZ\" (page 1)",
                    action: ""
                },
                {
                    code: "A1",
                    description: "Désignation de la société de diagnostic absente (E) ou insuffisante (R)",
                    evaluation: "C",
                    observation: "SOCOTEC Diagnostic Dijon clairement identifiée avec adresse complète",
                    action: ""
                },
                {
                    code: "A2",
                    description: "Visite et/ou rapport non daté(s)",
                    evaluation: "C",
                    observation: "Dates clairement mentionnées : Visite 27/09/24 & 15/10/24, Rapport 23/10/2024",
                    action: ""
                },
                {
                    code: "A3",
                    description: "Incohérence sur l'identification de l'intervenant",
                    evaluation: "C",
                    observation: "Identification cohérente tout au long du rapport",
                    action: ""
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.2. Donneur d'ordre ou commanditaire",
            items: [
                {
                    code: "A4",
                    description: "Désignation du donneur d'ordre, propriétaire et/ou commanditaire non mentionné(s) (E) ou insuffisante (R)",
                    evaluation: "C",
                    observation: "COMMUNE DE TRESILLEY clairement identifiée avec adresse",
                    action: ""
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.3. Identification / description de l'immeuble",
            items: [
                {
                    code: "A5",
                    description: "Absence d'adresse (E) ou adresse insuffisante (R)",
                    evaluation: "C",
                    observation: "Adresse complète : Bâtiment Mairie, 2, Rue de la Maire – 70190 TRESILLEY",
                    action: ""
                },
                {
                    code: "A6",
                    description: "Description inexistante (E) ou imprécise de l'immeuble (R)",
                    evaluation: "R",
                    observation: "Description sommaire sans caractéristiques architecturales détaillées",
                    action: "Enrichir avec caractéristiques (nb étages, surface, type construction, matériaux principaux)"
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.4. Objet de la mission",
            items: [
                {
                    code: "A7",
                    description: "Objet de la mission (titre du rapport) non défini (E) ou mal défini (R)",
                    evaluation: "C",
                    observation: "Titre clair : Rapport de repérage amiante avant travaux",
                    action: ""
                },
                {
                    code: "A8",
                    description: "Rapport portant sur plusieurs bâtiments",
                    evaluation: "C",
                    observation: "Rapport concerne un seul bâtiment",
                    action: ""
                },
                {
                    code: "A9",
                    description: "Description insuffisante des travaux dans un repérage avant travaux",
                    evaluation: "E",
                    observation: "Pas de description détaillée des travaux projetés",
                    action: "ACTION PRIORITAIRE - Ajouter description précise : nature, localisation, ampleur des travaux"
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.5. Références réglementaires",
            items: [
                {
                    code: "A10",
                    description: "Textes réglementaires cités non adaptés à l'objet déclaré",
                    evaluation: "C",
                    observation: "Textes appropriés : Arrêté 16/07/2019, NF X 46-020, Code du travail",
                    action: ""
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.6. Liste des locaux visités",
            items: [
                {
                    code: "A11",
                    description: "Aucune mention sur les locaux visités et/ou non visités",
                    evaluation: "C",
                    observation: "Section dédiée présente (pages 4-5)",
                    action: ""
                },
                {
                    code: "A12",
                    description: "Justification pour locaux non visités absente (E) ou insuffisante (R)",
                    evaluation: "C",
                    observation: "Justification fournie pour conduit cheminée (absence trappe)",
                    action: ""
                },
                {
                    code: "A13",
                    description: "Liste des locaux concernés non mentionnée",
                    evaluation: "C",
                    observation: "Liste avec tableaux des niveaux et locaux (pages 4-5)",
                    action: ""
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.7. Rapports précédemment réalisés",
            items: [
                {
                    code: "A14",
                    description: "Dates, références, conclusions des rapports antérieurs non indiquées ou erronnées",
                    evaluation: "C",
                    observation: "Section page 7 : Aucun rapport antérieur (Néant)",
                    action: ""
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.8. Laboratoire(s) d'analyses",
            items: [
                {
                    code: "A15",
                    description: "Nom/adresse laboratoire non mentionnés ou non correspondants",
                    evaluation: "R",
                    observation: "PV présents en Annexe 3 mais pas de mention dans corps du rapport",
                    action: "Ajouter nom, adresse et accréditation du laboratoire dans Section III ou IV"
                }
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.9. Organisme certificateur et assurance",
            items: [
                {
                    code: "A16",
                    description: "Opérateur ne disposant pas de la mention nécessaire",
                    evaluation: "C",
                    observation: "Certification SOCOTEC n° DTI/202310-008 valide jusqu'au 28/10/2030",
                    action: ""
                },
                {
                    code: "A17",
                    description: "Copie certificat de compétences non jointe (ou non à jour)",
                    evaluation: "C",
                    observation: "Annexe 5 présente (page 35)",
                    action: ""
                },
                {
                    code: "A18",
                    description: "Assurance, N° police, date de validité non mentionnés ou erronés",
                    evaluation: "C",
                    observation: "AXA n° 37503519275087 échéance 31/12/2024 (Annexe 6)",
                    action: ""
                }
            ]
        },
        
        // CONTENU MÉTIER
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.1. Liste de composants, présence d'amiante",
            items: [
                {
                    code: "A19",
                    description: "Liste des matériaux recherchés erronée",
                    evaluation: "X",
                    observation: "Impossible d'évaluer sans descriptif précis des travaux",
                    action: "Compléter A9 d'abord"
                },
                {
                    code: "A20",
                    description: "Absence mention état de conservation MPCA (Vente, DAPP, DTA)",
                    evaluation: "X",
                    observation: "Repérage avant travaux : état conservation non requis",
                    action: ""
                },
                {
                    code: "A21",
                    description: "Présence/absence amiante sans justification",
                    evaluation: "C",
                    observation: "Tous les matériaux justifiés par analyses laboratoire",
                    action: ""
                },
                {
                    code: "A22",
                    description: "Justification non conforme aux exigences réglementaires",
                    evaluation: "C",
                    observation: "Justifications conformes avec références PV",
                    action: ""
                },
                {
                    code: "A23",
                    description: "Composants sans amiante par nature non cités",
                    evaluation: "R",
                    observation: "Pas de liste systématique des composants exclus",
                    action: "Ajouter section listant composants hors périmètre (date fab, nature matériau)"
                },
                {
                    code: "A24",
                    description: "Regroupement de composants créant confusion",
                    evaluation: "C",
                    observation: "Intitulés clairs et spécifiques",
                    action: ""
                },
                {
                    code: "A25",
                    description: "Composants repérés non rattachés à localisation",
                    evaluation: "C",
                    observation: "Tous les composants ont une localisation précise",
                    action: ""
                },
                {
                    code: "A26",
                    description: "Erreur sur dénomination composant",
                    evaluation: "C",
                    observation: "Dénominations conformes à la nomenclature réglementaire",
                    action: ""
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.2. Descriptif des travaux / Périmètre",
            items: [
                {
                    code: "A27",
                    description: "Descriptif travaux absent ou insuffisant",
                    evaluation: "E",
                    observation: "Aucun descriptif détaillé des travaux",
                    action: "ACTION PRIORITAIRE - Intégrer descriptif complet fourni par donneur d'ordre"
                },
                {
                    code: "A28",
                    description: "Référence document D.O. décrivant travaux absente",
                    evaluation: "E",
                    observation: "Aucune référence au document du donneur d'ordre",
                    action: "ACTION PRIORITAIRE - Mentionner référence (devis, CCTP, note) ou préciser description orale"
                },
                {
                    code: "A29",
                    description: "Descriptif périmètre de repérage absent ou imprécis",
                    evaluation: "R",
                    observation: "Périmètre défini mais sans lien explicite avec travaux",
                    action: "Préciser lien entre périmètre et travaux une fois descriptif complété"
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.3. Méthodologie",
            items: [
                {
                    code: "A30",
                    description: "ZPSO mal ou non définies",
                    evaluation: "C",
                    observation: "ZPSO clairement définies et numérotées",
                    action: ""
                },
                {
                    code: "A31",
                    description: "Regroupement ouvrages hétérogènes dans même ZPSO",
                    evaluation: "C",
                    observation: "ZPSO regroupent matériaux homogènes",
                    action: ""
                },
                {
                    code: "A32",
                    description: "Nombre analyses/sondages non conforme NF X46-020",
                    evaluation: "X",
                    observation: "29 prélèvements effectués, impossible de vérifier sans périmètre exact",
                    action: "Vérifier conformité une fois descriptif travaux complété"
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.4. Préconisations",
            items: [
                {
                    code: "A33",
                    description: "Préconisations absentes ou inadaptées",
                    evaluation: "X",
                    observation: "Repérage avant travaux : préconisations concernent gestion retrait",
                    action: ""
                },
                {
                    code: "A34",
                    description: "État conservation flocages/calorifugeages sans grille réglementaire",
                    evaluation: "X",
                    observation: "Non applicable pour repérage avant travaux",
                    action: ""
                },
                {
                    code: "A35",
                    description: "État conservation MPCA liste B sans grille réglementaire",
                    evaluation: "X",
                    observation: "Non applicable pour repérage avant travaux",
                    action: ""
                },
                {
                    code: "A36",
                    description: "Éléments conclusion/recommandations gestion absents ou erronés",
                    evaluation: "X",
                    observation: "Non applicable pour repérage avant travaux",
                    action: ""
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.5. Conclusions et obligations",
            items: [
                {
                    code: "A37",
                    description: "Conclusions non rappelées en début de rapport",
                    evaluation: "C",
                    observation: "Synthèse présente page 1",
                    action: ""
                },
                {
                    code: "A38",
                    description: "Conclusions non explicites pour non spécialiste",
                    evaluation: "C",
                    observation: "Synthèse claire et compréhensible",
                    action: ""
                },
                {
                    code: "A39",
                    description: "Présentation conclusions insuffisante (composants amiantés non cités)",
                    evaluation: "R",
                    observation: "Synthèse mentionne présence amiante mais ne liste pas composants",
                    action: "Enrichir synthèse en listant principaux composants amiantés avec localisation"
                },
                {
                    code: "A40",
                    description: "Absence rappel obligations propriétaire ou incohérentes",
                    evaluation: "C",
                    observation: "Chapitre VI complet page 11",
                    action: ""
                },
                {
                    code: "A41",
                    description: "Absence rappel mission inachevée (locaux non visités)",
                    evaluation: "C",
                    observation: "Rappel présent page 1 + détail page 6",
                    action: ""
                },
                {
                    code: "A42",
                    description: "Absence rappel obligations propriétaire pour travaux sur matériaux amiantés",
                    evaluation: "C",
                    observation: "Section complète page 11",
                    action: ""
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.6. Annexe : PV d'analyses",
            items: [
                {
                    code: "A43",
                    description: "PV d'analyses non joints au rapport",
                    evaluation: "C",
                    observation: "Annexe 3 présente à partir page 18",
                    action: ""
                }
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.7. Annexe : Plans avec localisation",
            items: [
                {
                    code: "A44",
                    description: "Absence plans localisant parties immeuble",
                    evaluation: "C",
                    observation: "Annexe 2 présente page 14",
                    action: ""
                },
                {
                    code: "A45",
                    description: "Absence plans localisant MPCA",
                    evaluation: "C",
                    observation: "Croquis prélèvements présents page 7",
                    action: ""
                },
                {
                    code: "A46",
                    description: "Absence report/zonage MPCA sur plans",
                    evaluation: "X",
                    observation: "Non vérifiable sans accès visuel aux plans",
                    action: "Vérifier visuellement report avec légende claire"
                },
                {
                    code: "A47",
                    description: "Plans joints incomplets",
                    evaluation: "X",
                    observation: "Non vérifiable sans accès visuel",
                    action: "Vérifier que tous niveaux ont plans correspondants"
                },
                {
                    code: "A48",
                    description: "Légende du plan adaptée au contenu",
                    evaluation: "X",
                    observation: "Non vérifiable sans accès visuel",
                    action: "Vérifier distinction : amiantés/sans amiante/prélèvements/zones non visitées"
                },
                {
                    code: "A49",
                    description: "Absence report prélèvements sur plans/photos",
                    evaluation: "C",
                    observation: "Prélèvements identifiés avec numéros + photos page 13",
                    action: ""
                },
                {
                    code: "A50",
                    description: "Absence report sondages destructifs sur plans/photos",
                    evaluation: "X",
                    observation: "Pas de mention explicite de sondages destructifs",
                    action: "Si effectués, vérifier leur report sur plans"
                }
            ]
        },
        
        // COHÉRENCE MÉTIER
        {
            section: "3. COHÉRENCE MÉTIER",
            subsection: "3.1. Conclusion / Corps du rapport",
            items: [
                {
                    code: "A51",
                    description: "Incohérence entre conclusion et éléments du corps du rapport",
                    evaluation: "C",
                    observation: "Cohérence entre synthèse et tableaux détaillés",
                    action: ""
                }
            ]
        },
        {
            section: "3. COHÉRENCE MÉTIER",
            subsection: "3.2. Résultats amiante / PV d'Analyses",
            items: [
                {
                    code: "A52",
                    description: "Incohérence entre résultats et PV d'essais",
                    evaluation: "X",
                    observation: "Impossible de vérifier sans analyse détaillée des PV",
                    action: "Vérifier correspondance numéros prélèvements tableaux/PV et résultats identiques"
                }
            ]
        },
        {
            section: "3. COHÉRENCE MÉTIER",
            subsection: "3.3. Contenu / Photos ou descriptif",
            items: [
                {
                    code: "A53",
                    description: "Incohérence entre liste MPCA et informations du rapport",
                    evaluation: "C",
                    observation: "Cohérence entre photos page 13 et tableaux",
                    action: ""
                }
            ]
        }
    ],
    
    evat: [
        // Tous les points EVAT sont "X" (sans objet)
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.1. Organisme, intervenant et signature",
            items: [
                {code: "EVAT0", description: "Désignation de l'intervenant insuffisante", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT1", description: "Désignation société diagnostic absente ou insuffisante", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT2", description: "Visite et/ou rapport non daté(s)", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT3", description: "Incohérence identification intervenant", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.2. Donneur d'ordre",
            items: [
                {code: "EVAT4", description: "Désignation donneur d'ordre non mentionnée ou insuffisante", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.3. Identification immeuble",
            items: [
                {code: "EVAT5", description: "Absence adresse ou insuffisante", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT6", description: "Description immeuble inexistante ou imprécise", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.4. Objet de la mission",
            items: [
                {code: "EVAT7", description: "Objet mission non défini ou mal défini", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT8", description: "Description insuffisante travaux effectués", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.5. Références réglementaires",
            items: [
                {code: "EVAT9", description: "Textes réglementaires non adaptés", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "1. FORME DOCUMENTAIRE",
            subsection: "1.6. Organisme certificateur et assurance",
            items: [
                {code: "EVAT10", description: "Coordonnées organisme certificateur incomplètes", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT11", description: "Copie certificat non jointe", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT12", description: "Assurance non mentionnée ou erronée", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "2. CONTENU MÉTIER",
            subsection: "2.1. Examen visuel après travaux",
            items: [
                {code: "EVAT13", description: "Description travaux/zone retrait inexistante ou imprécise", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT14", description: "Absence schéma situant zone/secteurs examinés", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT15", description: "Secteurs non conformes non reportés sur schéma", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT16", description: "Absence fiches constats ou incomplètes", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""},
                {code: "EVAT17", description: "Présentation conclusions insuffisante", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        },
        {
            section: "3. COHÉRENCE MÉTIER",
            subsection: "3.1. Conclusion / Corps du rapport",
            items: [
                {code: "EVAT18", description: "Incohérence conclusion/corps du rapport", evaluation: "X", observation: "Rapport de repérage avant travaux, non un EVAT", action: ""}
            ]
        }
    ]
};
