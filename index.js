const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Who is', 'What is', 'History of']
		const SelectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
		const SelectedPrefixText = prefixes[SelectedPrefixIndex]

		return SelectedPrefixText
	}

	console.log(content)
}

start()