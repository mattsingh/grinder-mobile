const basePath = 'https://cop4331-grinder.herokuapp.com/';

export default function path(extension) {

	return basePath + (extension ? extension : '');
}