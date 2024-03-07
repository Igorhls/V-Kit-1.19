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


 })

