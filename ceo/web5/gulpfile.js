import gulp from "gulp";
import * as nodePath from 'path';
import browserSync from "browser-sync"; 

const domain = nodePath.basename(nodePath.resolve()) + '/';
global.gulp = gulp;

browserSync.create()

browserSync.init({
    server: './',
    notify: false,
    port: 3000,
})

function reloadServer(cb) {
	browserSync.reload();
    cb();
}

function watcher() {
    gulp.watch( "./**/*.*",  gulp.series( reloadServer ) );
}

export const start = gulp.series( watcher );