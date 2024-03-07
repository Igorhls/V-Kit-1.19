// priority: 0

JEIEvents.hideItems(event => {

	const hide = [
		'ae2:facade'
	]

	hide.forEach((id) => {
		//   console.log('Hiding item: ' + id)
		event.hide(id)
	})


	global['hideOres'].forEach((hide) => {
		event.hide(hide)
	})


	global['unUnified'].forEach((unid) => {
		event.hide(unid)
	})

})

JEIEvents.removeCategories(event => {
	//console.log(event.getCategoryIds())

	const removeCategories = [
	'create:draining',
	'create:automatic_shapeless',
	'create:automatic_shaped',
	'create:automatic_packaging',
	'create:automatic_packing'
	]

	removeCategories.forEach((catid) => {
		// console.log('Removing category id for: ' + catid)
		event.remove(catid)
	})
})


