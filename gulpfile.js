const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require ('gulp-concat');
const autoprefixer = require ('gulp-autoprefixer');
const cleancss = require ('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');


function browsersync(){
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true
    })
}

function scripts(){
    return src(
        'app/js/app.js'
    ).pipe(browserSync.stream())

}

function style(){ 
    return src('app/scss/main.scss')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
    .pipe(cleancss(({level: { 1: { specialComments:0} }, format: 'beautify' } )))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream())
}

function images(){ 
    return src('app/images/src/**/*')
    .pipe(newer('app/images/dest/'))
    .pipe(imagemin())
    .pipe(dest('app/images/dest/'))
}

function cleanimg(){
    return del('app/images/dest/**/*')
}
function cleandist(){
    return del('dist/**/*')
}

function buildcopy(){
    return src(['app/css/**/*.min.css',
        'app/js/**/*.js',
        'app/images/dest/**/*',
        'app/**/*.html'])
    .pipe(dest('dest'));
}

function startwatch(){
    watch(['app/**/' + "scss" + '/**/*'], style);
    watch(['app/**/*.js', '!app/**/*.min.js'],scripts);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/images/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.style = style;
exports.images = images;
exports.cleanimg = cleanimg;
exports.build = series(cleandist, style, scripts, images, buildcopy);

exports.default = parallel(scripts, style, browsersync, startwatch);