const preprocess = (text, filename) => [text.replace(/<\?.*\?>/g, '0')]
const postprocess = (messages, filename) => messages[0]

const extensions = [
	'.phtml',
	'.ctp',
	'.php'
]

const processors = {}

extensions.forEach((extension) => {
	processors[extension] = {
		preprocess: preprocess,
		postprocess: postprocess
	}
})

module.exports = { processors: processors }
