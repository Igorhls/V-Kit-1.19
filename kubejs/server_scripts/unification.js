// priority:100

ServerEvents.recipes(event => {

    const IESlab = (metal,metalBlockToUse) => {
        event
            .shaped(
                '6x immersiveengineering:slab_storage_' + metal,
                ['BBB','   ','   '],
                {
                    B: '#forge:storage_blocks/' + metal,
                }
            )
            .id('immersiveengineering:crafting/storage_' + metal + '_to_slab')

        event
            .shaped(metalBlockToUse,['S ','S '],{
                S: 'immersiveengineering:slab_storage_' + metal,
            })
            .id('immersiveengineering:crafting/storage_' + metal + '_from_slab')
    }

    //recipe replacements
    IESlab('lead','thermal:lead_block')
    IESlab('silver','thermal:silver_block')
    IESlab('nickel','thermal:nickel_block')
    IESlab('electrum','thermal:electrum_block')
    IESlab('constantan','thermal:constantan_block')
    IESlab('steel','thermal:steel_block')



    //Pulverizer additions

    const pulverizerAdditions = [
        ['forge:ores/uranium','mekanism:dust_uranium'],
        ['forge:ores/osmium','mekanism:dust_osmium'],
        ['forge:ores/zinc','create:crushed_raw_zinc'],
        ['forge:raw_materials/osmium','mekanism:dust_osmium'],
        ['forge:raw_materials/uranium','mekanism:dust_uranium'],
        ['forge:raw_materials/zinc','create:crushed_raw_zinc']
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
        ['forge:raw_materials/zinc','create:crushed_raw_zinc'],
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
 })

