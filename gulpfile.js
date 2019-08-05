const gulp = require("gulp");
// const { src, dest, parallel } = require('gulp');
const  sass = require('gulp-sass'); // Ïîäêëþ÷àåì Sass ïàêåò
const { watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


function SassToCss() { // Ñîçäàåì òàñê "sass"
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Áåðåì èñòî÷íèê
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Ïðåîáðàçóåì Sass â CSS ïîñðåäñòâîì gulp-sass
    .pipe(autoprefixer({
    	grid: true,
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css')) // Âûãðóæàåì ðåçóëüòàòà â ïàïêó css
  }
let cleanCSS = require('gulp-clean-css');
 
// gulp.task('minify-css', () => {
//   return gulp.src('styles/*.css')
//     .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'));
// });

// const  watcher =
//   gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Íàáëþäåíèå çà sass ôàéëàìè â ïàïêå sass


function watchFiles() {
	watch(['sass/**/*.sass', 'sass/**/*.scss'], SassToCss);
}
exports.default = watchFiles;