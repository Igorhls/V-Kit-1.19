ServerEvents.recipes(event => {
const pulverizerAdditions = [
    ['forge:raw_materials/osmium','mekanism:dust_osmium'],
    ['forge:raw_materials/uranium','mekanism:dust_uranium'],
    ['forge:ores/zinc','create:crushed_raw_zinc']
]

pulverizerAdditions.forEach((material) => {
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
            "tag": material[0]
        },
        "result": [
            {
                "item": material[1],
                "chance": 2.0
            }
        ],
        "experience": 0.2
    })
})

const pulverizerAdditionsRaw = [
    ['forge:raw_materials/aluminum','immersiveengineering:dust_aluminum'],
    ['forge:raw_materials/uranium','mekanism:dust_uranium'],
    ['forge:raw_materials/osmium','mekanism:dust_osmium']

]

pulverizerAdditionsRaw.forEach((material) => {
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
            "tag": material[0]
        },
        "result": [
            {
                "item": material[1],
                "chance": 1.0
            }
        ],
        "experience": 0.2
    })
})

event.recipes.thermal.press('#forge:plates/brass','#forge:ingots/brass');
event.recipes.thermal.press('#forge:plates/zinc','#forge:ingots/zinc');
event.recipes.thermal.pulverizer('ae2:certus_quartz_dust','ae2:certus_quartz_crystal');
event.recipes.thermal.pulverizer('ae2:fluix_dust','ae2:fluix_crystal')
})