Hooks.on("ready", () => {

    // add onto the feature list as demonstrated in the SRD classes 
    // the syntax is: Compendium.{pack_key}.{pack_name}.{item.id}
    // for items held in the Custom Classes pack use "Compendium.custom-classes.classfeatures.ID_here"

    // Name of our custom class "gentleman"
    CONFIG.DND5E.classFeatures.gentleman = {
        // We'll define the subclasses here.
        "subclasses": {
            "dapper": {
                // The label is what the subclass is called on the Class Detail subclass field.  
                "label": "Dapper",
                "source": "Custom Class",
                "features": {
                    // Here is where we define the levels and Feature Items that are granted at each level.
                    "3": ["Compendium.gentleman-class.classfeatures.yIqURYps0rF9ruMw"], // Level 3 Dapper starts with "The Look"
                    "7": ["Compendium.gentleman-class.classfeatures.ignTxOAxBfQoo4et"], // Level 7 Dapper gets "Remarkable Style"
                    "9": ["Compendium.gentleman-class.classfeatures.zyG79fpshhSSwNu7"] // Level 9 Dapper gets "Cock of the Walk"
                }
            }
        },
        // Here is where we define the class features for the main class and the levels at which they are received.
        "features": {
            // Level 1 Gentleman gets "Fancy Dress" and "Social Ease"
            "1": ["Compendium.gentleman-class.classfeatures.FNnu19d6dpbEthCf", "Compendium.gentleman-class.classfeatures.B6uljogi5fPLAwHM"],
            "2": ["Compendium.gentleman-class.classfeatures.BabnQGpEKTXLTM5y"], // Level 2 Gentleman gets "Snappy Dresser"
            "3": ["Compendium.gentleman-class.classfeatures.ZFfgesFO8QQlQjb7"], // Level 3 Gentleman gets "Gentleman Archetype"
            "4": ["Compendium.dnd5e.classfeatures.sPy2OLoN7JaAcMl4"],  // Level 4 Gentleman steals the "Ability Score Improvement" from the SRD Fighter
            "5": ["Compendium.dnd5e.classfeatures.q9g1MLXuLZyxjQMg"], // Level 5 Gentleman steals the "Extra Attack" from the SRD fighter.
            "6": ["Compendium.dnd5e.classfeatures.sPy2OLoN7JaAcMl4"],  // Level 6 Gentleman steals the "Ability Score Improvement" from the SRD Fighter
            "8": ["Compendium.dnd5e.classfeatures.sPy2OLoN7JaAcMl4"]  // Level 8 Gentleman steals the "Ability Score Improvement" from the SRD Fighter
        }
    };
});

// This is a function to print out class features.
class CustomClasses {

    static async exportList() {
        const packData = await game.packs.get("gentleman-class.classfeatures").getContent()
        const data = packData.reduce((a, v) => { return a += `${v.name}: ${v.id}\r` }, '')
        let date = new Date().toDateString().replace(/\s/g, "-");
        const filename = `CustomClasses-${date}.txt`;
        saveDataToFile(data, "text/plain", filename)
    }
}

globalThis.CustomClasses = CustomClasses