import Ploeg from "@/components/Ploegleden/Ploeg";
import {getTranslations} from "next-intl/server";

export default async function PloegPage() {

    // ploeg translations
    const ploeg = await getTranslations('Ploeg');
    const keysPloeg = ['g5', 'catering', 'digitaal', 'evenementen', 'locatie', 'marketing', 'natura', 'pre', 'sponsoring', 'standpunten'];
    const ploegTranslations = {};
    keysPloeg.forEach(key => {
        ploegTranslations[key] = ploeg(key);
    });

    // single ploeglid translations
    const singlePloegLid = await getTranslations('SinglePloeglid');
    const keysSinglePloegLid = ['description', 'Kandidaat Praeses', "Kandidaat Vice-Praeses", "Kandidaat Beheerder", "Kandidaat Secretaris"];
    const singlePloedLidTranslations = {};
    keysSinglePloegLid.forEach(key => {
        singlePloedLidTranslations[key] = singlePloegLid(key);
    });

    // single ploeglid translations
    const teamHero = await getTranslations('TeamHero');
    const keysTeamHero = ['description'];
    const teamHeroTranslations = {};
    keysTeamHero.forEach(key => {
        teamHeroTranslations[key] = teamHero(key);
    });



    return(
        <Ploeg translations={ploegTranslations} singlePloegLidTranslations={singlePloedLidTranslations} teamHeroTranslations={teamHeroTranslations}/>
    )
}
