// export function init(param){
// 	Page(param);
// }

function Img(filename, ext=".png",state) {
	const IMG_FILES_FOLDER = "../../img/";
	let SUBFIX = ext;

	if (state === undefined) {
		return [
		IMG_FILES_FOLDER,
		filename,
		SUBFIX
		].join("");
	} else {
		return [
		IMG_FILES_FOLDER,
		filename,
		"-",
		state,
		SUBFIX
		].join("");
	}
}