function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  Img : Img
}
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